import Boende from "./components/Boende";
import Transport from "./components/Transport";
import Tal from "./components/Tal";
import Gavor from "./components/Gavor";
import Barn from "./components/Barn";
import Form from "./components/Form";
import Vigsel from "./components/Vigsel";
import ImageHaul from "./components/ImageHaul";
import CountdownClock from "./components/CountDownClock";
import Fredag from "./components/Fredag";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center pb-20 px-3">
			<section
				id="hem"
				className="h-screen w-full flex flex-col items-center justify-center"
			>
				<div className="flex flex-col items-center gap-4 justify-center">
					<h1 className="text-center font-bold text-4xl">
						Anna & Bennys Bröllop
					</h1>
					<div className="w-80 xs:w-100  px-3 py-2">
						<p className="text-center text-2xl">24 juli 2027</p>
					</div>
					<div className="w-90 xs:w-100  px-3 py-2">
						<p className="text-center text-xl">Ängsberga Gård, Trelleborg</p>
					</div>
					<CountdownClock />
				</div>
			</section>
			<section className="mb-10">
				<p className="paragraph paragraphMid">
					<span className="text-2xl">Hej!</span> <br />
					Vad kul att ni vill fira vår bröllopsdag med oss! Vi ser så mycket
					fram emot att träffa er och är så peppade på denna dag.
				</p>
				<p className="paragraph paragraphMid ">
					På den här sidan hittar ni all info ni behöver inför bröllopet. Längst
					ner finns ett formulär där ni kan ge oss lite extra info som
					underlättar inför helgen.
				</p>
				<div className="paragraph paragraphMid mb-10!">
					<span className="font-bold">Snabbinfo</span>
					<ul>
						<li>Datum: 24 juli 2027</li>
						<li>Plats: Ängsberga Gård, Trelleborg</li>
						<li>Klädkod: Kavaj</li>
						<li>Vigsel: 14:00</li>
					</ul>
				</div>

				<ImageHaul images={["/par_1.jpeg", "/par_2.jpeg"]} />
			</section>
			<Vigsel />
			<Boende />
			<Fredag />
			<Transport />
			<Tal />
			<Barn />
			<Gavor />
			<Form />
			<ImageHaul images={["/dukning_2.jpg", "/veranda_1.jpg"]} />
		</main>
	);
}
