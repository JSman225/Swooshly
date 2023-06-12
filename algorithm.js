// Sample user interactions data
const users = [
    {
      userId: 1,
      profilePhoto: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80',
      interactions: [
        {
          profileId: 2,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
        {
          profileId: 3,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
        {
          profileId: 4,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
        {
          profileId: 5,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
        {
          profileId: 6,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
        {
          profileId: 7,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
        {
          profileId: 8,
          interactions: [
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
            { date: getRandomDate(), action: getRandomAction() },
          ],
        },
      ],
    },
    // Add more user interactions
    {
        userId: 2,
        profilePhoto: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        interactions: []
    },
    {
        userId: 3,
        profilePhoto: 'https://images.unsplash.com/photo-1528228377194-2faca82540e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        interactions: []
    },
    {
        userId: 4,
        profilePhoto: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        interactions: []
    },
    {
        userId: 5,
        profilePhoto: 'https://images.unsplash.com/photo-1660032109345-f513b154cc2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        interactions: []
    },
    {
        userId: 6,
        profilePhoto: 'https://images.unsplash.com/photo-1537065827051-e2a8ddd45fdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        interactions: []
    },
    {
        userId: 7,
        profilePhoto: 'https://images.unsplash.com/photo-1632852301600-05943e4bf450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        interactions: []
    },
    {
        userId: 8,
        profilePhoto: 'https://images.unsplash.com/photo-1632852301637-b872e319a71d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
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
  const recommendationResults = runPersonalizedRecommendationAlgorithm(users, 1, 6);
  console.log(recommendationResults);
  const profilePhotoURLs = getProfilePhotoURLs(users, recommendationResults);
  


  function replaceWithImages(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        document.getElementById(key).src=value;
    });
  }

  
replaceWithImages(profilePhotoURLs);