import React from 'react';
import { ChevronRight, Camera } from 'lucide-react';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
      alt: "Khuôn viên trường Đại học Thủy Lợi",
      title: "Khuôn viên trường"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
      alt: "Giờ học thực hành",
      title: "Giờ học thực hành"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519452285022-eb3a71b2d308?auto=format&fit=crop&q=80&w=600",
      alt: "Thư viện hiện đại",
      title: "Thư viện hiện đại"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      alt: "Lễ tốt nghiệp",
      title: "Lễ tốt nghiệp"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      alt: "Hoạt động sinh viên",
      title: "Hoạt động sinh viên"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      alt: "Phòng thí nghiệm",
      title: "Phòng thí nghiệm"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10 border-b-2 border-tluBlue pb-4">
          <h2 className="text-3xl font-bold text-tluBlue uppercase flex items-center gap-3">
            <Camera size={32} className="text-tluBlue" />
            Hình ảnh & Video
          </h2>
          <a href="#" className="flex items-center text-blue-600 hover:text-tluBlue font-semibold transition-colors group">
            Xem thêm thư viện ảnh
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main Large Photo */}
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">{photos[0].title}</h3>
            </div>
          </div>

          {/* Smaller Photos */}
          {photos.slice(1).map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-48 md:h-auto lg:h-48">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-center font-bold uppercase text-sm tracking-wider">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
