/*
const navigator = window.navigator;
const errorMessage = "Your device doesn't support the Web Share API.";

if (!navigator.share || !navigator.canShare) return alert(errorMessage);

try {
  navigator.share({
    title: 'Share',
    text: 'Hey, check out this photo I just took!',
    url: window.location.href
  });
} catch (error) {
  alert(GENERIC_ERROR_RETRY);
}*/
'use client'
import { useRef, useState, useEffect } from "react";

export default function Camera() {
  const [mediaStream, setMediaStream] = useState();
  const videoRef = useRef(null);

  useEffect(() => {
    // Moved to inside of useEffect because this function is depended on `mediaStream`
    async function setupWebcamVideo() {
      if (!mediaStream) {
        await setupMediaStream();
      } else {
        const videoCurr = videoRef.current;
        if (!videoCurr) return;
        const video = videoCurr;
        if (!video.srcObject) {
          video.srcObject = mediaStream;
        }
      }
    }
    setupWebcamVideo();
  }, [mediaStream]);

  async function setupMediaStream() {
    try {
      const ms = await navigator.mediaDevices.getUserMedia({
        //video: { facingMode: "user" },
        video: false,
        audio: false
      });
      setMediaStream(ms);
    } catch (e) {
      alert("Camera is disabled");
      throw e;
    }
  }
  function handleCircleClick() {
    try {
      const canvas = document.createElement("canvas");
      const video = videoRef.current;

      // Ensure the video is loaded
      if (video.readyState !== 4) {
        alert("Video is not ready yet. Try again.");
        return;
      }

      // Set the canvas dimensions to fit the screen
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");

      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      // Capture a frame from the video
      context.drawImage(video, 0, 0, canvas.width, canvas.height);


      // Convert the frame to a data URL
      const imageDataURL = canvas.toDataURL();

      // Open a new window with the captured image
      const newTab = window.open();
      newTab.document.body.innerHTML = `<img src="${imageDataURL}" />`;
    } catch (error) {
      alert("Failed to capture the image. Please try again.");
    }
  }

  async function handleVideoDoubleTap() {
    try {
      const video = videoRef.current;
      if (!video) {
        alert("Video element not found.");
        return;
      }

      const facingMode = video.srcObject.getVideoTracks()[0].getSettings().facingMode;
      const newFacingMode = facingMode === "user" ? "environment" : "user";

      const updatedStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: newFacingMode },
        audio: false
      });

      video.srcObject = updatedStream;
    } catch (error) {
      alert("Failed to flip the camera. Please try again.");
    }
  }
  return (
    <main className="overflow-hidden rounded-top w-full h-full relative">
      <video className="flipped w-full mx-auto h-full object-cover rounded-top" ref={videoRef} autoPlay muted playsInline onDoubleClick={handleVideoDoubleTap} />

      <div className="absolute top-4 left-4 w-12 h-12 bg-neutral-900/20 rounded-full">

      </div>

      <svg className="absolute bottom-28 left-1/2 transform -translate-x-1/2" height="100" width="100">
        <circle onClick={handleCircleClick} cx="50" cy="50" r="34" stroke="white" strokeWidth="6" fillOpacity="0%" />
      </svg>
    </main>
  )
}






