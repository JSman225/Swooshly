'use client'
import '../globals.css';
import Nav from './components/nav.js';
import BottomSheet from './components/bottomSheet.js';

export default function AppLayout({ children }) {
  return (
    <section className="bg-[#111111] w-full h-screen max-w-md rounded-top">
      <div className="rounded-top w-full h-full" id="app">
        {children}
      </div>

      <Nav />

      <BottomSheet />
    </section>
  )
}
