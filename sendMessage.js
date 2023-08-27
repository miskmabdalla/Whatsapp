const axios = require('axios');

const sendMessage = async (recipient, message) => {
  const url = 'https://wbapi.autochat.io/40dea042-d034-40ae-9794-b1c87d546d12/v1/messages';
  const headers = {
    'Authorization': 'HFu3q2NLIF-4wBHhXDvEGw',
    'Content-Type': 'application/json'
  };
  const data = {
    "recipient_type": "individual",
    "to": recipient,
    "text": {
      "body": message
    }
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

module.exports = sendMessage;
