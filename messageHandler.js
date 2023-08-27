// Single Responsibility: Handle different types of messages
function handleIncomingMessage(req, res){
    let responseMessage;
  
    if (incomingMessage.toLowerCase() === 'hello') {
      responseMessage = 'Hi';
    } else if (incomingMessage.toLowerCase() === 'goodbye') {
      responseMessage = 'Bye';
    } else {
      responseMessage = 'I don\'t understand';
    }
  
     return responseMessage;
  };

  module.exports = {
    handleIncomingMessage
  }