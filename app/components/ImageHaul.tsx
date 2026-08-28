import Image from "next/image";

const containerClasses =
  "h-80 w-90 md:w-60 lg:w-80 lg:h-90 xl:w-100 relative overflow-hidden rounded-lg shadow-lg";
const imageClasses = "h-full w-full object-cover";

const ImageHaul = ({ images }: { images: string[] }) => {
  return (
    <div className="px-4 flex flex-col md:flex-row items-center justify-center gap-4 overflow-hidden">
      {images.map((image) => (
        <div key={image} className={`${containerClasses}`}>
          <Image
            className={`${imageClasses}`}
            src={image}
            alt="Bild från bröllopsgården"
            width={400}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageHaul;
