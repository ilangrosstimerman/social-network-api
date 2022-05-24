const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/SN_API', {
    useUnifiedTopology: true,
});
module.exports = mongoose.connection;