'use client'
import { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const [open, setOpen] = useState(true);
    const currentPage = usePathname();
    const nav = useRef(null);

    const [navState, setNavState] = useState("normal"); // states: normal. minimized, stretch

    useEffect(() => {
        // only add the event listener when the nav is opened
        if (navState != "normal") return;
        function handleClick(event) {
            if (nav.current && !nav.current.contains(event.target)) {
                setNavState("minimized");
            }
        }
        document.addEventListener("click", handleClick);
        // clean up
        return () => document.removeEventListener("click", handleClick);
    }, [navState]);

    useEffect(() => {
        console.log(currentPage);
        switch (currentPage) {
            case "/app":
                setNavState("normal");
                break;
            case "/app/profile":
                setNavState("normal");
                break;
            case "/app/swoosh":
                setNavState("minimized");
                break;
            default:
                setNavState("normal");
        }
    }, [currentPage])

    let camera = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
    );

    let cameraFull = (
        <svg className="w-8 h-8" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.827 6.17499C6.64699 6.4599 6.40682 6.70197 6.12334 6.88423C5.83985 7.06648 5.51993 7.18449 5.186 7.22999C4.806 7.28399 4.429 7.34199 4.052 7.40499C2.999 7.57999 2.25 8.50699 2.25 9.57399V18C2.25 18.5967 2.48705 19.169 2.90901 19.591C3.33097 20.0129 3.90326 20.25 4.5 20.25H19.5C20.0967 20.25 20.669 20.0129 21.091 19.591C21.5129 19.169 21.75 18.5967 21.75 18V9.57399C21.75 8.50699 21 7.57999 19.948 7.40499C19.5707 7.34213 19.1927 7.28379 18.814 7.22999C18.4802 7.18435 18.1605 7.06627 17.8772 6.88403C17.5939 6.70178 17.3539 6.45978 17.174 6.17499L16.352 4.85899C16.1674 4.55909 15.9132 4.30809 15.611 4.12723C15.3089 3.94637 14.9675 3.84098 14.616 3.81999C12.8733 3.72638 11.1267 3.72638 9.384 3.81999C9.03245 3.84098 8.69114 3.94637 8.38896 4.12723C8.08678 4.30809 7.83262 4.55909 7.648 4.85899L6.827 6.17499Z" fill="#E5E7EB" stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 12.75C16.5 13.9435 16.0259 15.0881 15.182 15.932C14.3381 16.7759 13.1935 17.25 12 17.25C10.8065 17.25 9.66193 16.7759 8.81802 15.932C7.97411 15.0881 7.5 13.9435 7.5 12.75C7.5 11.5565 7.97411 10.4119 8.81802 9.56802C9.66193 8.72411 10.8065 8.25 12 8.25C13.1935 8.25 14.3381 8.72411 15.182 9.56802C16.0259 10.4119 16.5 11.5565 16.5 12.75ZM18.75 10.5H18.758V10.508H18.75V10.5Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    let app = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
            <path
                d="M2 4.5C2 3.672 2.49108 3 3.09615 3H8.94231C9.54738 3 10.0385 3.672 10.0385 4.5V9.5C10.0385 10.328 9.54738 11 8.94231 11H3.09615C2.80544 11 2.52662 10.842 2.32106 10.5607C2.11549 10.2794 2 9.89782 2 9.5V4.5ZM13.6923 6.5C13.6923 5.672 14.1834 5 14.7885 5H19.9038C20.5089 5 21 5.672 21 6.5V17.5C21 18.328 20.5089 19 19.9038 19H14.7885C14.4977 19 14.2189 18.842 14.0134 18.5607C13.8078 18.2794 13.6923 17.8978 13.6923 17.5V6.5ZM3.46154 16.5C3.46154 15.672 3.95262 15 4.55769 15H9.67308C10.2782 15 10.7692 15.672 10.7692 16.5V19.5C10.7692 20.328 10.2782 21 9.67308 21H4.55769C4.26697 21 3.98816 20.842 3.78259 20.5607C3.57703 20.2794 3.46154 19.8978 3.46154 19.5V16.5Z"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    let appFull = (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 4.5C2 3.672 2.49108 3 3.09615 3H8.94231C9.54738 3 10.0385 3.672 10.0385 4.5V9.5C10.0385 10.328 9.54738 11 8.94231 11H3.09615C2.80544 11 2.52662 10.842 2.32106 10.5607C2.11549 10.2794 2 9.89782 2 9.5V4.5ZM13.6923 6.5C13.6923 5.672 14.1834 5 14.7885 5H19.9038C20.5089 5 21 5.672 21 6.5V17.5C21 18.328 20.5089 19 19.9038 19H14.7885C14.4977 19 14.2189 18.842 14.0134 18.5607C13.8078 18.2794 13.6923 17.8978 13.6923 17.5V6.5ZM3.46154 16.5C3.46154 15.672 3.95262 15 4.55769 15H9.67308C10.2782 15 10.7692 15.672 10.7692 16.5V19.5C10.7692 20.328 10.2782 21 9.67308 21H4.55769C4.26697 21 3.98816 20.842 3.78259 20.5607C3.57703 20.2794 3.46154 19.8978 3.46154 19.5V16.5Z" fill="#E5E7EB" stroke="#E5E7EB" />
        </svg>

    );

    let swoosh = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    );

    let swooshFull = (
        <svg className="w-8 h-8" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z" fill="#FF00FF" stroke="#FF00FF" />
        </svg>
    );

    let notifications = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
    );

    let notificationsFull = (
        <svg className="w-8 h-8" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9.05V9C18 7.4087 17.3678 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88257 3.63214 7.75735 4.75736C6.63213 5.88258 5.99999 7.4087 5.99999 9V9.75C6.00301 11.9746 5.17898 14.121 3.68799 15.772C5.42099 16.412 7.24799 16.857 9.14299 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14299 17.082ZM14.857 17.082C15.0011 17.5319 15.0369 18.0094 14.9616 18.4757C14.8862 18.942 14.7018 19.384 14.4234 19.7656C14.1449 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85506 20.1472 9.57661 19.7656C9.29816 19.384 9.11375 18.942 9.0384 18.4757C8.96305 18.0094 8.99889 17.5319 9.14299 17.082" fill="#E5E7EB" />
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9.05V9C18 7.4087 17.3678 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88257 3.63214 7.75735 4.75736C6.63213 5.88258 5.99999 7.4087 5.99999 9V9.75C6.00301 11.9746 5.17898 14.121 3.68799 15.772C5.42099 16.412 7.24799 16.857 9.14299 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14299 17.082M14.857 17.082C15.0011 17.5319 15.0369 18.0094 14.9616 18.4757C14.8862 18.942 14.7018 19.384 14.4234 19.7656C14.1449 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85506 20.1472 9.57661 19.7656C9.29816 19.384 9.11375 18.942 9.0384 18.4757C8.96305 18.0094 8.99889 17.5319 9.14299 17.082" stroke="#E5E7EB" />
        </svg>
    );
    return (
        <div ref={currentPage === "/app/swoosh" ? nav : null}
            className={`bg-slate-900/20 flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black ring-2 ring-slate-100/30 fixed bottom-6 z-50 max-w-md 
                ${navState === "normal"
                    ? "h-[4.5rem] w-[calc(100%-24px)] left-1/2 transform rounded-full -translate-x-1/2"
                    : navState === "stretch" ?
                    "bg-slate-900/20 flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black border-2 ring-0 border-slate-100/30 w-[calc(100%-24px)] z-10 rounded-3xl left-1/2 transform -translate-x-1/2"
                    : "h-12 w-12 rounded-full right-3"
                }`}
        >
            <div className={`${navState === "normal" ? "flex" : "hidden"} w-[90%] overflow-clip h-full justify-center items-center gap-9 text-gray-200`}>
                <Link href="/app/notifications">
                    {currentPage === "/app/notifications" ? notificationsFull : notifications}
                </Link>
                <Link href="/app">
                    {currentPage === "/app" ? appFull : app}
                </Link>
                <Link onClick={() => setNavState("minimized")} href="/app/swoosh">
                    {currentPage === "/app/swoosh" ? swooshFull : swoosh}
                </Link>
                <Link href="/app/camera">
                    {currentPage === "/app/camera" ? cameraFull : camera}
                </Link>
                <Link href="/app/profile">
                    <div className="w-8 h-8  flex justify-center items-center">
                        <img className="rounded-full object-cover ring-2 ring-slate-100/30 w-full h-full" src="/profiles/0.jpg" />
                    </div>
                </Link>
            </div>
            <button onClick={async () => setNavState("normal")} className={`${navState !== "minimized" && "opacity-0 invisible"} absolute flex w-[90%] h-full justify-center items-center gap-9 text-gray-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    );
}
