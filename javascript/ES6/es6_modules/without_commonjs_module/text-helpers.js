//Example export multiple JavaScript objects from a single module
export const print(message) => log(message, new Date()) 
export const log(message, timestamp) =>
console.log(`${timestamp.toString()}: ${message}`)