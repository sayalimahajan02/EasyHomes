import mongoose from 'mongoose';
const PropertySchema = new mongoose.Schema(
    {
        propertyId: {
            type: Number,
            required: "Property ID cannot be null."
        },
        propertyName: {
            type: String
        },
        propertyDesc: {
            type: String
        },
        propertyType: {
            type: String
        },
        propertySqftArea: {
            type: String
        },
        propertyPrice: {
            type: Number
        },
        propertyStreet: {
            type: String
        },
        propertyCity: {
            type: String
        },
        propertyState: {
            type: String
        },
        propertyZipcode: {
            type: Number
        },
        propertyBuildDate: {
            type: Date,
            default: Date.now
        },
        seller: {
            type: Object
        },
        buyer: {
            type: Object
        }
    },
    {
        versionKey: false
    }
);

//A virtual property named id will be copied and converted into hexa-decimal string
PropertySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
PropertySchema.set('toJSON', { virtuals: true });

// const model = mongoose.model('TodoList', TodoSchema);
const model = mongoose.model('property', PropertySchema);

export default model;