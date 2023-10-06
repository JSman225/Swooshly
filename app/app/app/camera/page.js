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

export default function Home() {
  return (
    <main className="overflow-hidden rounded-top w-full h-full">
      <img className="w-full h-[calc(100%-80px)] object-cover rounded-top" src="/profiles/0.jpg" />
      <div class="absolute top-4 left-4 w-12 h-12 bg-slate-100/70 rounded-full">

      </div>
    </main>
  )
}





