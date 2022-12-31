
// extract input field value 
function getElementValueById (elementId){
    const perPlayerBudget= document.getElementById( elementId);
    const budgetInputValue  = perPlayerBudget.value;
    const budgetInputNumber  = parseFloat(budgetInputValue);
    return budgetInputNumber;
    

}
// update value 
function updateElementById (elementId,value){
    const updateCost = document.getElementById(elementId)
    updateCost.innerText = value ;
}
