'use client'
import dynamic from "next/dynamic";
import { useEffect } from 'react';
import WebsiteNav from './app/components/websitenav';
const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt'), { ssr: false, });

export default function Home() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js').then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                }).catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
            });
        }
    }, []);
    return (
        <>
            <PWAPrompt
                permanentlyHideOnDismiss={false}
                copyTitle="Install Swooshly"
                copyBody="Install our app to your homescreen to start Swooshing!"
                copyClosePrompt="Not right now..."
            />

            <main className="bg-[#111111]">
                <header className="relative z-50">

                    <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                        <div className="flex">
                            <a href="/" className="p-1.5">
                                <span className="sr-only">Swooshly</span>
                                <img className="h-10 w-auto" src="https://i.ibb.co/gVGTBW5/Svgjs-G5908.png" alt="" />
                            </a>
                        </div>
                    </nav>
                </header>






                <div className="flex flex-wrap justify-center lg:mt-0 mt-24">

                    <div className="relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center">
                        <div className="mx-auto max-w-xl py-8 sm:py-8 lg:py-8 -mt-36">
                            <div className="text-center">
                                <h1 className="text-4xl font-semibold tracking-tight text-[#FFF4E1] sm:text-5xl">Ignite your confidence, attract
                                    admirers</h1>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <img className="rounded-lg w-60" src="https://i.ibb.co/5BMqwC7/Group-56.png" />
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className="max-w-5xl px-12 lg:px-8 pt-24 flex justify-center">
                        <div className="">
                            <img className="w-full max-w-none rounded-md h-[650px]" src="https://i.ibb.co/wSB2vmK/Swooshly-App.png"
                                alt="App screenshot" width="1824" height="1080" />
                        </div>

                    </div>

                </div>

                <footer className="m-4 mt-20">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <a href="#" className="flex items-center">
                                <img src="https://i.ibb.co/fdYWd0T/Group-55.png" className="w-50" alt="Swooshly Logo" />
                            </a>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#"
                            className="hover:underline">Swooshly™</a>. All Rights Reserved.</span>
                    </div>
                </footer>
            </main>
            <WebsiteNav />
        </>
    )
}
