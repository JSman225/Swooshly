'use client'
import { Lexend_Deca } from 'next/font/google'
const lexend_deca = Lexend_Deca({ subsets: ['latin'] });

export default function Profile() {
  return (
    <main>
      <img className="w-full h-full fixed top-0 left-0 object-cover rounded-b-3xl" src="https://images.unsplash.com/photo-1704098712161-67949aaf0eee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      

      <div className="hidden">
        <button class="fixed top-12 left-3 w-12 text-white justify-center items-center flex backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black h-12 bg-slate-900/10 ring-2 ring-slate-100/30 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button class="fixed top-12 right-3 w-12 text-white justify-center items-center flex backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black h-12 bg-slate-900/10 ring-2 ring-slate-100/30 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </button>
      </div>
    </main>
  )
}



