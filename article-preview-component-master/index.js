document.addEventListener("DOMContentLoaded", init);

function init() {
    const iconShare = document.querySelector("#icon-share");
    const tooltipBox = document.querySelector("#tooltip-box");

    iconShare.addEventListener("click", toggleTooltip);
    tooltipBox.addEventListener("click", toggleTooltip);


    function toggleTooltip() {
        tooltipBox.classList.toggle("flex");
        iconShare.classList.toggle("border-icon-share");
    }
}