'use client'
import { Lexend_Deca } from 'next/font/google'
const lexend_deca = Lexend_Deca({ subsets: ['latin'] });

export default function Profile() {
  return (
    <main className="overflow-hidden w-full h-full">
      <img className="w-full h-[60vh] object-cover rounded-b-3xl shadow-[0_25px_45px_-5px_rgba(0,0,0,0.6)] shadow-black" src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={lexend_deca.className}>
        <div className="px-8">
          <h1 className="text-white font-normal mt-6 text-4xl">Ava Reynolds</h1>
          <p className="text-white/80 font-normal mt-2 text-xl">@avareynolds</p>
          <div>
            <div className="text-white mt-6 text-opacity-75 text-md font-medium font-['Lexend Deca'] tracking-wide">BIO</div>
            <div className="text-white mt-2 text-opacity-75 text-sm font-normal font-['Lexend Deca'] tracking-wide">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</div>
          </div>
        </div>
      </div>

      <div>
        <button class="fixed top-12 left-3 w-12 text-white justify-center items-center flex backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black h-12 bg-slate-900/10 ring-2 ring-slate-100/30 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
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



