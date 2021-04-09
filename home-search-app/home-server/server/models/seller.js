import mongoose from 'mongoose';
const BuyerBookmarkSchema = new mongoose.Schema(
    {
        sellerId: {
            type: Number,
            required: "Seller ID cannot be null."
        },
        userProfile: {
            type: Object
        }
    },
    {
        versionKey: false
    }
);

//A virtual property named id will be copied and converted into hexa-decimal string
HomeSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
HomeSchema.set('toJSON', { virtuals: true });

// const model = mongoose.model('TodoList', TodoSchema);
const model = mongoose.model('seller', SellerSchema);

export default model;