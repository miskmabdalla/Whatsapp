const handleIncomingMessage = require('./messageHandler');

// Single Responsibility: Handle webhook POST requests
const webhookController = async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));

  const incomingMessage = req.body.messages[0][0].text.body;
  const responseMessage =  await handleIncomingMessage(incomingMessage);

  res.status(200).send(responseMessage);
  console.log(responseMessage);  
};

module.exports = webhookController;
