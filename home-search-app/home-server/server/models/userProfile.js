import mongoose from 'mongoose';
const UserProfileSchema = new mongoose.Schema({
     //user profile id
     userProfileId: {
        type: Number,
        required: "Id is a required property."
    },
    //user account email id 
    userAccountEmailId: {
        type: String,
        required: "Email Id is a required property."
    },
    //first name
    firstName: {
        type: String,
        required: "First Name is a required property."
    },
    //last name
    lastName: {
        type: String,
        required: "Last Name is a required property."
    },
    //address
    address: {
        type: String,
        required: "Address is a required property."
    },
    //contact no
    contactNo: {
        contactNo: String,
        required: "Contact No  is a required property."
    }
},
{
    // timestamps: true,
    versionKey: false
}
);

//A virtual property named id will be copied and converted into hexa-decimal string
UserProfileSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
UserProfileSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('userprofile', UserProfileSchema);

export default model;