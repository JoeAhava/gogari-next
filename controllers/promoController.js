import Promo from "../models/promoModel.js";

const registerPromo = async (req, res) => {
	const { title, image, expireDate } = req.body;

	if (!image) {
		res.status(400);
		throw new Error("Image required");
	}
	const newPromo = new Promo({
		title,
		image,
		expireDate,
	});

	const createdPromo = await newPromo.save();

	res.status(201).json(createdPromo);
};

const getLatestPromos = async (req, res) => {};

const updatePromo = async (req, res) => {
	const { title, image, expireDate } = req.body;

	const promo = await Promo.findById(req.params.id);

	if (promo) {
		promo.image = image || promo.image;
		promo.title = title || promo.title;
		promo.expireDate = expireDate || promo.expireDate;

		const updatedPromo = await promo.save();
		res.status(201).json(updatedPromo);
	} else {
		res.status(404);
		throw new Error("Promo not found");
	}
};

const deletePromo = async (req, res) => {
	const promo = await Promo.findById(req.params.id);
	if (promo) {
		await promo.remove();
		res.json({
			message: "Promo succesfully removed",
		});
	} else {
		res.status(404);
		throw new Error("Promo not found");
	}
};
