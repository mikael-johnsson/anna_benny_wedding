import Link from "next/link";

const Boende = () => {
  return (
    <section className="section flex flex-col items-start">
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
        maila xxxx@xxx.com. Man får självklart bo på annat hotell också om man
        vill det.
      </p>
      <p className="paragraph paragraphLeft">
        För er som vill äter vi middag tillsammans på fredag kväll. Alla är
        välkomna men det är ingen obligatorisk närvaro på middagen. Mer info om
        detta kommer!
      </p>
    </section>
  );
};

export default Boende;
