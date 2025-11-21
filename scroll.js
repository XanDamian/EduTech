document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));
    let topOffset = target.offsetTop;
    let start = window.scrollY;
    let distance = topOffset - start;
    let duration = 900; // SPEED → Increase number for slower scroll (1000 = 1 second)
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;

      let timeElapsed = currentTime - startTime;
      let run = easeInOutQuad(timeElapsed, start, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});