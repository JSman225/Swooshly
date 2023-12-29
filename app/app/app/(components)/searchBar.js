'use client'
import { useState } from 'react'

export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    const handleClearSearch = () => {
      setSearchValue('');
    };
  
    var searchResultsContent = [];
    return (
        <div>
            <div id="searchBar" className="w-full mx-4 mt-2 flex justify-center">
                <div className="text-gray-100 flex mr-4 items-center w-full">
                    <div className={open ?
                        ("text-gray-100 focus-within:border-2 focus-within:border-white relative flex items-center w-9/12 border-none h-[42px] rounded-lg bg-neutral-700")
                        :
                        ("text-gray-100 focus-within:border-2 focus-within:border-white relative flex items-center mr-4 w-full border-none h-[42px] rounded-lg bg-neutral-700")}>
                        <svg id="searchIcon" className="w-6 h-6 ml-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input
                            onClick={() => { setOpen(true) }}
                            value={searchValue}
                            onChange={handleSearchChange}
                            type="search"
                            className="focus:outline-none px-4 py-2 text-sm bg-neutral-700 rounded-lg text-gray-100 w-full"
                            placeholder="Search" />
                        <svg onClick={handleClearSearch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={open ? ("w-6 h-6 mr-5") : ("hidden")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <p onClick={() => { setOpen(false) }} className={open ? ("ml-5 py-2 text-sm") : ("hidden")}>
                        Close
                    </p>

                </div>

            </div>
            <div id="resultsContainer" className="w-full h-full my-5 hidden">
                <div id="loading" className="w-full">
                    <svg className="mx-auto" width="75" height="75" version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
                        enableBackground="new 0 0 0 0" xmlSpace="preserve">
                        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                            <animateTransform attributeName="transform" dur="1s" type="translate"
                                values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
                        </circle>
                        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                            <animateTransform attributeName="transform" dur="1s" type="translate"
                                values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
                        </circle>
                        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5"
                                repeatCount="indefinite" begin="0.3" />
                        </circle>
                    </svg>
                    <p className="text-center w-16 text-white" id="holdOnMessage"></p>
                </div>
                <div id="userList" className="mt-5">
                    {searchResultsContent.map((item) => (
                        <div className="rounded-2xl w-full h-16 flex justify-start items-center">
                            <img className="object-cover rounded-full h-[54px] w-[54px] ml-1.5" src={item.profilePicture} />
                            <div className="text-white font-light ml-3">
                                <p className="flex gap-1">{item.name}</p>
                                {item.verified === "true" &&
                                    <img width={20} height={20} src="../assets/blue_check.svg" alt="Verified Check" />
                                }
                                <p className="text-xs opacity-75">{item.username}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div id="recentListContainer">
                    <p className="text-md opacity-75 text-white font-sans font-semibold">Recent searches</p>
                    <div className="mt-4" id="recentList">
                        <div className="rounded-2xl w-full h-16 flex justify-start items-center">
                            <img id="img" className="object-cover rounded-full h-[54px] w-[54px] ml-1.5"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />
                            <div className="text-white font-light ml-3">
                                <p id="name" className="flex gap-1">
                                    Hannah DeRios
                                    <img id="verrified" width="20" height="20" src="blue_check.svg" />
                                </p>
                                <p id="username" className="text-xs opacity-75">
                                    User Experience Designer
                                </p>
                            </div>
                            <svg className="w-6 h-6 text-white opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
