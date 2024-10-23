// src/utils/NewsFeedUtils.js

/**
 * Function to add a new news item.
 * @param {string} newStory - The content of the new story to be added.
 * @returns {Object} - The new news item object with an ID, text, and timestamp.
 */
export const addNewsItem = (newStory) => {
    // Create a new news item object
    const newItem = {
      id: Math.floor(Math.random() * 100000) + 1, // Generate a unique ID
      text: newStory,                             // The story text passed as a parameter
      timestamp: 'Just now'                       // Static timestamp for simplicity
    };
    return newItem;
  };
  
  