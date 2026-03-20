import React from 'react';
import { Facebook, Youtube, Mail, Phone, MapPin, Instagram } from 'lucide-react';

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
            <p className="text-sm">175 Tây Sơn - P. Kim Liên - Hà Nội</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={20} className="flex-shrink-0" />
            <p className="text-sm">Điện Thoại: (024) 38522201</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={20} className="flex-shrink-0" />
            <p className="text-sm">Email: phonghcth@tlu.edu.vn</p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-bold text-lg border-b border-blue-600 pb-2 mb-4">Giới Thiệu</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li className="hover:text-white cursor-pointer transition-colors">Tổng quan</li>
            <li className="hover:text-white cursor-pointer transition-colors">Sứ mạng</li>
            <li className="hover:text-white cursor-pointer transition-colors">Tin tức & Sự kiện</li>
            <li className="hover:text-white cursor-pointer transition-colors">Cơ cấu tổ chức</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-bold text-lg border-b border-blue-600 pb-2 mb-4">Truy cập nhanh</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li className="hover:text-white cursor-pointer transition-colors">Các đơn vị đào tạo</li>
            <li className="hover:text-white cursor-pointer transition-colors">Đào tạo</li>
            <li className="hover:text-white cursor-pointer transition-colors">Tuyển sinh</li>
            <li className="hover:text-white cursor-pointer transition-colors">Nghiên cứu</li>
            <li className="hover:text-white cursor-pointer transition-colors">Hợp tác quốc tế</li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h4 className="font-bold text-lg border-b border-blue-600 pb-2 mb-4">Theo dõi TLU</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <div className="mt-6 border-t border-blue-600 pt-4">
            <p className="text-sm text-blue-200">Copyright © 2026 Thuyloi University. Dev by IT Center TLU.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
