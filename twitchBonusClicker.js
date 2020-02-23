// Script part
var intervalId;

intervalId = setInterval(function() {
    clickOnButtonIfBonusButtonIsAvailable();
}, 60000);

// function part
function clickOnButtonIfBonusButtonIsAvailable(){
    var bonusButton = document.getElementsByClassName('tw-button tw-button--success tw-interactive');
    if (bonusButton.length === 0){
        console.log(displayCurrentTime() + ' - [TwitchButtonClicker] Bonus button is not available for the moment');
    } else {
        console.log(displayCurrentTime() + ' - [TwitchButtonClicker] Bonus button is available !');
        bonusButton[0].click();
    }
}

function displayCurrentTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var seconde = currentDate.getSeconds();

    return '[' + hour + ':' + minute + ':' + seconde + ']';
}