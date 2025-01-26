window.addEventListener('load', function () {
    // Select the loading bar element
    const loadingBar = document.querySelector('.loading-bar');
    
    // Stop the animation by setting the animation property to none
    loadingBar.style.animation = 'none';
  
    // Optionally, you can hide the loading bar after a short delay to avoid visual glitches
    setTimeout(function () {
      loadingBar.style.display = 'none';
    }, 500);  // Delay of 500ms
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stat-number");
    const speed = 100; // Adjust the speed of counting

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText.replace(/[^\d]/g, ''); // Remove non-numeric characters
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment + "+";
                setTimeout(updateCount, 30); // Adjust delay between increments
            } else {
                counter.innerText = target + "+"; // Ensure final value matches target
            }
        };

        updateCount();
    });
});

