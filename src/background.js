setInterval(clickOnBonusButton, 3300);

function clickOnBonusButton() {
    var buttonInput = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
    if (buttonInput.length > 0) {
        buttonInput[0].click();
    }
}