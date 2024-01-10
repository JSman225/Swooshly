'use client'
import '../globals.css';
import Nav from './components/nav';
import BottomSheet from './components/bottomSheet';

export default function AppLayout({ children }) {
  return (
    <section className="bg-[#111111] w-full h-screen max-w-md rounded-top overflow-x-hidden">

      <div className="rounded-top w-full h-full" id="app">
        {children}
      </div>

      <Nav />

      <BottomSheet />
    </section>
  )
}
