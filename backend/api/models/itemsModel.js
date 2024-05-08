import mongoose from 'mongoose';

const itemsSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

export const Items = mongoose.model('Items', itemsSchema);
