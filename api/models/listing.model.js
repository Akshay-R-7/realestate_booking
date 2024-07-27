import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
    {
        name : {
            type : 'string',
            required : true
        },
        description : {
            type : 'string',
            required : true
        },
        address : {
            type : 'string',
            required : true
        },
        regularPrice :{
            type : 'number',
            required : true
        },
        discountedPrice:{
            type : 'number',
            required : true
        },
        bathrooms : {
            type : 'number',
            required : true
        },
        bedrooms : {
            type : 'number',
            required : true
        },
        furnished:{
            type : 'boolean',
            required : true
        },
        parking:{
            type : 'boolean',
            required : true
        },
        type: {
            type: 'string',
            required : true
        },
        offer:{
            type:'boolean',
            required : true
        },
        imageUrls :{
            type:'array',
            required : true
        },
        userRef : {
            type: 'String',
            required : true
        }
    },{timestamps: true}
)

const Listing = mongoose.model('Lisitng',listingSchema);

export default Listing