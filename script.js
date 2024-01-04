const toggleContainer = document.querySelector(".toggle-container");
const pageViewCount = document.querySelector(".pageviews");
let slider = document.querySelector("#range");
const amountEl = document.querySelector(".amount span");

toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("active");
  discount();
});

function discount() {
  (slider.oninput = () => {
    if (!toggleContainer.classList.contains("active")) {
      if (slider.value === "0") {
        pageViewCount.textContent = "10K PAGEVIEWS";
        amountEl.textContent = `$8.00
        `;
      } else if (slider.value === "25") {
        pageViewCount.textContent = "50K PAGEVIEWS";
        finalAmount = 12;
        amountEl.textContent = `$12.00
        `;
      } else if (slider.value === "50") {
        pageViewCount.textContent = "100K PAGEVIEWS";
        finalAmount = 16;
        amountEl.textContent = `$16.00
        `;
      } else if (slider.value === "75") {
        pageViewCount.textContent = "500K PAGEVIEWS";
        finalAmount = 24;
        amountEl.textContent = `$24.00
        `;
      } else {
        pageViewCount.textContent = "1M PAGEVIEWS";
        finalAmount = 36;
        amountEl.textContent = `$36.00
        `;
      }
    } else {
      if (slider.value === "0") {
        pageViewCount.textContent = "10K PAGEVIEWS";
        finalAmount = 6;
        amountEl.textContent = `$6.00
        `;
      } else if (slider.value === "25") {
        pageViewCount.textContent = "50K PAGEVIEWS";
        finalAmount = 9;
        amountEl.textContent = `$9.00
        `;
      } else if (slider.value === "50") {
        pageViewCount.textContent = "100K PAGEVIEWS";
        finalAmount = 12;
        amountEl.textContent = `$12.00
        `;
      } else if (slider.value === "75") {
        pageViewCount.textContent = "500K PAGEVIEWS";
        finalAmount = 18;
        amountEl.textContent = `$18.00
        `;
      } else {
        pageViewCount.textContent = "1M PAGEVIEWS";
        finalAmount = 27;
        amountEl.textContent = `$27.00
        `;
      }
    }
  })(); //IIFE (Immediately Invoked Function Expression)
}

discount();
