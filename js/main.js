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

      // You may also initialize any JavaScript functionality specific to the component here
    })
    .catch((error) => {
      console.error(`Error loading ${componentName} component:`, error);
    });
}

// Example: Load the login component with the navbar hidden
loadComponent('home', true);