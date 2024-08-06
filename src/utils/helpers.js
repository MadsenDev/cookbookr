// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Function to format a date to 'MM/DD/YYYY' format
  export const formatDate = (date) => {
    const d = new Date(date);
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };
  
  // Function to validate an email address
  export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Function to convert an array of objects to a query string
  export const toQueryString = (params) => {
    return Object.keys(params)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
      .join('&');
  };
  
  // Function to generate a unique ID (simple implementation)
  export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  // Function to debounce another function
  export const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };
  
  // Function to throttle another function
  export const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };
  
  // Function to deep clone an object
  export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  export const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return "Now";
  };

/**
 * Function to get the appropriate profile picture URL
 * @param {string} profilePictureUrl - The user's profile picture URL
 * @param {string} gender - The user's gender
 * @returns {string} - The URL of the appropriate profile picture
 */
export const getProfilePictureUrl = (profilePictureUrl, gender) => {
  if (!profilePictureUrl) {
    switch (gender) {
      case 'Male':
        return require('../assets/images/user_no_picture_boy.png');
      case 'Female':
        return require('../assets/images/user_no_picture_girl.png');
      case 'Other':
      default:
        return require('../assets/images/user_no_picture.png');
    }
  }
  return profilePictureUrl;
};