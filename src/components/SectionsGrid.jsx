import React from 'react';
import { ChevronRight } from 'lucide-react';

const SectionsGrid = () => {
  const sections = [
    {
      id: 1,
      title: "Tuyển Sinh",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
      description: "Thông tin tuyển sinh đại học, thạc sĩ, tiến sĩ năm 2024",
      link: "#tuyen-sinh"
    },
    {
      id: 2,
      title: "Đào Tạo",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      description: "Chương trình đào tạo đa ngành, đa lĩnh vực",
      link: "#dao-tao"
    },
    {
      id: 3,
      title: "Nghiên Cứu",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      description: "Đẩy mạnh NCKH và chuyển giao công nghệ",
      link: "#nghien-cuu"
    },
    {
      id: 4,
      title: "Hợp Tác Quốc Tế",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
      description: "Mạng lưới đối tác quốc tế rộng khắp",
      link: "#hop-tac"
    },
    {
      id: 5,
      title: "Sinh Viên",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
      description: "Môi trường năng động, sáng tạo",
      link: "#sinh-vien"
    },
    {
      id: 6,
      title: "Cựu Sinh Viên",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      description: "Cộng đồng cựu sinh viên thành đạt",
      link: "#cuu-sinh-vien"
    },
    {
      id: 7,
      title: "Phục Vụ Cộng Đồng",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600",
      description: "Trách nhiệm xã hội và phục vụ cộng đồng",
      link: "#cong-dong"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tluBlue uppercase mb-4 tracking-wider">
            Khám phá TLU
          </h2>
          <div className="w-24 h-1 bg-tluBlue mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={section.link}
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 block h-64 ${
                index === 6 ? 'md:col-span-2 lg:col-span-1 xl:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-tluBlue/90 via-tluBlue/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>

              <img
                src={section.image}
                alt={section.title}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
              />

              <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide group-hover:text-blue-200 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {section.description}
                </p>
                <div className="absolute right-4 bottom-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <ChevronRight size={24} className="text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionsGrid;