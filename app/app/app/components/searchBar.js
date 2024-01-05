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

    var searchResults = [];
    var recentSearches = [{ "_id": "1", "name": "John Doe", "email": "johndoe@example.com", "password": "hashed_password_here", "username": "johndoe123", "profilePicture": "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "false" }, { "_id": "2", "name": "Ava Reynolds", "email": "avareynolds@example.com", "password": "hashed_password_here", "username": "avareynolds", "profilePicture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }, { "_id": "3", "name": "Alexa Jones", "email": "alexajones@example.com", "password": "hashed_password_here", "username": "alexajones", "profilePicture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }, { "_id": "4", "name": "Marvin Gaye", "email": "margingaye@example.com", "password": "hashed_password_here", "username": "somethingtotallydiffrent", "profilePicture": "https://www.songhall.org/images/uploads/exhibits/MarvinGaye_by_Jim_Britt.jpg", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }];
    return (
        <div className="relative">
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
                            className="outline-none px-4 py-2 text-sm bg-neutral-700 rounded-lg text-gray-100 w-full"
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
            <div className={open ? ("w-full max-w-md h-vh px-5 absolute bg-[#111111] z-10") : ("hidden")}>
                <div id="loading" className="w-full hidden">
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
                    {searchResults.map((item, key) => (
                        <div key={key} className="rounded-xl hover:bg-neutral-800 mb-2 w-full h-16 flex justify-between">
                        <div className="mb-2 w-full h-16 flex justify-left items-center">
                            <img className="object-cover rounded-xl h-[54px] w-[54px] ml-1.5" src={item.profilePicture} />
                            <div className="text-white font-light ml-3">
                                <p className="flex gap-1">
                                    {item.name}
                                    {item.verified === "true" &&
                                        <img width={20} height={20} src="blue_check.svg" alt="Verified Check" />
                                    }
                                </p>
                                <p className="text-xs opacity-75">{item.username}</p>
                            </div>
                        </div>
                        <svg className="w-6 h-16 mb-2 mr-8 text-white opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    ))
                    }
                </div>
                <div className="h-96">
                    <p className="text-lg text-white/90 font-sans font-semibold mb-4">Recent searches</p>
                    {recentSearches.map((item, key) => (
                        <div key={key} className="rounded-xl hover:bg-neutral-800 mb-2 w-full h-16 flex justify-between">
                            <div className="mb-2 w-full h-16 flex justify-left items-center">
                                <img className="object-cover rounded-xl h-[54px] w-[54px] ml-1.5" src={item.profilePicture} />
                                <div className="text-white font-light ml-3">
                                    <p className="flex gap-1">
                                        {item.name}
                                        {item.verified === "true" &&
                                            <img width={20} height={20} src="blue_check.svg" alt="Verified Check" />
                                        }
                                    </p>
                                    <p className="text-xs opacity-75">{item.username}</p>
                                </div>
                            </div>
                            <svg className="w-6 h-16 mb-2 mr-8 text-white/90 opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}
