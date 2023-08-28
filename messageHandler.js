const { use } = require("express/lib/application");

//use db in the future to handle user states
const userStates = {};

const handleIncomingMessage = async (userId, incomingMessage) => {
    // Initialize user state if not exists
    if (!userStates[userId]) {
        userStates[userId] = 'INIT';
    }

    let responseMessage;
    if (incomingMessage === 'back'){
        userStates[userId] = 'INIT';
    }
    switch (userStates[userId]) {
        case 'INIT':
            responseMessage = 'Hi, how can I assist you today? You can verify your product or check your points' ; //could also use "type 1 for service 1, type 2 for service 2, etc."
            userStates[userId] = 'ASKED_SERVICE';
            break;
        case 'ASKED_SERVICE':
            if (incomingMessage.contains('verify')) {
                responseMessage = 'You chose to verify your product, please enter your product ID';
                userStates[userId] = 'VERIFY_PRODUCT';
            }
            else if (incomingMessage.contains('points')) {
                responseMessage = 'You chose to check your points, please enter your ID'; //could also use their userID
                userStates[userId] = 'CHECK_POINTS';
            }
            else {
                responseMessage = 'I don\'t understand, type \'back\' to return to the start';
            }
            break;
        case 'VERIFY_PRODUCT':
            if (incomingMessage === 'valid_number') {
                responseMessage = 'Your product is valid';
            }
            else {
                responseMessage = 'Your product is not valid, you are returning to the start';
            }
            userStates[userId] = 'INIT';
            break;
        case 'CHECK_POINTS':
            if (incomingMessage === 'valid_id') {
                responseMessage = 'You have 100 points';
            }
            else {
                responseMessage = 'Invalid ID, you are returning to the start';
            }
            userStates[userId] = 'INIT';
            break;
        default:
            responseMessage = 'I don\'t understand';
      }




    // if (incomingMessage.toLowerCase() === 'hello') {
    //   responseMessage = 'Hi';
    // } else if (incomingMessage.toLowerCase() === 'goodbye') {
    //   responseMessage = 'Bye';
    // } else {
    //   responseMessage = 'I don\'t understand';
    // }
  
     return responseMessage;
  };

  module.exports = handleIncomingMessage;
  