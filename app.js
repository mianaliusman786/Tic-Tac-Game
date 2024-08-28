let boxes =document.querySelectorAll(".Box");
let resetbutton =document.querySelector("#Reset-button");

let turn0= true;

const winPatterns =[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4 ,6],
[3, 4, 5],
[6, 7, 8],
           ];

boxes.forEach((Box)=>{
    Box.addEventListener("click", ()=>{
        console.log("Box was printed");
       if(turn0){
             Box.innerText ="0";
             turn0 = false;
       }
       else{
         Box.innerText ="X";
            turn0=true;
      }
        Box.disabled = true;
        checkwinner();
       
    });
} );

const checkwinner =() => {
    for (let pattern of winPatterns){
 
          let pos1vl =  boxes[pattern[0]].innerText; 
          let pos2vl =   boxes[pattern[1]].innerText; 
          let pos3vl =  boxes[pattern[2]].innerText;

          if(pos1vl != "" && pos2vl !="" && pos3vl !="")
          {
            if(pos1vl === pos2vl && pos2vl===pos3vl){
                console.log("Winner")
            }
          }
       
    }
};