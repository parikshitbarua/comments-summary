let summarizeButton = document.getElementById('summarize-button');
let inputTextArea = document.getElementById('inputTextArea');
let outputTextArea = document.getElementById('outputTextArea');

summarizeButton.addEventListener('click', async () => {
    const inputText = inputTextArea.value;
    if (inputText.length <= 0) {
        outputTextArea.innerText = null;
    } else {
        let config = {
            method: 'POST',
            body : JSON.stringify(inputText),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log(config)
        const response = await fetch(window.location.origin +'/function/summarize',config);
        console.log(response)
        outputTextArea.innerText = response.summary;
    }
})