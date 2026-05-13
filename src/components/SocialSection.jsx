import Image from "next/image";

const images = [
  "/insta1.jpg",
  "/insta2.jpg",
  "/insta3.jpg",
  "/insta4.jpg",
];

export default function SocialSection() {
  return (
    <div id="social" className="py-20 px-4 sm:px-6 md:px-10">
      <h1 className="text-5xl font-bold text-center mb-5">
        Follow us on Instagram
      </h1>

      <p className="text-center text-[#254b95] mb-16">
        Follow us for latest burger updates
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              src={img}
              width={400}
              height={400}
              alt=""
              className="hover:scale-110 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}