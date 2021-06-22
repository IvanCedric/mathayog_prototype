const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
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

/*var socket = new WebSocket('ws://localhost:8000/ws/some_url');

  socket.onmmessage = function(e){
  var data = JSON.parse(e.data);
  console.log(data);
  document.querySelector('#app').innerText = data.message;
}*/