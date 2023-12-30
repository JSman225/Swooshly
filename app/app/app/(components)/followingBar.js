'use client'
import { useState } from 'react'
import Link from 'next/link';
export default function FollowingBar() {
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
        <div className="ml-4 my-5 flex gap-3 overflow-x-scroll">
            <div className="flex justify-center flex-col items-center">
                <div className="w-[76px] h-[76px] border-2 flex items-center justify-center border-white/90 rounded-full">
                    <img
                        draggable="false"
                        className="w-[66px] h-[66px] rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className="flex justify-center">
                    <p className="font-medium text-xs w-[66px] overflow-hidden text-center mt-1 whitespace-nowrap text-ellipsis text-white">Ava Reynolds</p>
                </div>
            </div>
            <div className="w-[76px] h-[76px] border-2 flex items-center justify-center border-[#C71483] rounded-full">
                <img
                    draggable="false"
                    className="w-[66px] h-[66px] rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    );
}
