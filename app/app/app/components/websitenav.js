'use client'
import { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation'
import { Lexend_Deca } from 'next/font/google'
const lexend_deca = Lexend_Deca({ subsets: ['latin'] });

export default function WebsiteNav() {
    const [open, setOpen] = useState(false);
    const currentPage = usePathname();
    const nav = useRef(null);

    useEffect(() => {
        // only add the event listener when the nav is opened
        if (!open) return;
        function handleClick(event) {
            if (nav.current && !nav.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("click", handleClick);
        // clean up
        return () => document.removeEventListener("click", handleClick);
    }, [open]);

    return (
        <div className={lexend_deca.className}>
            <div ref={currentPage === "/app/swoosh" ? nav : null} className={`bg-slate-900/20 transition-w ease-in-out duration-[2s] flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black h-[4.5rem] ring-2 ring-slate-100/30 ${open ? "w-[calc(100%-24px)]" : "w-12"} left-1/2 transform -translate-x-1/2 fixed bottom-6 z-50 rounded-full max-w-md`} id="nav-bar">

                {open ? (
                    <div className="flex w-[90%] wrapper transition-opacity easi-in-out duration-1000 delay-500 relative text-lg overflow-clip h-full justify-center items-center text-gray-200">
                        <h2 class="text-center relative">
                            Welcome to Swooshly!
                        </h2>
                    </div>
                ) : (
                    <button onClick={() => setOpen(true)} className="flex w-[90%] h-full justify-center items-center gap-9 text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>

                    </button>
                )

                }

            </div>
        </div>
    );
}
