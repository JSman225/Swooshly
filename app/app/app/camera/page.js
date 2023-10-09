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
        video: { facingMode: "user" },
        audio: true
      });
      setMediaStream(ms);
    } catch (e) {
      alert("Camera is disabled");
      throw e;
    }
  }
  return (
    <main className="overflow-hidden rounded-top w-full h-full">
      <video className="flipped w-full mx-auto h-[calc(100%-80px)] object-cover rounded-top" ref={videoRef} autoPlay muted playsInline />
      <div className="relative bottom-20">
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" height="100" width="100">
          <circle cx="50" cy="50" r="34" stroke="white" strokeWidth="6" fillOpacity="0%" />
        </svg>
      </div>
      <div className="absolute top-4 left-4 w-12 h-12 bg-neutral-900/20 rounded-full">

      </div>
    </main>
  )
}





