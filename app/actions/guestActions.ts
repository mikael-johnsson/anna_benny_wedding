"use server";
import prisma from "../lib/prisma";

export const createInfo = async (formData: FormData) => {
	const name = formData.get("name") as string;
	const plusOne = formData.get("plusOne") as string;
	const phone = formData.get("phone") as string;
	const email = formData.get("email") as string;
	const fridayDinner = formData.get("fridayDinner") as string;
	const allergies = formData.get("allergies") as string;
	const transport = formData.get("transport") as string;

	try {
		await prisma.info.create({
			data: {
				name,
				plusOne,
				phone,
				email,
				fridayDinner,
				allergies,
				transport,
			},
		});
		return true;
	} catch (error) {
		console.error("Error creating info:", error);
		return false;
	}
};
