// animateOnScroll.js

let observer = null;

export const setupScrollAnimation = () => {
  // If an observer already exists, disconnect it
  if (observer) {
    observer.disconnect();
  }

  // Create a new observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      } else {
        // Optional: remove the class when the section is out of view
        // This will reset the animation when scrolling back up
        entry.target.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.1 });

  // Slight delay to ensure DOM is ready
  setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }, 100);
};

// Function to clean up the observer
export const cleanupScrollAnimation = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
};