"use server";
import prisma from "../lib/prisma";

export const createInfo = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const plusOne = formData.get("plusOne") as string;
  const fridayDinner = formData.get("fridayDinner") as string;
  const allergies = formData.get("allergies") as string;
  const transport = formData.get("transport") as string;

  console.log("Form data:", {
    name,
    plusOne,
    fridayDinner,
    allergies,
    transport,
  });

  try {
    const res = await prisma.info.create({
      data: {
        name,
        plusOne,
        fridayDinner,
        allergies,
        transport,
      },
    });
    console.log("response from createInfo:", res); // Det här loggar det skapade objektet
  } catch (error) {
    console.error("Error creating info:", error);
  }
};
