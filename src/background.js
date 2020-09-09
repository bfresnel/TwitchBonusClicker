/**
 * URL when twitch is visited for the first time
 */
var currentUrl = document.location.href;
/**
 * MutationObserver for the bonus button
 */
var buttonObserver;
/**
 * Event for every URL change
 */
var eventUrlChange;
/**
 * Part of twitch UI containing the bonus button
 */
var inputContainer;
/**
 * Configurations for the MutationObserver aka buttonObserver
 */
const mutationConfig = {
    childList: true,
    attributes: true,
    subtree: true,
};

// Creating custom event for every url change
eventUrlChange = document.createEvent("HTMLEvents");
eventUrlChange.initEvent("onUrlChange", true, true);
eventUrlChange.eventName = "onUrlChange";
setInterval(refreshCurrentUrl,3000);

// adding Event when the page is fully loaded
window.addEventListener('load', (event) => {
    init();
});

// adding Event when we change stream channel
window.addEventListener('onUrlChange', (event) => {
    init();
});


/**
 * initialize all the observer needed to click on the
 * bonus button
 */
function init() {
    // if the buttonObserver already exist but was
    // for an another page
    if (buttonObserver){
        buttonObserver.disconnect();
    }

    clickOnBonusButton();
    inputContainer = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
    buttonObserver = new MutationObserver(callback);
    if (inputContainer.length > 0) {
        buttonObserver.observe(inputContainer[0], mutationConfig);
    }
}

/**
 * Callback for the mutationObserver
 */
function callback(mutationRecord, observer){
    for (var i = 0, length = mutationRecord.length; i< length; i++){
        var mutation = mutationRecord[i];
        if (mutation.type === 'childList'){
            clickOnBonusButton();
        }
    }
}

/**
 * We have to refresh the url because twitch is an SAP website.
 * We cannot count on 'load' event for every channel
 */
function refreshCurrentUrl() {
    if (currentUrl !== document.location.href){
        currentUrl = document.location.href;
        document.dispatchEvent(eventUrlChange);
    }
}

function clickOnBonusButton() {
    var buttonInput = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
    if (buttonInput.length > 0) {
        buttonInput[0].click();
    }
}