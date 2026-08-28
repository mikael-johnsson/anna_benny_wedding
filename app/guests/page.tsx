import prisma from "../lib/prisma";
import { Info } from "../models/Info";
import InfoCard from "./components/InfoCard";

const GuestPage = async () => {
  const allInfo = (await prisma.info.findMany({})) as Info[];

  return (
    <section className="p-10 ">
      <h1 className="text-3xl bold mb-4">Svar från gästformuläret</h1>
      <div className="flex flex-col gap-4">
        {allInfo.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default GuestPage;
