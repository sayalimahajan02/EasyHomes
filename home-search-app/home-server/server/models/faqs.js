import mongoose from 'mongoose';
const FaqSchema = new mongoose.Schema({
    faqId:{
        type: Number, 
        required: "faq id is a required property"
    },
    emailId: { 
        type: String, 
        required: "question is a required property"
    },

    password: { 
        type: String, 
        required: "answer is a required property"
        }
},
{
    //timestamps: true,
    versionKey: false
}
);

//A virtual property named id will be copied and converted into hexa-decimal string
FaqSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
FaqSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('faqs', FaqSchema);

export default model;