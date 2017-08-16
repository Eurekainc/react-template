export default {

  /**
   * Sets a key/value (string value only) pair in localStorage
   * @param {String} key - The key to use
   * @param {String} value - The value to use
   */
  set: (key, value) => {
    localStorage[key] = value
  },

  /**
   * Gets a string from localStorage using a given key
   * @param {String} key - The key to use
   * @returns {String} - The value from localStorage
   */
  get: (key) => {
    return localStorage[key]
  },

  /**
   * Sets a key/value (object value only) pair in localStorage
   * @param {String} key - The key to use
   * @param {Object} value - The value to use
   */
  setObject: (key, value) => {
    localStorage[key] = JSON.stringify(value)
  },

  /**
   * Gets an object from localStorage using a given key
   * @param {String} key - The key to use
   * @returns {Object} - The value from localStorage
   */
  getObject: (key) => {
    if (localStorage[key]) return JSON.parse(localStorage[key])
  },
}
