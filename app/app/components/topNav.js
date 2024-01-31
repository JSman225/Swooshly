'use client'
import { useState, useRef, useEffect } from 'react'

export default function TopNav() {
    const [open, setOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('');
    const [titleState, setTitleState] = useState('default');
    const titleBar = useRef(null);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchValue('');
    };

    useEffect(() => {
        function handleClick(event) {
            if (titleBar.current && !titleBar.current.contains(event.target)) {
                setOpen(false);
                setTitleState('default');
            }
        }
        document.addEventListener("click", handleClick);
        // clean up
        return () => document.removeEventListener("click", handleClick);
    }, [open]);

    return (
        <div className="z-[99] w-[calc(100%-24px)] gap-3 flex justify-between items-center -translate-x-1/2 left-1/2 transform fixed top-12">

            <div className={`${titleState == 'search' && ("disapear")} bg-slate-900/20 flex justify-center items-center text-gray-400 backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black ring-2 ring-slate-100/30 h-12 flex-shrink-0 w-12 rounded-full`}>
                <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </div>
            </div>

            <div ref={titleBar} className={`bg-slate-900/20 flex justify-center backdrop-blur-2xl shadow-[0_20px_45px_-5px_rgba(0,0,0,0.5)] shadow-black ring-2 ring-slate-100/30 max-w-md h-12 ${titleState == 'search' ? ("w-full") : ("w-[calc(100%-60px)]")}  right-0 rounded-full absolute`}>
                <div className={`flex w-[calc(100%-36px)] overflow-clip justify-center items-center ${titleState == 'search' ? ("text-gray-200") : ("text-gray-400")}`}>
                    <svg id="searchIcon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        onClick={() => { setOpen(true); setTitleState('search'); }}
                        value={searchValue}
                        onChange={handleSearchChange}
                        type="search"
                        className="outline-none px-4 bg-transparent rounded-full py-2 text-sm border-none text-gray-200 w-full"
                        placeholder="@alexajones..." />
                    <svg onClick={handleClearSearch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={open ? ("w-6 h-6") : ("hidden")}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
