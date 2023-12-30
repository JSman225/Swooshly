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

    var follwerPosts = [{ "_id": "1", "name": "John Doe", "email": "johndoe@example.com", "password": "hashed_password_here", "username": "johndoe123", "profilePicture": "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "false" }, { "_id": "2", "name": "Ava Reynolds", "email": "avareynolds@example.com", "password": "hashed_password_here", "username": "avareynolds", "profilePicture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }, { "_id": "3", "name": "Alexa Jones", "email": "alexajones@example.com", "password": "hashed_password_here", "username": "alexajones", "profilePicture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }, { "_id": "4", "name": "Marvin Gaye", "email": "margingaye@example.com", "password": "hashed_password_here", "username": "somethingtotallydiffrent", "profilePicture": "https://www.songhall.org/images/uploads/exhibits/MarvinGaye_by_Jim_Britt.jpg", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }];
    var reccomendedUsers = [{ "_id": "1", "name": "John Doe", "email": "johndoe@example.com", "password": "hashed_password_here", "username": "johndoe123", "profilePicture": "https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "false" }, { "_id": "2", "name": "Ava Reynolds", "email": "avareynolds@example.com", "password": "hashed_password_here", "username": "avareynolds", "profilePicture": "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "followers": ["follower_id_1", "follower_id_2"], "following": ["following_id_1", "following_id_2"], "unreadNotifications": [{ "message": "New post by user X", "timestamp": "notification_timestamp_here" }, { "message": "Someone started following you", "timestamp": "notification_timestamp_here" }], "latestPost": "latest_post_id_here", "posts": ["post_id_1", "post_id_2"], "verified": "true" }];
    return (
        <div className="ml-4 my-5 flex gap-[10px] pr-[10px] overflow-x-scroll">
            {follwerPosts.map((item, key) => (
            <div key={key} className="flex justify-start flex-col items-center">
                <div className="w-[78px] h-[78px] border-2 flex items-center justify-center border-white/90 rounded-full">
                    <img
                        draggable="false"
                        className="w-[68px] h-[68px] rounded-full object-cover"
                        src={item.profilePicture} />
                </div>
                <div className="flex justify-center flex-col">
                    <p className="font-medium text-[13px] w-[66px] overflow-hidden text-center mt-1 whitespace-nowrap text-ellipsis text-white">{item.name}</p>
                    <p className="font-medium text-[11px] w-[66px] overflow-hidden text-center -mt-1 whitespace-nowrap text-ellipsis text-neutral-500">{item.username}</p>
                </div>
            </div>
            ))
            }
            {reccomendedUsers.map((item, key) => (
            <div key={key} className="flex justify-center flex-col items-center">
            
                <div className="w-[78px] h-[78px] border-2 flex items-center justify-center border-[#C71483] rounded-full">
                    <img
                        draggable="false"
                        className="w-[68px] h-[68px] rounded-full object-cover"
                        src={item.profilePicture} />
                </div>
                <div className="bg-[#C71483] w-12 rounded-full -mt-4 h-5 flex justify-center items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex justify-center flex-col">
                    <p className="font-medium text-[13px] w-[66px] overflow-hidden text-center mt-.5 whitespace-nowrap text-ellipsis text-white">{item.name}</p>
                    <p className="font-medium text-[11px] w-[66px] overflow-hidden text-center -mt-1 whitespace-nowrap text-ellipsis text-neutral-500">{item.username}</p>
                </div>
            </div>
            ))
            }
        </div>
    );
}
