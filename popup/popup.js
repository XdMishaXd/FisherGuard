document.getElementById('checkbox_1').addEventListener('change', function() {
    localStorage.setItem('checkboxState', this.checked);
    let checkboxState = document.getElementById('checkbox_1');
    chrome.runtime.sendMessage({variable: checkboxState}, function(response) {
        console.log("Ответ от background.js:", response);
    });
});

window.addEventListener('load', function() {
    const checkboxState = localStorage.getItem('checkboxState') === 'true';
    document.getElementById('checkbox_1').checked = checkboxState;
});

