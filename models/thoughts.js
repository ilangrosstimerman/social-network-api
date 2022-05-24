const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required:"required text",
        minlength: 1,
        maxlength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (date)=>{
            return new Date(date).toLocaleDateString()
        }
    },
    username: {
        type: String,
        required: "username required"
    },
    reactions:[require('./Reactions')]
},{
    toJSON:{
        virtuals: true,
        getters: true
    }
});
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

const Thoughts = model("thoughts", thoughtSchema);
module.exports = Thoughts;