// pages/api/product-list.js

import { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: any) {
	try {
		const url = req.query.merk
			? `http://localhost:8000/product?merk=${req.query.merk}`
			: `http://localhost:8000/product`;
		const response = await fetch(url, {
			method: "GET",
		});

		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).json({ message: "Error fetching data" });
	}
}
