const circle='circle'
const x='x'
const cellElements=document.querySelectorAll('[data-cell]')
const board=document.getElementById('board')
let turn
cellElements.forEach(cell=>
{
    cell.addEventListener('click',dosomething,{once:true})
})
function dosomething(e)
{
    const cell=e.target
    const current=turn?circle:x
    placemark(cell,current)
    hover()
    swap()
}

function placemark(cell,current){
    cell.classList.add(current)
}

function hover()
{
    board.classList.remove(circle)
    board.classList.remove(x)
    if(turn)
    board.classList.add(x)
    else
    board.classList.add(circle)
}

function swap()
{
   turn=!turn;
}
