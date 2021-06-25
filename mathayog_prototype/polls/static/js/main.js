const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

var state;
var wrongDeck;
var wrongSail;
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
      $('#tutor-response-main').slideDown("slow");
      $("#bar-model").slideDown("slow");
      $("#ship-deck").slideUp("slow");
      $("#done1").slideUp("slow");
      $('#tp1-1').slideUp("slow");
      $('#tp1-2').slideUp("slow");
      $('#tp1-3').slideUp("slow");
      $('#tp1-4').slideUp("slow");
      $('#tp1-5').slideUp("slow");
      $('#tp1-6').slideUp("slow");
      $('#tp1-7').slideUp("slow");
      $('#tp0-1').slideUp("slow");
      $('#tp0-2').slideUp("slow");
      $('#tp0-3').slideUp("slow");
      $('#tp0-5').slideUp("slow");
    }, 2000);
    setTimeout(function() {
      $('#tp1-10').slideDown("slow");
    }, 3000);
    setTimeout(function() {
      $('#tp1-11').slideDown("slow");
    }, 6000);
  }
});

$("#area3").on("click", function(e){
  e.preventDefault();
  console.log('invalid area clicked');

  if (state == 0) {
    //incorrect
    $("#tp1-3").slideDown("slow");

  }
  else if(state == 1){
    $("#tp1-6").slideDown("slow");
  }
});

var one_correct = false;
var one_wrong = false;

$("#sail-input").on('blur', function (e) {
        if(this.value=="sail" && one_correct){
            // correct lahat
            console.log("Show response");
            $('#tp1-9').slideDown("slow");

            console.log("to percent stage")
            setTimeout(function() {
              $('#percent1').slideDown("slow");
              $('#percent2').slideDown("slow");
              $('#percent3').slideDown("slow");
              $('#sail-deck-mini').slideUp("slow");
            }, 3000);
            // disable input feiolds
            //this.prop('disabled', true);
            this.disabled = true;
            $('#deck-input').prop('disabled', true);


        }
        else if (this.value=="sail" && !one_correct){
            one_correct = true;
            console.log("Correct answer");
        }
        else {
            if (!one_wrong){ $('#tp1-8').slideDown("slow");  }
            else {one_wrong=true}
            $('#deck-input').val('');
            this.value = '';
         }
    });

$("#deck-input").on('blur', function (e) {
        if(this.value=="deck" && one_correct){
            console.log("Show response");
            $('#tp1-9').slideDown("slow");

            console.log("to percent stage")
            setTimeout(function() {
              $('#percent1').slideDown("slow");
              $('#percent2').slideDown("slow");
              $('#percent3').slideDown("slow");
              $('#sail-deck-mini').slideUp("slow");
            }, 3000);

            // disable input feiolds
            this.disabled = true;
            $('#deck-input').prop('disabled', true);
        }
        else if (this.value=="deck" && !one_correct){
            one_correct = true;
            console.log("Correct answer");
        }
        else {
            if (!one_wrong){ $('#tp1-8').slideDown("slow");  }
            else {one_wrong=true}
            $('#deck-input').val('');
            this.value = '';
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

