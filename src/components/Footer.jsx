import React from 'react';
import { Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tluBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Info Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-tluBlue font-bold text-xl">
              TLU
            </div>
            <div>
              <h3 className="font-bold text-lg uppercase leading-tight">Trường Đại học Thủy Lợi</h3>
              <p className="text-blue-200 text-sm">Thuyloi University</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-1 flex-shrink-0" />
            <p className="text-sm">175 Tây Sơn, Đống Đa, Hà Nội</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={20} className="flex-shrink-0" />
            <p className="text-sm">Điện thoại: (024) 3852 2201 - Fax: (024) 3563 3351</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={20} className="flex-shrink-0" />
            <p className="text-sm">Email: phonghcth@tlu.edu.vn</p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-bold text-lg border-b border-blue-600 pb-2 mb-4">CÁC CƠ SỞ KHÁC</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li className="hover:text-white cursor-pointer transition-colors">Cơ sở mở rộng (Khu ĐH Phố Hiến, Hưng Yên)</li>
            <li className="hover:text-white cursor-pointer transition-colors">Phân hiệu Đại học Thủy Lợi (TP. HCM)</li>
            <li className="hover:text-white cursor-pointer transition-colors">Viện Đào tạo & Khoa học ứng dụng miền Trung (Ninh Thuận)</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-bold text-lg border-b border-blue-600 pb-2 mb-4">LIÊN KẾT NHANH</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li className="hover:text-white cursor-pointer transition-colors">Thư viện</li>
            <li className="hover:text-white cursor-pointer transition-colors">Tạp chí KHCN Thủy Lợi</li>
            <li className="hover:text-white cursor-pointer transition-colors">Cổng thông tin đào tạo</li>
            <li className="hover:text-white cursor-pointer transition-colors">Tuyển dụng</li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h4 className="font-bold text-lg border-b border-blue-600 pb-2 mb-4">KẾT NỐI VỚI CHÚNG TÔI</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          <div className="mt-6">
            <p className="text-sm text-blue-200">© 2024 Bản quyền thuộc về Trường Đại học Thủy Lợi.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
