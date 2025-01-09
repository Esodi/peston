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
  