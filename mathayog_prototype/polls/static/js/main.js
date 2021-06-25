const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

var state;
// Fill listeners
for (const fil of fill){

  fil.addEventListener('dragstart', dragStart);
  fil.addEventListener('dragend', dragEnd);
}


// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart(e) {
  this.className += ' hold';
  e.dataTransfer.setData('text/plain', e.target.id);
  //setTimeout(() => (this.className = 'invisible'), 0);
}


function dragEnd(e) {
  this.className = 'fill';
  const id1 = e.dataTransfer.getData('text');
  e.dataTransfer.clearData();
}


function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop(e) {
  this.className = 'empty';
  const id = e.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  this.append(draggableElement)
}

/*code for area map of deck area*/
$("#area1").on("click", function(e){
  e.preventDefault();
  console.log('deck clicked');

  if (state == 0) {
    //correct
    $("#tp1-4").slideDown("slow");
    setTimeout(function() {
      $("#tp1-5").slideDown("slow");
    }, 3000);
    state = 1;
  }
  else if(state == 1){
    $("#tp1-6").slideDown("slow");
  }
  
  
});
/*code for area map of sail area*/
$("#area2").on("click", function(e){
  e.preventDefault();
  console.log('sail clicked')
  if (state == 0) {
    $("#tp1-3").slideDown("slow");
  }
  else if(state == 1){
    //correct
    $("#tp1-7").slideDown("slow");
    setTimeout(function() {
      $('#tutor-response-main').animate({width:'toggle'},350);
      $("#bar-model").slideDown("slow");
      $("#ship-deck").slideUp("slow");
      $("#done1").slideUp("slow");
      $('#tp1-3').slideUp("slow");
      $('#tp1-4').slideUp("slow");
      $('#tp1-5').slideUp("slow");
      $('#tp1-6').slideUp("slow");
      $('#tp1-7').slideUp("slow");
    }, 2000);
  }
});

// Student after finishing prelimary read of question
$(document).ready(function(){
  $("#done1").click(function(e){
    state = 0;
    $("#tp0-5").slideDown("slow");
    setTimeout(function() {
      $("#ship-deck").slideDown("slow");
      $("#done1").slideUp("slow");
      $('#tutor-response-main').animate({width:'toggle'},350);
      $('#tp0-1').slideUp("slow");
      $('#tp0-2').slideUp("slow");
      $('#tp0-3').slideUp("slow");
      $('#tp0-5').slideUp("slow");
    }, 2000);
    setTimeout(function() {
      $('#tutor-response-main').slideDown("slow");
    }, 3000);
    setTimeout(function() {
      $('#tp1-1').slideDown("slow");
    }, 3500);
    setTimeout(function() {
      $('#tp1-2').slideDown("slow");
    }, 5500);



  
  });
});

$(document).ready(function(){
  setTimeout(function() {
    console.log('first teacher prompt');
    $("#tp0-1").slideDown("slow");
    }, 2000);
  setTimeout(function() {
    console.log('second teacher prompt');
    $("#tp0-2").slideDown("slow");
    }, 4000);
  setTimeout(function() {
      console.log('third teacher prompt');
      $("#tp0-3").slideDown("slow");
      }, 6000); 
  
  });