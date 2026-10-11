"use client";

import { SubmitEvent, useState } from "react";
import { createInfo } from "../actions/guestActions";

const Form = () => {
	const [haveSubmitted, setHaveSubmitted] = useState(false);
	const [name, setName] = useState("");
	const [plusOne, setPlusOne] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [fridayDinner, setFridayDinner] = useState("");
	const [allergies, setAllergies] = useState("");
	const [transport, setTransport] = useState("");

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const res = await createInfo(formData);
		if (!res) {
			alert("Något gick fel, försök igen senare.");
			return;
		}
		setHaveSubmitted(true);
		setName("");
		setPlusOne("");
		setFridayDinner("");
		setAllergies("");
		setTransport("");
		setPhone("");
		setEmail("");
		setTimeout(() => {
			setHaveSubmitted(false);
		}, 5000);
	};

	return (
		<section
			id="form"
			className="section items-center justify-center"
		>
			<h2 className="heading">Info till brudparet</h2>
			<p className="text-center italic w-[80%] max-w-100 mb-5">
				Här kan du ge lite info som brudparet och toastmasters behöver till
				bröllopshelgen.
			</p>

			<form
				onSubmit={handleSubmit}
				className={`w-full max-w-120 px-3 py-2 flex flex-col gap-3 items-center ${haveSubmitted ? "border-2 border-green-600" : ""}`}
			>
				<div className="inputContainer">
					<label htmlFor="name">Jag heter</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="text"
						name="name"
						id="name"
						placeholder="Namn Namnsson"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<label htmlFor="plusOne">Med mig följer</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="text"
						name="plusOne"
						id="plusOne"
						placeholder="Namn Namnsson"
						required
						value={plusOne}
						onChange={(e) => setPlusOne(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<label htmlFor="phone">Mitt telefonnnummer</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="text"
						name="phone"
						id="phone"
						placeholder="070-123 45 67"
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<label htmlFor="email">Min emailadress</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="email"
						name="email"
						id="email"
						placeholder="namn@namnsson.se"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<label htmlFor="fridayDinner">
						Jag / vi deltar på fredagens middag
					</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="text"
						name="fridayDinner"
						id="fridayDinner"
						placeholder="Ja eller nej"
						required
						value={fridayDinner}
						onChange={(e) => setFridayDinner(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<label htmlFor="allergies">Det är är våra allergier</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="text"
						name="allergies"
						id="allergies"
						placeholder="Till exempel skaldjur eller dålig musik"
						required
						value={allergies}
						onChange={(e) => setAllergies(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<label htmlFor="transport">
						Jag / vi åker med bussen till vigseln
					</label>
					<input
						className="border rounded w-full px-3 py-2 h-9"
						type="text"
						name="transport"
						id="transport"
						placeholder="Ja eller nej"
						required
						value={transport}
						onChange={(e) => setTransport(e.target.value)}
					/>
				</div>
				{haveSubmitted && (
					<p className="text-center text-green-600 text-lg">
						Tack för ditt svar! Vi ses på bröllopet!
					</p>
				)}
				<button className="border bg-text-primary text-background rounded-xl p-2 w-30 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200">
					Skicka
				</button>
			</form>
		</section>
	);
};

export default Form;
