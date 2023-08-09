window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
});


// Show/hide the offline message based on the connection status
function updateOfflineStatus() {
  const offlineMessage = document.getElementById('offline-message');
  if (navigator.onLine) {
    offlineMessage.style.display = 'none';
  } else {
    offlineMessage.style.display = 'block';
  }
}

// Call updateOfflineStatus initially and add event listeners for future updates
updateOfflineStatus();
window.addEventListener('online', updateOfflineStatus);
window.addEventListener('offline', updateOfflineStatus);

const appContainer = document.getElementById('app');

// Function to load a component into the app container
function loadComponent(componentName, showNavBar) {
  fetch(`components/${componentName}.html`)
    .then((response) => response.text())
    .then((html) => {
      appContainer.innerHTML = html;

      // Toggle navbar visibility based on the showNavBar parameter
      const navBar = document.getElementById('nav-bar');
      if (showNavBar) {
        navBar.style.display = 'flex';
      } else {
        navBar.style.display = 'none';
      }
      // Load the associated JavaScript for the component
      const scripts = appContainer.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        eval(scripts[i].innerHTML);
      }
      // You may also initialize any JavaScript functionality specific to the component here
    })
    .catch((error) => {
      console.error(`Error loading ${componentName} component:`, error);
    });
}

// Example: Load the login component with the navbar hidden
loadComponent('home', true);





const bottomSheet = document.querySelector('.bottom-sheet');
let startY = 0;
let isDragging = false;

function showBottomSheet() {
  bottomSheet.style.bottom = '0';
  disableScroll();
}

function hideBottomSheet() {
  bottomSheet.style.bottom = '-100%';
  enableScroll();
}

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
  isDragging = true;
}

function handleTouchMove(event) {
  if (!isDragging) return;

  const deltaY = event.touches[0].clientY - startY;
  if (deltaY > 0) {
    bottomSheet.style.bottom = `-${deltaY}px`;
  }
}

function handleTouchEnd(event) {
  if (!isDragging) return;

  isDragging = false;
  const deltaY = event.changedTouches[0].clientY - startY;
  if (deltaY > 100) {
    hideBottomSheet();
  } else {
    bottomSheet.style.bottom = '0';
  }
}

document.querySelector('.open-button').addEventListener('click', showBottomSheet);
bottomSheet.addEventListener('touchstart', handleTouchStart);
bottomSheet.addEventListener('touchmove', handleTouchMove);
bottomSheet.addEventListener('touchend', handleTouchEnd);

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
