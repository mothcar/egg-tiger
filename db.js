const mongoose = require('mongoose');


// const MONGO_URI = 'mongodb://localhost/your-database-name';
// const MONGO_URI = 'mongodb+srv://rojinmothcar:1748rojin@cluster0.3byf2fd.mongodb.net/monkey?retryWrites=true&w=majority&appName=Cluster0';
const MONGO_URI = 'mongodb+srv://dragonleeuman:1748asdf@cluster0.2iz7jx7.mongodb.net/s686?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Server is Running');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });