const mongoose = require("mongoose");

const connect = () => {

    return mongoose.connect(
        "mongodb+srv://yadav9452:1234@cluster0.zup5e.mongodb.net/pagination?retryWrites=true&w=majority");
};

module.exports = connect;
