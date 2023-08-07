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


function loadComponent(componentName, direction) {
  // Determine the animation classes and positioning based on the input parameter
  const slideClass = direction === 'left' ? 'slide-left' : 'slide-right';
  const exitClass = direction === 'left' ? 'exit-right' : 'exit-left';
  
  // Remove the previous animation classes from the app container
  appContainer.classList.remove(slideClass, exitClass);

  fetch(`components/${componentName}.html`)
    .then((response) => response.text())
    .then((html) => {
      // Create a new container element for the incoming component
      const newContainer = document.createElement('div');
      newContainer.innerHTML = html;
      newContainer.classList.add(slideClass);

      // Append the new container to the app container
      appContainer.appendChild(newContainer);

      // Slide out the existing content
      appContainer.classList.add(exitClass);

      // Remove the previous content after a delay to allow the sliding animation to be visible
      setTimeout(() => {
        appContainer.innerHTML = '';
        appContainer.appendChild(newContainer);
        appContainer.classList.remove(exitClass);
      }, 500); // Adjust the delay as needed
    })
    .catch((error) => {
      console.error(`Error loading ${componentName} component:`, error);
    });
}




  // Example: Load the login component when the app starts
 loadComponent('title');

  // Example: Add event listeners to handle navigation
  document.getElementById('get-started').addEventListener('click', () => {
    loadComponent('home');
  });

