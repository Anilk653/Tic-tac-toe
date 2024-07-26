let con=document.querySelector("#main");
console.dir(con);
let boxes=document.querySelectorAll(".box");
console.dir(boxes);
let newIn=document.querySelector(".in");
let newHead=document.querySelector("#head");
let but1=document.querySelector("#but1");
let but2=document.querySelector("#but2");
let las=document.querySelector("#last");
let head2=document.querySelector("#heading2");
console.dir(head2);
let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
console.dir(arr);
let mode="X";
let brr=[];
let crr=[];
let flag=0;
    boxes.forEach((val)=>{
        val.addEventListener("click",()=>{
            if(mode=="X"){
                val.innerText="X";
                mode="O"
            }
            else{
                val.innerText="O";
                mode="X";
            }
            val.disabled=true;
            head2.innerText=`Player ${mode} Turn`;
            checkWin();
        });
    });
    but2.addEventListener("click",()=>{
        con.style.display="";
        head2.style.display="";
        head2.innerText="In this there are two players X(player1) and O(player2). The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner!";
        for(let it of boxes){
            it.innerText="";
            it.disabled=false;
        }
        mode="X";
    });
    but1.addEventListener("click",()=>{
    newIn.classList.add("out");
    con.style.display="";
    las.style.display="";
    head2.style.display="";
    head2.innerText="In this there are two players X(player1) and O(player2). The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner!";
    for(let it of boxes){
        it.innerText="";
        it.disabled=false;
    }
    mode="X";
});
    const checkWin=()=>{
        for(let it of arr){
            let s="";
            for(let i of it){
                s=s+boxes[i].innerText;
            }
            if(s=="XXX" || s=="OOO"){
                winner=s[0];
                showRes(winner);
            }

        }
        

    }
    let showRes=(winner)=>{
            newIn.classList.remove("out");
            newHead.innerText=`Congratulations Player ${winner} Won the Game`;
            head2.style.display="none";
            con.style.display="none";
            las.style.display="none";

    }
    

   
