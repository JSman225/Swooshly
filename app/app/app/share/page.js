'use client'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
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
      }
  }, []);

  return (
    <main>
      
    </main>



  )
}



