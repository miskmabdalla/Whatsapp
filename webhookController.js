const handleIncomingMessage = require('./messageHandler');
const sendMessage = require('./sendMessage');


// Single Responsibility: Handle webhook POST requests
const webhookController = async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const incomingMessage = req.body.messages[0][0].text.body;
  const userId = req.body.messages[0][0].from;
  const responseMessage =  await handleIncomingMessage(userId, incomingMessage);
  await sendMessage('ejO4wSSx2ugfKGfOjRkgfg', responseMessage);
  console.log(responseMessage);  
};

module.exports = webhookController;
