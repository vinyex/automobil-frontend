// pages/api/product-delete.js

import { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: any) {
	const formData = req.body;
	try {
		const response = await fetch(
			`http://localhost:8000/product/${req.query.id}`,
			{
				method: "DELETE",
			}
		);

		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).json({ message: "Error fetching data" });
	}
}
