import Image from "next/image";

// Pre-defined dummy gallery images matching the "before / after" theme or cleaning themes
const galleryImages = [
  "/images/ba-2.jpeg",
  "/images/ba-1.jpeg",
  "/images/ba-3.jpeg",
  "/images/ba-4.jpeg",
  "/images/ba-5.jpeg",
  "/images/ba-6.jpeg",
  "/images/ba-7.jpeg",
  "/images/ba-8.jpeg",

];

export const metadata = {
  title: "Gallery | Boostup Cleaning Service",
  description: "See our before and after cleaning gallery. Witness the top-rated cleaning services in Dubbo, Wellington, and Narromine.",
};

export default function GalleryPage() {
  return (
    <main className="pt-[160px] pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our Cleaning Gallery 📸
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Take a look at the quality of our work. From detailed bond cleaning to regular home and office cleaning, our before-and-after results speak for themselves.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <img
                src={src}
                alt={`Cleaning work gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
