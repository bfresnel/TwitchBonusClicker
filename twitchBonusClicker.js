// Script part
setInterval(function() {
    clickOnButtonIfBonusButtonIsAvailable();
}, 150000);

// function part
function clickOnButtonIfBonusButtonIsAvailable(){
    var bonusButton = document.getElementsByClassName('tw-button tw-button--success tw-interactive');
    if (bonusButton.length === 0){
        console.log('[TwitchButtonClicker] Bonus button is not available for the moment');
    } else {
        console.log('[TwitchButtonClicker] Bonus button is available !');
        bonusButton[0].click();
    }
}