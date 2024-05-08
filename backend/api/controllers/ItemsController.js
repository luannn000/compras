import { Items } from '../models/itemsModel.js';

class ItemsController {
	async create(req, res) {
		try {
			if (!req.body.title || !req.body.price)
				return res.status(400).send({ message: 'Insira nome e preço' });

			if (!req.body.description) req.body.description == '';

			const createItem = {
				title: req.body.title,
				description: req.body.description,
				price: req.body.price,
			};

			const item = await Items.create(createItem);

			return res.status(200).send(item);
		} catch (error) {
			return res.status(400).send(error);
		}
	}

	async findAll(req, res) {
		try {
			const items = await Items.find({});

			return res.status(200).send(items);
		} catch (error) {
			return res.status(500).send(error);
		}
	}

	async findByID(req, res) {
		try {
			const id = req.params.id;

			const item = await Items.findById(id);

			return res.status(200).send(item);
		} catch (error) {
			return res.status(400).send(error);
		}
	}

	async update(req, res) {
		try {
			const id = req.params.id;

			if (!req.body.title || !req.body.price)
				return res.status(400).send({ message: 'Insira nome e preço' });

			if (!req.body.description) req.body.description == '';

			const updateItem = {
				title: req.body.title,
				description: req.body.description,
				price: req.body.price,
			};

			const item = await Items.findByIdAndUpdate(id, updateItem);

			return res.status(200).send(item);
		} catch (error) {
			return res.status(400).send(error);
		}
	}

	async delete(req, res) {
		try {
			const id = req.params.id;

			const deletedItem = await Items.findByIdAndDelete(id);

			return res.status(200).send(deletedItem);
		} catch (error) {
			return res.status(400).send(error);
		}
	}
}

export default new ItemsController();
