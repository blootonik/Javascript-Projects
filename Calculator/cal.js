const display = document.getElementById('display-output');

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }