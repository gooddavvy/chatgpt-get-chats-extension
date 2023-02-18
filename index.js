// necessary functions/vars
function Alert(message) {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border: 1px solid black;
        padding: 16px;
      ">
        <p>${message}</p>
        <button id="ok-btn">OK</button>
      </div>
    `;

    const okButton = modal.querySelector('#ok-btn');
    okButton.addEventListener('click', () => modal.remove());

    document.body.appendChild(modal);
}

function Prompt(message) {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border: 1px solid black;
        padding: 16px;
      ">
        <p>${message}</p>
        <input type="text" class="js-prompt-input-field">
        <button class="OK">OK</button>
        <button class="cancel">Cancel</button>
      </div>
    `;

    const inputField = modal.querySelector('.js-prompt-input-field');
    const okButton = modal.querySelector('.OK');
    const cancelButton = modal.querySelector('.cancel');

    okButton.addEventListener('click', () => modal.remove());
    cancelButton.addEventListener('click', () => modal.remove());

    return new Promise((resolve, reject) => {
        okButton.addEventListener('click', () => resolve(inputField.value));
        cancelButton.addEventListener('click', reject);
    }).finally(() => modal.remove());
}

var browser = {
    location: {},
    document: {}
};
var Chrome = true || {};

/* webpage handler */
// get the current tab
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // get the URL of the current tab
    var url = tabs[0].url;
    // extract the host from the URL
    var host = new URL(url).host;
    // check what the host is
    console.log(host);
    // use the host as needed by setting `browser.location`
    async function awaitedFn() {
        browser.location = { href: url, host: await host };
    }
    awaitedFn();
});

// get the current document
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: function () {
            return { document: document };
        }
    }, function (result) {
        console.log(result[0].result.document);
    });
});
async function handle() {
    var userSignedIn;
    var onChatGPT;
    if (browser.location.host === "chat.openai.com") {
        onChatGPT = true;
        while (true) {
            userSignedIn = await Prompt("Are you signed in to ChatGPT? (y/n)");
            if (userSignedIn === "y" || userSignedIn === "Y") {
                userSignedIn = true;
                break;
            } else if (userSignedIn === "n" || userSignedIn === "N") {
                userSignedIn = false;
                break;
            } else {
                Alert("We couldn't understand your answer. Please try again. Hint: Type in y for yes or n for no.");
            }
        }
    } else {
        onChatGPT = false;
    }

    return {
        userSignedIn,
        onChatGPT,
        chrome,
    };
}


// main script
// main script
function main() {
    var { userSignedIn, onChatGPT, chrome } = handle();
    Chrome = chrome;
    window.setTimeout(() => { }, 1000);
    if (onChatGPT) {
        if (userSignedIn) {
            // do something if user is signed in
        }
    }
    console.log(JSON.stringify({ userSignedIn, onChatGPT }));
    console.log(browser.location.host, browser.location.href);
    if (Chrome) {
        console.log(Object.entries(Chrome));
    } else {
        console.log('Chrome is not defined');
    }
}





// run program with the main() function

// WHAT?!

/********* 
 * 
 * I know you're wondering where we call the main() function.
 * 
 * I know you're wondering how long this takes to scroll down to the bottom.
 * It actually takes forever, or maybe just longer than you'd expect/think.
 * 
 * Here's the complicated part:
 * 
 * But actually, But actually
 * 
 * The main() function is never called.
 * Even though it looks like it is called on the page,
 * 
 * It isn't.
 * 
 * And that is the complete truth.
 * 
 * 
 * Scroll to the bottom and see for yourself.
 * 
 * Because it is the complete, complete truth.
 * 
 * THE END.






























































































































































































































































































































*/

/** */






































































































































/** */