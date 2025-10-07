// Refresh AOS on scroll
window.onscroll = () => {
    AOS.refresh();
}

// -------------------------------------------------------------------------------------------

// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const progressCircle = document.querySelector(".back-to-top circle.progress");
  const pathLength = 2 * Math.PI * 26; // circumference for r=26

  // set stroke length once
  progressCircle.style.strokeDasharray = pathLength;
  progressCircle.style.strokeDashoffset = pathLength;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / scrollHeight;

    // update stroke
    progressCircle.style.strokeDashoffset = pathLength - progress * pathLength;

    // show button after scrolling 500px
    if (scrollTop > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  // run on load
  updateProgress();

  // run on scroll
  window.addEventListener("scroll", updateProgress);

  // Scroll to top smoothly
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// -------------------------------------------------------------------------------------------

// Functionality For Get in Touch Buttons
document.addEventListener("DOMContentLoaded", () => {
  const footerForm = document.querySelector("footer .foot-form");

  // About Page "Get in Touch" button
  const getInTouchBtn = document.querySelector(".get-in-touch button");
  if (getInTouchBtn) {
    getInTouchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      footerForm.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Services Page "Get in Touch" buttons
  const getInTouchButtons = document.querySelectorAll(
    ".services-banner-cards .get-in-touch-btn"
  );
  getInTouchButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      footerForm.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// -------------------------------------------------------------------------------------------

