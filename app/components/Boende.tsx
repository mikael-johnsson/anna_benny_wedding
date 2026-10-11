import Link from "next/link";

const Boende = () => {
	return (
		<section
			id="boende"
			className="section flex flex-col items-start"
		>
			<h2 className="heading headingLeft">Boende</h2>
			<p className="paragraph paragraphLeft">
				För dem som reser långt eller vill unna sig en{" "}
				<span className="italic">staycation</span> har vi ordnat en rabattkod på
				<Link
					href="https://www.strawberry.se/hotell/sverige/malmo/clarion-hotel-malmo-live/"
					target="_blank"
				>
					{" "}
					Clarion Hotel Malmö Live
				</Link>
				. Uppge koden <span className="italic">WEDDING</span> och att ni är
				gäster till Anna & Bennys bröllop för 15% rabatt. Ni bokar genom att
				maila <span className="italic">book@clarionlive.se</span>. Man får
				självklart bo på annat hotell också om man vill det.
			</p>
		</section>
	);
};

export default Boende;
