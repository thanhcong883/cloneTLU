import React, { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'GIỚI THIỆU',
    'TIN TỨC',
    'TUYỂN SINH',
    'ĐÀO TẠO',
    'NGHIÊN CỨU',
    'HỢP TÁC QUỐC TẾ',
    'SINH VIÊN',
    'eTLU'
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-tluBlue text-white py-1">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm gap-4">
          <a href="#" className="hover:text-blue-200">Thư viện</a>
          <a href="#" className="hover:text-blue-200">Liên hệ</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200">
            <Globe size={14} />
            <span>VN</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-tluBlue rounded-full flex items-center justify-center text-white font-bold text-xl">
              TLU
            </div>
            <div>
              <h1 className="text-tluBlue font-bold text-xl uppercase leading-tight">Trường Đại học Thủy Lợi</h1>
              <p className="text-gray-500 text-sm">Thuyloi University</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6 font-semibold text-tluBlue text-sm">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-tluBlue hover:text-blue-600">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-tluBlue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-tluBlue text-white absolute w-full left-0 top-full">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-blue-800 px-6 py-3 hover:bg-blue-800 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
