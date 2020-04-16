let totalcells=document.querySelectorAll('.cell')
let board=document.getElementById('board')
let win=document.getElementById('win')
let condition=document.getElementById('cond')
let btn=document.getElementById('btn') 
let cells=document.getElementsByClassName('cell')


let count=0
let flag=0
let storeflag=0

let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
//x and circle variable declarations
const x='x'
const circle='circle'
let currentclass
let currentclassswap
//hover variable  declarations
const xhover='xhover'
const circlehover='circlehover'
let currentchance
let currentchanceswap
let m=0


startgame();

function startgame()
{
    //making all cells empty used for restart
    for(let i=0;i<totalcells.length;i++)
    {
        totalcells[i].classList.remove(x)
        totalcells[i].classList.remove(circle)
   
    }

    //removing hovers
    board.classList.remove(xhover)
    board.classList.remove(circlehover)

    //remove show
    win.classList.remove('show')

    //assigning x || circle to mark on board
    currentclass=circle
    currentclassswap=swapclass()

    //assigning x || circle to hover on board
    currentchance=circlehover
    currentchanceswap=swap()

    //adding hover to board
    board.classList.add(currentchanceswap)
       
    
    for(let i=0;i<totalcells.length;i++)
    {
        
        totalcells[i].addEventListener('click',mark,{once:true}) 
       
   
    }
}
    function mark(e)
    {
       
        m++
        if(m==totalcells.length)
        {
            win.classList.add('show')
            
            storeflag=0;
            flag=0;
            btn.addEventListener('click',startgame)
        }
        if(storeflag>0)
        {
            console.log(storeflag)
        
            current.classList.remove(x)
            current.classList.remove(circle)
            
        }
        let current=e.target;

        //add x || circle to cells
        current.classList.add(currentclassswap)
        //check for winning
        storeflag=checkwinner();
         
        currentclassswap=swapclass()
        //prevents from overrinding 
        board.classList.remove(currentchanceswap)
        currentchanceswap=swap()
        board.classList.add(currentchanceswap)
        if(storeflag>0)
        {
            win.classList.add('show')
            
            storeflag=0;
            flag=0;
            btn.addEventListener('click',startgame)
         }   
    }



//swap for hover
function swap()
{
    if(currentchance==circlehover)
    {
        currentchance=xhover
        return xhover
    }
    
    else
    {
        currentchance=circlehover
        return circlehover
    }
   
}
//swapping classes for markplace
function swapclass()
{
    if(currentclass==circle)
    {
        currentclass=x
        return x
    }
    
    else
    {
        currentclass=circle
        return circle
    }
   
}

function checkwinner()
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(totalcells[arr[i][j]].classList.contains(currentclass))
            count++;
        }
        if(count==3)
        {
            condition.innerText=`${currentclass} is winner`
            console.log(currentclass + " "+ 'is winner')
            flag++;
        }
        
        count=0;
    }
    return flag
}