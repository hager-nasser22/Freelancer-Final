  const videoModal = document.getElementById('videoModal');
  const video = document.getElementById('popupVideo');

  if (videoModal && video) {
    videoModal.addEventListener('hidden.bs.modal', () => {
      video.pause();
      video.currentTime = 0;
    });
  }

  const videoModal2 = document.getElementById('videoModal2');
  const video2 = document.getElementById('popupVideo2');

  if (videoModal2 && video2) {
    videoModal2.addEventListener('hidden.bs.modal', () => {
      video2.pause();
      video2.currentTime = 0;
    });
  }
  const videoModal3 = document.getElementById('videoModal3');
  const video3 = document.getElementById('popupVideo3');

  if (videoModal3 && video3) {
    videoModal3.addEventListener('hidden.bs.modal', () => {
      video3.pause();
      video3.currentTime = 0;
    });
  }
// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Smooth scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

