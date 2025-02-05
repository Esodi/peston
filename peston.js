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

document.addEventListener('DOMContentLoaded', function() {
    // Handle nested dropdowns
    document.querySelectorAll('.dropdown-submenu > a').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close all other submenus
            document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(menu) {
                if (menu !== e.target.nextElementSibling) {
                    menu.style.display = 'none';
                }
            });
            
            // Toggle current submenu
            const submenu = e.target.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    // Close submenus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-submenu')) {
            document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});