const { Schema, model } = require('mongoose');
const dateFormat = require('dateFormat');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,        
        required: true,
        minLength: [1, 'Please enter a comment'],
        maxLength: [280, 'Max length 280 characters']
      },
      username: {
          type: String,
          required: true
        },
      createdAt: {
        type: Date,
        default: true,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal, "dddd, mmmm dS, yyyy, h:MM")
      },      
      reactions: [{
          type: Schema.Types.ObjectId,
          ref: 'reactionSchema'
        }]
    }    
  );

  const Thoughts = model('Thoughts', thoughtSchema);

  module.exports = Thoughts;