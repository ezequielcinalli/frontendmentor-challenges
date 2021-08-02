document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
    //FIND NODES --------------------------------

    //bill
    const labelErrorBill = document.getElementById("label-error-bill");
    const billInput = document.getElementById("bill");
    //tip
    const labelErrorTip = document.getElementById("label-error-tip");
    const customInput = document.getElementById("custom");
    const customRadio = document.getElementById("custom-radio");
    const radioButtonsTip = document.querySelectorAll(".tip");
    //people
    const labelErrorPeople = document.getElementById("label-error-people");
    const peopleInput = document.getElementById("people");
    //total
    const tipAmountPerson = document.getElementById("tip-amount-person");
    const totalPerson = document.getElementById("total-person");
    const resetButton = document.getElementById("reset");

    //LISTENERS ----------------------------------

    billInput.addEventListener("focusin", function () {
        if (billInput.value === "0") billInput.value = "";
    });
    billInput.addEventListener("keydown", checkForOnlyNumber);
    billInput.addEventListener("input", updateCalculator);

    customInput.addEventListener("keydown", checkForOnlyNumber);
    customInput.addEventListener("focusin", function () {
        if (customInput.value === "Custom") customInput.value = "";
        clearTipActive();
        customInput.classList.add("tip-active");
        customRadio.checked = true;
        updateCalculator();
    });
    customInput.addEventListener("focusout", function () {
        if (customInput.value == 0) customInput.value = 0;
    });
    customInput.addEventListener("input", function () {
        customRadio.value = customInput.value;
        updateCalculator();
    });

    radioButtonsTip.forEach((r) => {
        r.addEventListener("click", addActiveTip);
    });

    peopleInput.addEventListener("focusin", function () {
        if (peopleInput.value === "0") peopleInput.value = "";
    });
    peopleInput.addEventListener("keydown", checkForOnlyNumber);
    peopleInput.addEventListener("input", updateCalculator);

    resetButton.addEventListener("click", resetCalculator);

    //FUNCTIONS ----------------------------------

    function checkForOnlyNumber(event) {
        let keyCode = event.keyCode;
        if (!((keyCode >= 48 && keyCode <= 57) || keyCode == 8)) {
            event.preventDefault();
        }
    }

    function clearTipActive() {
        radioButtonsTip.forEach((r) => {
            r.classList.remove("tip-active");
        });
    }

    function addActiveTip(event) {
        if (event.target.classList.contains("tip")) {
            clearTipActive();
            customInput.classList.remove("tip-active");
            event.target.classList.add("tip-active");
        }
        updateCalculator();
    }

    function checkBill() {
        if (
            isNaN(parseInt(billInput.value)) ||
            parseInt(billInput.value) == 0
        ) {
            labelErrorBill.classList.add("show");
            billInput.classList.add("input-error");
            clearDisplay();
            return false;
        }
        labelErrorBill.classList.remove("show");
        billInput.classList.remove("input-error");
        return true;
    }

    function checkTip() {
        if (document.querySelector("input[name=tip]:checked") == null) {
            labelErrorTip.classList.add("show");
            return false;
        }
        labelErrorTip.classList.remove("show");
        return true;
    }

    function checkPeople() {
        if (
            isNaN(parseInt(peopleInput.value)) ||
            parseInt(peopleInput.value) == 0
        ) {
            labelErrorPeople.classList.add("show");
            peopleInput.classList.add("input-error");
            clearDisplay();
            return false;
        }
        labelErrorPeople.classList.remove("show");
        peopleInput.classList.remove("input-error");
        return true;
    }

    function updateCalculator() {
        resetButton.removeAttribute("disabled");
        resetButton.classList.add("reset-active");

        //check for errors
        if (checkBill() && checkTip() && checkPeople()) {
            //update display
            let total = 0;
            let bill = parseInt(billInput.value);

            let tip = parseInt(
                document.querySelector("input[name=tip]:checked").value
            );
            if (isNaN(tip)) tip = 0;

            let people = parseInt(peopleInput.value);

            total = bill + (bill * tip) / 100;

            tipAmountPerson.innerHTML = parseFloat(
                (total - bill) / people
            ).toFixed(2);
            totalPerson.innerHTML = parseFloat(total / people).toFixed(2);
        }
    }

    function clearDisplay() {
        tipAmountPerson.innerHTML = "0.00";
        totalPerson.innerHTML = "0.00";
    }

    function resetCalculator() {
        billInput.value = 0;
        customInput.value = "Custom";
        peopleInput.value = 0;
        clearDisplay();
        resetButton.setAttribute("disabled", true);
        resetButton.classList.remove("reset-active");

        labelErrorBill.classList.remove("show");
        billInput.classList.remove("input-error");

        labelErrorTip.classList.remove("show");
        clearTipActive();

        labelErrorPeople.classList.remove("show");
        peopleInput.classList.remove("input-error");
    }
}
