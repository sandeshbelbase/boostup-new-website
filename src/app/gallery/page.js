import Image from "next/image";

// Pre-defined dummy gallery images matching the "before / after" theme or cleaning themes
const galleryImages = [
  "https://images.pexels.com/photos/4099307/pexels-photo-4099307.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4099306/pexels-photo-4099306.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4890637/pexels-photo-4890637.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4099318/pexels-photo-4099318.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4239129/pexels-photo-4239129.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4098583/pexels-photo-4098583.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
