// let boxes=document.querySelectorAll(".box");
// let resetgame=document.querySelector("#reset");

// let turnO=true;
// const Winpattern=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked");
//         if(turnO){
//             box.innerText="O";
//             turnO=false;
//         }else{
//             box.innerText="X";
//             turnO=true;
//         }
//         box.disabled=true;
//          checkWinner();
//     });
// });
// const checkWinner=()=>{
// for(let pattern of Winpattern){
//     let pos1Val=boxes[pattern[0]].innerText;
//     let pos2Val =boxes[pattern[1]].innerText;
//     let pos3Val=boxes[pattern[2]].innerText;
//     if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
//         if(pos1Val === pos2Val && pos2Val=== pos3Val){
//             console.log("winner");
//         }
//     }
// }
// };



let boxes=document.querySelectorAll(".box");
let resetgame=document.querySelector("#reset");

let turnO=true;
const Winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
         checkWinner();
    });
});
const checkWinner = () => {
    for (let pattern of Winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner: " + pos1Val); // Log winner in console
                
                // *Disable all boxes to stop the game*
                boxes.forEach(box => box.disabled = true);
                return; // Exit function after winner is found
            }
        }
    }

    // Check for a draw (if all boxes are filled and no winner)
    let isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        console.log("It's a Draw!");
        boxes.forEach(box => box.disabled = true); // *Stop the game in case of a draw*
    }
};