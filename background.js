var inputContainer;
const mutationConfig = {
    childList: true,
    attributes: true,
    subtree: true,
};

window.addEventListener('load', (event) => {
    inputContainer = document.getElementsByClassName("tw-full-height tw-relative tw-z-above");
    var buttonObserver = new MutationObserver(callback);
    buttonObserver.observe(inputContainer[0], mutationConfig);
});

function callback(mutationRecord, observer){
    for (var i = 0, length = mutationRecord.length; i< length; i++){
        var mutation = mutationRecord[i];
        if (mutation.type === 'childList'){
            var buttonInput = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
            if (buttonInput.length > 0){
                console.log(displayCurrentTime() + ' - [TwitchButtonClicker] Bonus button is available !');
                buttonInput[0].click();
            }
        }
    }
}

function displayCurrentTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var seconde = currentDate.getSeconds();

    if (hour < 10){
        hour = '0' + hour;
    }

    if (minute < 10){
        minute = '0' + minute;
    }

    if (seconde < 10){
        seconde = '0' + seconde;
    }

    return '[' + hour + ':' + minute + ':' + seconde + ']';
}