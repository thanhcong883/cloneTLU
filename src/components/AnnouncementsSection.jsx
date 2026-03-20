import React from 'react';
import { Bell, GraduationCap, FileText, ChevronRight } from 'lucide-react';

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Thông báo về việc tổ chức Lễ trao bằng tốt nghiệp đại học đợt 1 năm 2024",
      date: "19/03/2024",
      category: "Thông báo Đào tạo",
      icon: <GraduationCap className="text-tluBlue" size={24} />
    },
    {
      id: 2,
      title: "Thông báo tuyển dụng Giảng viên năm 2024",
      date: "17/03/2024",
      category: "Thông báo Tuyển dụng",
      icon: <FileText className="text-blue-500" size={24} />
    },
    {
      id: 3,
      title: "Kế hoạch tổ chức Hội nghị Khoa học sinh viên cấp Trường",
      date: "15/03/2024",
      category: "Thông báo NCKH",
      icon: <Bell className="text-red-500" size={24} />
    },
    {
      id: 4,
      title: "Thông báo về việc nghỉ lễ 30/4 và 1/5 năm 2024",
      date: "10/03/2024",
      category: "Thông báo Chung",
      icon: <Bell className="text-yellow-500" size={24} />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Main Announcements List */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="flex justify-between items-center mb-8 border-b-2 border-tluBlue pb-2">
              <h2 className="text-3xl font-bold text-tluBlue uppercase flex items-center gap-3">
                <Bell size={32} className="text-tluBlue" />
                Thông báo mới
              </h2>
              <a href="#" className="flex items-center text-blue-600 hover:text-tluBlue font-semibold transition-colors">
                Xem tất cả <ChevronRight size={20} />
              </a>
            </div>

            <div className="space-y-4">
              {announcements.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-start gap-4 border-l-4 border-tluBlue group">
                  <div className="bg-blue-50 p-3 rounded-full hidden sm:block">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-tluBlue bg-blue-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-tluBlue transition-colors line-clamp-2">
                      <a href="#">{item.title}</a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Quick Links */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-tluBlue">
              <h3 className="text-xl font-bold text-tluBlue mb-4 uppercase text-center border-b pb-2">
                Sinh viên cần biết
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 hover:text-tluBlue font-medium transition-colors cursor-pointer p-2 rounded hover:bg-gray-50">
                   <ChevronRight size={16} className="text-tluBlue" />
                   Thời khóa biểu
                </li>
                <li className="flex items-center gap-2 text-gray-700 hover:text-tluBlue font-medium transition-colors cursor-pointer p-2 rounded hover:bg-gray-50">
                   <ChevronRight size={16} className="text-tluBlue" />
                   Lịch thi
                </li>
                <li className="flex items-center gap-2 text-gray-700 hover:text-tluBlue font-medium transition-colors cursor-pointer p-2 rounded hover:bg-gray-50">
                   <ChevronRight size={16} className="text-tluBlue" />
                   Cổng đăng ký tín chỉ
                </li>
                <li className="flex items-center gap-2 text-gray-700 hover:text-tluBlue font-medium transition-colors cursor-pointer p-2 rounded hover:bg-gray-50">
                   <ChevronRight size={16} className="text-tluBlue" />
                   Sổ tay sinh viên
                </li>
                <li className="flex items-center gap-2 text-gray-700 hover:text-tluBlue font-medium transition-colors cursor-pointer p-2 rounded hover:bg-gray-50">
                   <ChevronRight size={16} className="text-tluBlue" />
                   Thư viện điện tử
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
