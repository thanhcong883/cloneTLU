import React from 'react';
import { ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Hội nghị viên chức, người lao động Trường Đại học Thủy Lợi năm 2024",
      date: "18/03/2024",
      summary: "Sáng ngày 18/03/2024, Trường Đại học Thủy lợi tổ chức Hội nghị viên chức, người lao động...",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "Thông báo tuyển sinh Đại học chính quy năm 2024",
      date: "15/03/2024",
      summary: "Trường Đại học Thủy Lợi thông báo phương án tuyển sinh đại học hệ chính quy năm 2024...",
      image: "https://images.unsplash.com/photo-1546410531-bea5aadcb6ce?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Lễ ký kết biên bản ghi nhớ hợp tác với đối tác Nhật Bản",
      date: "10/03/2024",
      summary: "Trường Đại học Thủy lợi đã có buổi làm việc và ký kết thỏa thuận hợp tác với tập đoàn...",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Sinh viên Thủy Lợi đạt giải cao trong kỳ thi Olympic Cơ học",
      date: "05/03/2024",
      summary: "Đội tuyển sinh viên Trường Đại học Thủy lợi xuất sắc mang về nhiều huy chương...",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 border-b-2 border-tluBlue pb-2">
          <h2 className="text-3xl font-bold text-tluBlue uppercase">Tin tức & Sự kiện</h2>
          <a href="#" className="flex items-center text-blue-600 hover:text-tluBlue font-semibold transition-colors">
            Xem tất cả <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-tluBlue text-white text-xs font-bold px-3 py-1 rounded">
                  {item.date}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-tluBlue transition-colors">
                  <a href="#">{item.title}</a>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
