"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sestavi Tla
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Domov
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-800">
            Izdelki
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            O nas
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Kontakt
          </Link>
        </nav>
        <Button className="hidden md:block">Naroči zdaj</Button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Domov
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-800">
              Izdelki
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              O nas
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Kontakt
            </Link>
            <Button className="w-full">Naroči zdaj</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;