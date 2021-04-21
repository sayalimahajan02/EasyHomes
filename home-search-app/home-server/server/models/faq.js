import mongoose from 'mongoose';
//faq schema
const FaqSchema = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
},
    {
        // timestamps: true,
        versionKey: false
    }
);

//A virtual property named id will be copied and converted into hexa-decimal string
FaqSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
FaqSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('faq', FaqSchema);

export default model;