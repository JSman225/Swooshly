import { Suspense } from 'react'
import Masonry from "react-responsive-masonry";

const highlightedPosts = [
    { id: 1, userRef: 101 },
    { id: 2, userRef: 102 },
    { id: 3, userRef: 103 },
    { id: 4, userRef: 104 },
    { id: 5, userRef: 105 },
    { id: 6, userRef: 106 },
    { id: 7, userRef: 107 },
    { id: 8, userRef: 108 },
    { id: 9, userRef: 109 },
    { id: 10, userRef: 110 },
    { id: 11, userRef: 111 },
    { id: 12, userRef: 112 },
    { id: 13, userRef: 113 },
    { id: 14, userRef: 114 },
    { id: 15, userRef: 115 },
    { id: 16, userRef: 116 },
    { id: 17, userRef: 117 },
    { id: 18, userRef: 118 },
    { id: 19, userRef: 119 },
    { id: 20, userRef: 120 },
];

// Updated Array 2: User Objects
const users = [
    {
        id: 101,
        firstName: 'John',
        lastName: 'Doe',
        username: 'john_doe',
        profileImage: 'https://images.unsplash.com/photo-1540998493528-76819245d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDF9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 102,
        firstName: 'Alice',
        lastName: 'Smith',
        username: 'alice_smith',
        profileImage: 'https://images.unsplash.com/photo-1539800586303-1365b30f03e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDJ9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 103,
        firstName: 'Bob',
        lastName: 'Johnson',
        username: 'bob_johnson',
        profileImage: 'https://images.unsplash.com/photo-1676881201970-5063aabcc377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDN9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 104,
        firstName: 'Eva',
        lastName: 'Williams',
        username: 'eva_williams',
        profileImage: 'https://images.unsplash.com/photo-1550386683-ed8983eb962e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDR9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 105,
        firstName: 'Charlie',
        lastName: 'Brown',
        username: 'charlie_brown',
        profileImage: 'https://images.unsplash.com/photo-1558505409-59e5f346ede7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDV9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 106,
        firstName: 'Grace',
        lastName: 'Miller',
        username: 'grace_miller',
        profileImage: 'https://images.unsplash.com/photo-1537563024958-01df380af3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDZ9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 107,
        firstName: 'Daniel',
        lastName: 'Clark',
        username: 'daniel_clark',
        profileImage: 'https://images.unsplash.com/photo-1563803531067-741dd163c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDd9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 108,
        firstName: 'Olivia',
        lastName: 'Jones',
        username: 'olivia_jones',
        profileImage: 'https://images.unsplash.com/photo-1662442425207-faedd5bb0b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDh9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 109,
        firstName: 'Sam',
        lastName: 'Taylor',
        username: 'sam_taylor',
        profileImage: 'https://images.unsplash.com/photo-1589781855024-c550473d06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMDl9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 110,
        firstName: 'Mia',
        lastName: 'Brown',
        username: 'mia_brown',
        profileImage: 'https://images.unsplash.com/photo-1566063402088-e3973962fa8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTB9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 111,
        firstName: 'Max',
        lastName: 'White',
        username: 'max_white',
        profileImage: 'https://images.unsplash.com/photo-1564201192-e9c3fded2131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTF9fHx8fHx8MTcwNjQwMDIwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 112,
        firstName: 'Emma',
        lastName: 'Johnson',
        username: 'emma_johnson',
        profileImage: 'https://images.unsplash.com/photo-1509342970501-0e827184957b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTJ9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 113,
        firstName: 'David',
        lastName: 'Hall',
        username: 'david_hall',
        profileImage: 'https://images.unsplash.com/photo-1566331604673-a787a68cc9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTN9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 114,
        firstName: 'Sophia',
        lastName: 'Lee',
        username: 'sophia_lee',
        profileImage: 'https://images.unsplash.com/photo-1552686977-5a80212280fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTR9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 115,
        firstName: 'Leo',
        lastName: 'Davis',
        username: 'leo_davis',
        profileImage: 'https://images.unsplash.com/photo-1667401762863-ee696b04097d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTV9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 116,
        firstName: 'Zoe',
        lastName: 'Anderson',
        username: 'zoe_anderson',
        profileImage: 'https://images.unsplash.com/photo-1545316900-d8666b18b303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTZ9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 117,
        firstName: 'Liam',
        lastName: 'Brown',
        username: 'liam_brown',
        profileImage: 'https://images.unsplash.com/photo-1628066961967-de52104e87a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTd9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 118,
        firstName: 'Ava',
        lastName: 'Harris',
        username: 'ava_harris',
        profileImage: 'https://images.unsplash.com/photo-1655307567580-e2d83cade59e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTh9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 119,
        firstName: 'Ethan',
        lastName: 'Miller',
        username: 'ethan_miller',
        profileImage: 'https://images.unsplash.com/photo-1586944170561-bbeeffa4a8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMTl9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    },
    {
        id: 120,
        firstName: 'Nora',
        lastName: 'Smith',
        username: 'nora_smith',
        profileImage: 'https://images.unsplash.com/photo-1554343440-ea0d482778b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMjB9fHx8fHx8MTcwNjQwMDE5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    }
];

// Updated Array 3: Posts
const posts = [
    {
        "id": 1,
        "timeSignature": "2 hours ago",
        "postContent": {
            "title": "Amazing Post",
            "description": "This is an amazing post with great content!",
            "tags": [
                "#awesome",
                "#inspiration",
                "#content"
            ]
        },
        "comments": [
            {
                "content": "Great stuff!",
                "timeStamp": "1 hour ago",
                "userRef": 102
            },
            {
                "content": "Awesome!",
                "timeStamp": "30 minutes ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1561061819-bf94a93b7d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxfXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 101
    },
    {
        "id": 2,
        "timeSignature": "1 day ago",
        "postContent": {
            "title": "Cool Image",
            "description": "Check out this cool image!",
            "tags": [
                "#cool",
                "#image",
                "#awesome"
            ]
        },
        "comments": [
            {
                "content": "Nice one!",
                "timeStamp": "1 hour ago",
                "userRef": 101
            },
            {
                "content": "Love it!",
                "timeStamp": "45 minutes ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1554670060-0ef860f911f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsyfXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 102
    },
    {
        "id": 3,
        "timeSignature": "3 days ago",
        "postContent": {
            "title": "Random Post",
            "description": "Just a random post for fun!",
            "tags": [
                "#random",
                "#fun",
                "#post"
            ]
        },
        "comments": [
            {
                "content": "Interesting!",
                "timeStamp": "2 days ago",
                "userRef": 101
            },
            {
                "content": "What's happening here?",
                "timeStamp": "1 day ago",
                "userRef": 102
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1590369863379-fee7ba3a786a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHszfXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 103
    },
    {
        "id": 4,
        "timeSignature": "4 hours ago",
        "postContent": {
            "title": "Another Awesome Post",
            "description": "This post is absolutely awesome!",
            "tags": [
                "#awesome",
                "#post",
                "#amazing"
            ]
        },
        "comments": [
            {
                "content": "Love it!",
                "timeStamp": "3 hours ago",
                "userRef": 102
            },
            {
                "content": "Great stuff!",
                "timeStamp": "2 hours ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1563573493983-16e6250ef0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHs0fXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 104
    },
    {
        "id": 5,
        "timeSignature": "2 days ago",
        "postContent": {
            "title": "Exploration Journey",
            "description": "Embarking on a journey of exploration!",
            "tags": [
                "#exploration",
                "#journey",
                "#adventure"
            ]
        },
        "comments": [
            {
                "content": "Interesting!",
                "timeStamp": "1 day ago",
                "userRef": 101
            },
            {
                "content": "Cool!",
                "timeStamp": "23 hours ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1566644426715-b16a14be56d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHs1fXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 105
    },
    {
        "id": 6,
        "timeSignature": "5 days ago",
        "postContent": {
            "title": "Tech Wonders",
            "description": "Exploring the wonders of technology!",
            "tags": [
                "#tech",
                "#wonders",
                "#innovation"
            ]
        },
        "comments": [
            {
                "content": "Incredible!",
                "timeStamp": "4 days ago",
                "userRef": 102
            },
            {
                "content": "Mind-blowing!",
                "timeStamp": "3 days ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1593354902760-619ac1323a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHs2fXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 106
    },
    {
        "id": 7,
        "timeSignature": "6 hours ago",
        "postContent": {
            "title": "Artistic Creations",
            "description": "Sharing some artistic creations!",
            "tags": [
                "#art",
                "#creations",
                "#inspiration"
            ]
        },
        "comments": [
            {
                "content": "Beautiful!",
                "timeStamp": "5 hours ago",
                "userRef": 101
            },
            {
                "content": "Love the creativity!",
                "timeStamp": "4 hours ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1580047026411-7646993b6077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHs3fXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 107
    },
    {
        "id": 8,
        "timeSignature": "1 week ago",
        "postContent": {
            "title": "Epic Adventures",
            "description": "Recapping some epic adventures!",
            "tags": [
                "#adventures",
                "#memories",
                "#journey"
            ]
        },
        "comments": [
            {
                "content": "Wow, amazing memories!",
                "timeStamp": "6 days ago",
                "userRef": 101
            },
            {
                "content": "I want to go on an adventure too!",
                "timeStamp": "5 days ago",
                "userRef": 102
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1529824173622-ea7ce7660826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHs4fXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 108
    },
    {
        "id": 9,
        "timeSignature": "3 weeks ago",
        "postContent": {
            "title": "Coding Chronicles",
            "description": "Diving into coding adventures!",
            "tags": [
                "#coding",
                "#programming",
                "#tech"
            ]
        },
        "comments": [
            {
                "content": "Coding rocks!",
                "timeStamp": "2 weeks ago",
                "userRef": 102
            },
            {
                "content": "Geek mode activated!",
                "timeStamp": "1 week ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1598642965554-eaa5f0362997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHs5fXx8fHx8fDE3MDY0MDA0OTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 109
    },
    {
        "id": 10,
        "timeSignature": "2 days ago",
        "postContent": {
            "title": "Musical Moments",
            "description": "Sharing some magical musical moments!",
            "tags": [
                "#music",
                "#piano",
                "#inspiration"
            ]
        },
        "comments": [
            {
                "content": "Music to my ears!",
                "timeStamp": "1 day ago",
                "userRef": 101
            },
            {
                "content": "Piano mastery!",
                "timeStamp": "23 hours ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1522426197515-ad17e39de88d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMH18fHx8fHwxNzA2NDAwNDkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 110
    },
    {
        "id": 11,
        "timeSignature": "4 days ago",
        "postContent": {
            "title": "Space Exploration",
            "description": "Discovering the mysteries of the cosmos!",
            "tags": [
                "#space",
                "#exploration",
                "#universe"
            ]
        },
        "comments": [
            {
                "content": "Out of this world!",
                "timeStamp": "3 days ago",
                "userRef": 102
            },
            {
                "content": "Space geek here!",
                "timeStamp": "2 days ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1588815375466-e7d21013ddd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMX18fHx8fHwxNzA2NDAwNDkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 111
    },
    {
        "id": 12,
        "timeSignature": "1 day ago",
        "postContent": {
            "title": "Healthy Habits",
            "description": "Sharing tips for a healthy lifestyle!",
            "tags": [
                "#health",
                "#wellness",
                "#lifestyle"
            ]
        },
        "comments": [
            {
                "content": "Great advice!",
                "timeStamp": "23 hours ago",
                "userRef": 101
            },
            {
                "content": "Taking notes for a healthier life!",
                "timeStamp": "22 hours ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1666624833584-2bbb1853dbd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxMn18fHx8fHwxNzA2NDAwNDkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 112
    },
    {
        "id": 13,
        "timeSignature": "2 weeks ago",
        "postContent": {
            "title": "Bookworm's Corner",
            "description": "Diving into fascinating books!",
            "tags": [
                "#books",
                "#reading",
                "#literature"
            ]
        },
        "comments": [
            {
                "content": "Love a good book!",
                "timeStamp": "1 week ago",
                "userRef": 101
            },
            {
                "content": "Any book recommendations?",
                "timeStamp": "6 days ago",
                "userRef": 102
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1605486066401-45a81dcd6919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxM318fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 113
    },
    {
        "id": 14,
        "timeSignature": "5 hours ago",
        "postContent": {
            "title": "Gourmet Delights",
            "description": "Exploring the world of delicious cuisine!",
            "tags": [
                "#foodie",
                "#culinary",
                "#delicious"
            ]
        },
        "comments": [
            {
                "content": "Making me hungry!",
                "timeStamp": "4 hours ago",
                "userRef": 101
            },
            {
                "content": "Food goals!",
                "timeStamp": "3 hours ago",
                "userRef": 102
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1544416924-62c2d871b086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxNH18fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 114
    },
    {
        "id": 15,
        "timeSignature": "3 days ago",
        "postContent": {
            "title": "Fitness Freakout",
            "description": "Crushing fitness goals one day at a time!",
            "tags": [
                "#fitness",
                "#exercise",
                "#goals"
            ]
        },
        "comments": [
            {
                "content": "Keep it up!",
                "timeStamp": "2 days ago",
                "userRef": 103
            },
            {
                "content": "Inspiring fitness journey!",
                "timeStamp": "1 day ago",
                "userRef": 101
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1678698399307-119f0777f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxNX18fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 115
    },
    {
        "id": 16,
        "timeSignature": "6 days ago",
        "postContent": {
            "title": "DIY Adventures",
            "description": "Embarking on exciting do-it-yourself projects!",
            "tags": [
                "#diy",
                "#crafting",
                "#creativity"
            ]
        },
        "comments": [
            {
                "content": "Creative genius at work!",
                "timeStamp": "5 days ago",
                "userRef": 102
            },
            {
                "content": "DIY inspiration!",
                "timeStamp": "4 days ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1551900289-598cef286388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxNn18fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 116
    },
    {
        "id": 17,
        "timeSignature": "2 hours ago",
        "postContent": {
            "title": "Sunny Escapes",
            "description": "Chasing the sun in beautiful destinations!",
            "tags": [
                "#travel",
                "#sunshine",
                "#wanderlust"
            ]
        },
        "comments": [
            {
                "content": "Wish I was there!",
                "timeStamp": "1 hour ago",
                "userRef": 101
            },
            {
                "content": "Travel goals!",
                "timeStamp": "30 minutes ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1533129538699-697a5f3dc49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxN318fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 117
    },
    {
        "id": 18,
        "timeSignature": "4 weeks ago",
        "postContent": {
            "title": "Mind-bending Puzzles",
            "description": "Solving puzzles and challenging the mind!",
            "tags": [
                "#puzzles",
                "#brainteasers",
                "#challenge"
            ]
        },
        "comments": [
            {
                "content": "Puzzle master!",
                "timeStamp": "3 weeks ago",
                "userRef": 101
            },
            {
                "content": "Can't stop puzzling!",
                "timeStamp": "2 weeks ago",
                "userRef": 102
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1528121800911-fe6c89e544fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxOH18fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 118
    },
    {
        "id": 19,
        "timeSignature": "5 days ago",
        "postContent": {
            "title": "Nature Retreat",
            "description": "Finding serenity in the midst of nature!",
            "tags": [
                "#nature",
                "#retreat",
                "#peaceful"
            ]
        },
        "comments": [
            {
                "content": "Nature's therapy!",
                "timeStamp": "4 days ago",
                "userRef": 103
            },
            {
                "content": "Absolutely breathtaking!",
                "timeStamp": "3 days ago",
                "userRef": 101
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1696013172857-67a252e99eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsxOX18fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 119
    },
    {
        "id": 20,
        "timeSignature": "1 day ago",
        "postContent": {
            "title": "Gaming Galore",
            "description": "Immersing into the world of gaming adventures!",
            "tags": [
                "#gaming",
                "#adventure",
                "#virtualworld"
            ]
        },
        "comments": [
            {
                "content": "Gamer life!",
                "timeStamp": "23 hours ago",
                "userRef": 102
            },
            {
                "content": "Leveling up in style!",
                "timeStamp": "22 hours ago",
                "userRef": 103
            }
        ],
        "imageContent": "https://images.unsplash.com/photo-1696329706614-2ac0f0076986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8JHsyMH18fHx8fHwxNzA2NDAwNDk0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "authorRef": 120
    }
];

export default function StoriesGrid() {
    return (
        <div className="w-[calc(100%-24px)] mx-auto">
            <Masonry columnsCount={2} gutter="12px">
                {highlightedPosts.map((item, index) => {
                    const user = users.find(user => user.id === item.userRef);
                    const post = posts.find(post => post.id === item.id);

                    return (
                        <a key={index} href='/app/profile' className="relative rounded-2xl overflow-clip">
                            <Suspense fallback={<div>Loading...</div>}>
                                <img className="rounded-2xl" src={post.imageContent} alt={post.title} />
                            </Suspense>
                            <div className="absolute bottom-[12px] left-[12px] h-[46px]">
                                <div className="flex justify-start items-center">
                                    <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src={user.profileImage} alt={user.username} />
                                    <span className="ml-[6px] text-xs text-white">{user.firstName} {user.lastName}</span>
                                </div>
                                <p className="text-[10px] opacity-75 text-white">@{user.username} • {post.timeSignature}</p>
                            </div>
                        </a>

                    );
                })}
            </Masonry>
        </div>
    );
}
