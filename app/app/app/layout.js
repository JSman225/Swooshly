'use client'
import '../globals.css';
import Nav from './nav'
import BottomSheet from './bottomSheet';

export default function AppLayout({ children }) {
  return (      
      <section className="bg-[#111111] w-full h-screen max-w-md rounded-top">
        <div className="overflow-y-hidden rounded-top w-full h-full" id="app">
          {children}
        </div>

        <Nav />

        <BottomSheet />
        <div
          className="hidden fixed top-0 left-0 w-full h-screen z-50 backdrop-blur-lg bg-[#111111] bg-opacity-40 flex-col flex justify-center items-center">
          <div className="w-28 h-28">
            <img className="w-full h-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
          </div>
          <button className="text-white opacity-90 tracking-[1.1px] flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
            </svg>
            Recommend less
          </button>
          <button className="text-white opacity-90 tracking-[1.1px]">Close</button>
        </div>
      </section>
  )
}
