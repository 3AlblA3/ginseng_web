// animateOnScroll.js

let observer = null;

export const setupScrollAnimation = () => {
  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      } else {
        entry.target.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('section, .content__article__popup, .popup__dial' ).forEach(element => {
      observer.observe(element);
    });
  }, 100);
};

export const cleanupScrollAnimation = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
};