import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cyan-50 h-screen">
      <div className="absolute top-0 left-0 border h-150 w-screen border-amber-600 flex justify-center">
        <Image src={"/herrgård.jpg"} alt={"Herrgård"} fill={true} />
      </div>
      <h1 className=" absolute top-15 left-[30%] bold text-center text-white text-6xl ">
        Anna & Bennys Bröllop
      </h1>
    </main>
  );
}
