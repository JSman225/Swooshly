'use client'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="bg-[#000000] flex justify-center h-20 w-full fixed bottom-0 max-w-md z-50" id="nav-bar">
            <div className="flex w-[85%] h-14 justify-center items-center gap-10 text-white">
                <Link href="/app/share">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="w-10 h-10 open-button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></Link>
                <Link href="/app"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path
                        d="M2 4.5C2 3.672 2.49108 3 3.09615 3H8.94231C9.54738 3 10.0385 3.672 10.0385 4.5V9.5C10.0385 10.328 9.54738 11 8.94231 11H3.09615C2.80544 11 2.52662 10.842 2.32106 10.5607C2.11549 10.2794 2 9.89782 2 9.5V4.5ZM13.6923 6.5C13.6923 5.672 14.1834 5 14.7885 5H19.9038C20.5089 5 21 5.672 21 6.5V17.5C21 18.328 20.5089 19 19.9038 19H14.7885C14.4977 19 14.2189 18.842 14.0134 18.5607C13.8078 18.2794 13.6923 17.8978 13.6923 17.5V6.5ZM3.46154 16.5C3.46154 15.672 3.95262 15 4.55769 15H9.67308C10.2782 15 10.7692 15.672 10.7692 16.5V19.5C10.7692 20.328 10.2782 21 9.67308 21H4.55769C4.26697 21 3.98816 20.842 3.78259 20.5607C3.57703 20.2794 3.46154 19.8978 3.46154 19.5V16.5Z"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg></Link>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <Link href="/app/notifications"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg></Link>
                <div className="w-10 h-10 flex justify-center items-center">
                    <img className="rounded-full object-cover" width="40" height="40" src="https://i.ibb.co/Kb9btz0/image-2-5.png" />
                </div>
            </div>
        </div >
    );
}
