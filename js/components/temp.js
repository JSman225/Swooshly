document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
});

const cameraContainer = document.getElementById('camera-container');
const cameraPreview = document.getElementById('camera-preview');
const captureButton = document.getElementById('capture-button');
const capturedPhotoCanvas = document.getElementById('captured-photo');
const capturedPhotoContext = capturedPhotoCanvas.getContext('2d');

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    cameraPreview.srcObject = stream;
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
}

function takePhoto() {
  capturedPhotoCanvas.width = cameraPreview.videoWidth;
  capturedPhotoCanvas.height = cameraPreview.videoHeight;
  capturedPhotoContext.drawImage(cameraPreview, 0, 0, capturedPhotoCanvas.width, capturedPhotoCanvas.height);

  // You can now use the data from capturedPhotoCanvas to do further processing or display the captured image
}

captureButton.addEventListener('click', takePhoto);


// Initialize camera when the page loads
window.addEventListener('DOMContentLoaded', startCamera);