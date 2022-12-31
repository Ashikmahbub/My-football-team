//  creating empty array to  make player array 

const playerArray = [];

// call all button in specific class 

var buttons = document.querySelectorAll('.player-card button');


// call unordered list to appened new li element 

var makingPlayerList = document.getElementById('make-list');





// disable button after selecting player 
function disableButton(btnId){
    const playerButton = document.getElementById(btnId);

    playerButton.disabled = "true";
    playerButton.style.backgroundColor ="gray";

}

// taking all player name from array and create list 



function listPlayer(player) {
    for (let i = 0; i < player.length; i++) {

        let item = playerArray[i];

        const serialNumber = makingPlayerList.childNodes.length;
        // limiting top five list to five 

        if (serialNumber <=5) {
            // create li element to to the unordered list 
            const newLi = document.createElement('li');
             
            // update li tag inner text 
            



            newLi.innerHTML = `${serialNumber}. ${item}`;

            // add new li element to parent node 
             
            makingPlayerList.appendChild(newLi);
    
        }
        else{
             alert('You can not select more than five ');
             
        }
    }

}


// Add a click event listener to each button
buttons.forEach(function (player) {
    player.addEventListener('click', function () {
        // Get the parent node of the button
        var playerName = this.parentNode.children[0].innerHTML;
        let buttonId = this.id;
         


        // add player to  array after selection
        
        playerArray.push(playerName);

        // call listPlayer function to make list 
           
        
        listPlayer(playerArray);

        // remove player to avoid same player 
       
        
        playerArray.pop(playerName);
        // call disable function to disable button after select 

         
        disableButton(buttonId);
    });
});

 









document.getElementById('player-cost-btn').addEventListener('click',function(){
    const numberOfPlayer =makingPlayerList.childNodes.length;



    // per player budget calculation
     const perPlayerExpensesValue =    getElementValueById('per-player-cost');
    
    
   
    
  
   
    let totalPlayerExpenses =perPlayerExpensesValue * (numberOfPlayer-1);

    updateElementById('player-expense',totalPlayerExpenses);

    // manager expenses
   

    // coach expenses 

    

})
document.getElementById('btn-total').addEventListener('click',function(){
   

    const playerCost =document.getElementById('player-expense');
    const playerCostString = playerCost.innerText;
    const playerCostValue = parseFloat(playerCostString);

   const managerCost = getElementValueById('manager-cost');
   const coachCost =getElementValueById('coach-cost');
   let totalExpense =managerCost +coachCost+playerCostValue;



     
    updateElementById('total-cost',totalExpense);
})
