// Utility functions for localStorage management

export const clearCorruptedStorage = () => {
  try {
    const keys = ['token', 'user'];
    keys.forEach(key => {
      const value = localStorage.getItem(key);
      if (value === 'undefined' || value === 'null') {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error clearing corrupted storage:', error);
    localStorage.clear();
  }
};

export const safeParseJSON = (jsonString, fallback = null) => {
  try {
    if (!jsonString || jsonString === 'undefined' || jsonString === 'null') {
      return fallback;
    }
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return fallback;
  }
};

export const safeStorageSet = (key, value) => {
  try {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  } catch (error) {
    console.error('Error setting localStorage:', error);
  }
};

export const safeStorageGet = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key);
    return value && value !== 'undefined' && value !== 'null' ? value : fallback;
  } catch (error) {
    console.error('Error getting localStorage:', error);
    return fallback;
  }
};