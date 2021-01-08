const fill = document.querySelector('.fill') 
const boxes = document.querySelectorAll('.box') 


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const box of boxes){
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
}

 function dragStart(){
     this.className += ' hold'
     setTimeout(()=> this.className = 'invisible', 0)
     
 }

 function dragEnd(){
    this.className = 'fill'
}

function dragOver(el){
    el.preventDefault()
}

function dragEnter(el){
    el.preventDefault()
    this.className += ' hovered'
}

function dragLeave(){
    console.log('drag leave')
    this.className = 'box'
}

function dragDrop(){
    this.className = 'box'
    this.append(fill)
}


