// Sample user interactions data
// { date: getRandomDate(), action: getRandomAction() },
const users = [
    {
      userId: 1,
      profilePhoto: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80',
      posts: [
        {
          date: getRandomDate(),
          caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          photo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80'
        }
      ],
      interactions: [
        {
          profileId: 2,
          interactions: [],
        },
        {
          profileId: 3,
          interactions: [],
        },
        {
          profileId: 4,
          interactions: [],
        },
        {
          profileId: 5,
          interactions: [],
        },
        {
          profileId: 6,
          interactions: [],
        },
        {
          profileId: 7,
          interactions: [],
        },
        {
          profileId: 8,
          interactions: [],
        },
      ],
    },
    // Add more user interactions
    {
        userId: 2,
        profilePhoto: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1673483709643-9d7c6aff9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
    {
        userId: 3,
        profilePhoto: 'https://images.unsplash.com/photo-1528228377194-2faca82540e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1528228257617-cf313ddbed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
    {
        userId: 4,
        profilePhoto: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1584080995764-4fb1b81370bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
    {
        userId: 5,
        profilePhoto: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1504445868834-a29c97891b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
    {
        userId: 6,
        profilePhoto: 'https://images.unsplash.com/photo-1590101084993-edc848651c61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1582887783532-b1471887153e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
    {
        userId: 7,
        profilePhoto: 'https://images.unsplash.com/photo-1632852301600-05943e4bf450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1632852302054-bbed6280ff2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
    {
        userId: 8,
        profilePhoto: 'https://images.unsplash.com/photo-1632852301637-b872e319a71d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        posts: [
          {
            date: getRandomDate(),
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: 'https://images.unsplash.com/photo-1528228257617-cf313ddbed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ],
        interactions: []
    },
  ];
  
  function getRandomDate() {
    const startTimestamp = Date.parse("2022-01-01");
    const endTimestamp = Date.now();
    const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
    return new Date(randomTimestamp).toISOString().split("T")[0];
  }
  
  function getRandomAction() {
    const actions = ["like", "dislike"];
    const randomIndex = Math.floor(Math.random() * actions.length);
    return actions[randomIndex];
  }

  






  // Calculate personalized profile weights based on user interactions
  function calculatePersonalizedProfileWeights(users) {
    const userWeights = {};
  
    users.forEach((user) => {
      const { userId, interactions } = user;
  
      if (!userWeights[userId]) {
        userWeights[userId] = {};
      }
  
      const userWeight = userWeights[userId];
  
      interactions.forEach((interaction) => {
        const { profileId, interactions } = interaction;
  
        if (!userWeight[profileId]) {
          userWeight[profileId] = {
            id: profileId,
            totalWeight: 0,
            heartCount: 0,
            dislikeCount: 0,
          };
        }
        
        const profile = userWeight[profileId];

        interactions.forEach((interaction) => {
          const { date, action } = interaction;
          const weightMultiplier = calculateWeightMultiplier(date);
  
          if (action === "like") {
            profile.totalWeight += 1 * weightMultiplier;
            profile.heartCount += 1;
          } else if (action === "dislike") {
            profile.totalWeight -= 1 * weightMultiplier;
            profile.dislikeCount += 1;
          }
        });
        console.log(profile);
      });
    });
  
    return userWeights;
  }
  
  // Calculate weight multiplier based on the age of the interaction
  function calculateWeightMultiplier(date) {
    const interactionDate = new Date(date);
    const currentDate = new Date();
    const timeDiffInDays = Math.ceil(
      (currentDate - interactionDate) / (1000 * 60 * 60 * 24)
    );
    const weightMultiplier = 1 / Math.pow(timeDiffInDays, 0.3); // Adjust the decay rate as per your preference
  
    return weightMultiplier;
  }
  
// Calculate personalized profile scores based on user weights with randomness
function calculatePersonalizedProfileScores(userWeights, userId) {
  const profileScores = {};

  Object.entries(userWeights[userId]).forEach(([profileId, profileData]) => {
    const { totalWeight, heartCount, dislikeCount } = profileData;

    // Calculate the random weight as a percentage of the total weight
    const randomPercentage = Math.random() * 0.3 - 0.15; // Random value between -0.15 and 0.15 (adjust the range as needed)
    const randomWeight = totalWeight * randomPercentage;

    const score = totalWeight + heartCount - dislikeCount + randomWeight;

    console.log(`Profile ${profileId}: Score ${score.toFixed(2)} (Random Weight: ${randomWeight.toFixed(2)})`);

    profileScores[profileId] = score;
  });

  return profileScores;
}


  
  // Sort and filter profiles based on scores and limit
  function sortAndFilterProfiles(profileScores, limit) {
    const sortedProfiles = Object.keys(profileScores).sort(
      (a, b) => profileScores[b] - profileScores[a]
    );
  
    return sortedProfiles.slice(0, limit);
  }
  
  // Main function to run the personalized recommendation algorithm for a given user
  function runPersonalizedRecommendationAlgorithm(users, userId, limit) {
    const userWeights = calculatePersonalizedProfileWeights(users);
    const profileScores = calculatePersonalizedProfileScores(userWeights, userId);
    const sortedProfiles = sortAndFilterProfiles(profileScores, limit);
  
    return sortedProfiles;
  }
  


  function getProfilePhotoURLs(users, recommendationResults) {
    const profilePhotoURLs = recommendationResults.map((profileId) => {
      const userId = Number(profileId); // Convert the profileId to a number
      const user = users.find((user) => user.userId === userId);
      return user && user.profilePhoto ? user.profilePhoto : null;
    });
  
    return profilePhotoURLs.filter((url) => url !== null);
  }
  


  // Example usage
  const recommendationResults = runPersonalizedRecommendationAlgorithm(users, 1, 1);
  console.log(recommendationResults);


  
  function getMostRecentPost(userId) {
    // Find the user object with the given userId
    const user = users.find(user => user.userId === Number(userId));
  
    // If user is not found, return null
    if (!user) {
      return null;
    }
  
    // Get the posts array of the user
    const posts = user.posts;
  
    // If there are no posts, return null
    if (posts.length === 0) {
      return null;
    }
  
    // Sort the posts array by date in descending order
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // Return the most recent post
    return posts[0];
  }
  
  
  function createImageElements(users, recommendationResults) {
    const imageElements = [];
  
    recommendationResults.forEach((profileId) => {
      const user = users.find((user) => user.userId === Number(profileId));
  
      if (user && user.profilePhoto) {
        const img = document.createElement('img');
        img.src = user.profilePhoto;
        img.setAttribute('data-profile-id', profileId);
  
        img.addEventListener('click', function () {
          const profileId = this.getAttribute('data-profile-id');
          handleClick(profileId);
        });
  
        imageElements.push(img);
      }
    });
  
    return imageElements;
  }
  
  function handleClick(profileId) {
    console.log('Clicked profile ID:', profileId);
    console.log(getMostRecentPost(profileId));
    // Perform other actions based on the clicked profileId
  }
  
  function appendImages(users, recommendationResults) {
    const imageElements = createImageElements(users, recommendationResults);
  
    imageElements.forEach((img) => {
      document.body.appendChild(img);
    });
  }
  
  appendImages(users, recommendationResults);




  function like(userId, postId) {
    // Find the user object with the given userId
    const user = users.find(user => user.userId === userId);
  
    // If user is not found, return false
    if (!user) {
      return false;
    }
  
    // Find the post object with the given postId
    const post = user.posts.find(post => post.id === postId);
  
    // If post is not found, return false
    if (!post) {
      return false;
    }
  
    // Push the like to the post's interactions array
    post.interactions.push({ type: 'like' });
  
    // Return true to indicate successful like
    return true;
  }
  
  function dislike(userId, postId) {
    // Find the user object with the given userId
    const user = users.find(user => user.userId === userId);
  
    // If user is not found, return false
    if (!user) {
      return false;
    }
  
    // Find the post object with the given postId
    const post = user.posts.find(post => post.id === postId);
  
    // If post is not found, return false
    if (!post) {
      return false;
    }
  
    // Push the dislike to the post's interactions array
    post.interactions.push({ type: 'dislike' });
  
    // Return true to indicate successful dislike
    return true;
  }
  