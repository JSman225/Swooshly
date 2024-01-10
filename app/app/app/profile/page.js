'use client'
import { Lexend_Deca, Mountains_of_Christmas } from 'next/font/google'
const lexend_deca = Lexend_Deca({ subsets: ['latin'] });

export default function Profile() {
  return (
    <main>
      <img className="w-full h-full fixed top-0 left-0 object-cover rounded-b-3xl" src="https://images.unsplash.com/photo-1704098712161-67949aaf0eee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={lexend_deca.className}>
        <div className="max-w-md w-full flex flex-col absolute bottom-28 items-center">
          <div className="bg-slate-900/20 flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black border-2 border-slate-100/30 w-[calc(100%-24px)] z-10 rounded-3xl">
            <div className="flex w-[90%] overflow-clip h-full justify-left flex-col items-top text-gray-200">
              <h1 className="text-white font-normal mt-6 text-4xl">Joe Man1</h1>
              <p className="text-white/80 font-normal mt-2 text-xl">@joeman</p>
              <div className="mb-6">
                <div className="text-white mt-6 text-opacity-75 text-md font-medium font-['Lexend Deca'] tracking-wide">BIO</div>
                <div className="text-white mt-2 text-opacity-75 text-sm font-normal font-['Lexend Deca'] tracking-wide">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/20 -mt-20 overflow-clip h-24 flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black border-2 border-slate-100/30 w-[calc(100%-48px)] z-[9] rounded-3xl">
            <div className="flex w-[90%] overflow-clip h-full justify-left flex-col items-top text-gray-200">
            <div className="text-white mt-2 text-opacity-75 text-sm font-normal font-['Lexend Deca'] tracking-wide">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</div>
            </div>
          </div>
          <div className="bg-slate-900/20 -mt-20 overflow-clip h-24 flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black border-2 border-slate-100/30 w-[calc(100%-72px)] z-[8] rounded-3xl">
            <div className="flex w-[90%] overflow-clip h-full justify-left flex-col items-top text-gray-200">
            <div className="text-white mt-2 text-opacity-75 text-sm font-normal font-['Lexend Deca'] tracking-wide">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</div>
            </div>
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



