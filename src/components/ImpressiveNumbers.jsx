import React from 'react';
import { Users, Globe, Briefcase, BookOpen, UserCheck } from 'lucide-react';

const ImpressiveNumbers = () => {
  const stats = [
    {
      id: 1,
      icon: <Users size={40} />,
      number: "24000+",
      label: "Sinh viên"
    },
    {
      id: 2,
      icon: <Globe size={40} />,
      number: "500+",
      label: "Đối tác"
    },
    {
      id: 3,
      icon: <Briefcase size={40} />,
      number: "95%",
      label: "Tỷ lệ có việc làm"
    },
    {
      id: 4,
      icon: <BookOpen size={40} />,
      number: "75+",
      label: "Chương trình đào tạo"
    },
    {
      id: 5,
      icon: <UserCheck size={40} />,
      number: "60%",
      label: "Giảng viên trình độ Tiến sĩ"
    }
  ];

  return (
    <section className="py-20 bg-tluBlue text-white relative overflow-hidden">
      {/* Background Pattern (Optional subtle effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            Đại học Thủy Lợi qua những con số
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
              <div className="text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold uppercase text-blue-100 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpressiveNumbers;
