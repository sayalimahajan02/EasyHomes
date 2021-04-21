import mongoose from 'mongoose';

//user schema
const UserAccountSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: "email id is a required property"
    },

    password: {
        type: String,
        required: "Password is a required property"
    },
    contact: {

        type: String
        
        }
},
    {
        // timestamps: true,
        versionKey: false
    }
);

//A virtual property named id will be copied and converted into hexa-decimal string
UserAccountSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
UserAccountSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('useraccount', UserAccountSchema);

export default model;