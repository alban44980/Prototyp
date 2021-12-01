const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/prototyp',
  function () {
    console.log('😎😎 Database Connected 😎😎');
  },
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose;
