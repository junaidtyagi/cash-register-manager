const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000, 500, 100, 50, 20, 10, 5, 1];

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberOfNotes =Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}


function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText= msg;
}

checkButton.addEventListener("click",function cashRegister(){
    hideMessage();
 if(billAmount.value > 0){
   if(billAmount.value >= cashGiven.value){
     const amountToBeReturned= cashGiven.value - billAmount.value;
     calculateChange(amountToBeReturned);

   }else{
    showMessage(" do you wanna wash plates");
   }
 }
 else{
    showMessage("invalid Bill Amount");
 }
});





