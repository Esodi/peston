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

document.addEventListener('DOMContentLoaded', () => {
    let counted = false;
    const statsSection = document.getElementById('statsSection');
    const statNumbers = document.querySelectorAll('.stat-number');
  
    function countUp() {
      statNumbers.forEach(num => {
        let start = 0;
        const end = parseInt(num.getAttribute('data-target'));
        const increment = end / 50;
  
        function update() {
          start += increment;
          if (start < end) {
            num.textContent = Math.floor(start);
            requestAnimationFrame(update);
          } else {
            num.textContent = end;
          }
        }
        update();
      });
    }
  
    window.addEventListener('scroll', () => {
      const sectionPos = statsSection.getBoundingClientRect().top + window.scrollY;
      if (!counted && window.scrollY + window.innerHeight >= sectionPos) {
        countUp();
        counted = true;
      }
    });
  });