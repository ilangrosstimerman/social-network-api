const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: "need username",
        trim: true
    },
    email: {
        type: String,
        required: "enter email",
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "enter valid email"]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "thoughts"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }]
}, {
    toJSON:{
        virtuals: true
    }
})
userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})

const Users = model('users', userSchema);

module.exports = Users;