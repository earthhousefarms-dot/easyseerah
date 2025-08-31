"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-xl text-gray-900">EasySeerah</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#timeline" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Timeline
            </Link>
            <Link href="#sahaba" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Sahaba
            </Link>
            <Link href="#hadith" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Hadith
            </Link>
            <Link href="#tours" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Tours
            </Link>
            <Link href="#shop" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Shop
            </Link>
            <Link href="/learn" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Start Learning
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="#timeline" className="block py-2 text-gray-700 hover:text-emerald-600">
              Timeline
            </Link>
            <Link href="#stories" className="block py-2 text-gray-700 hover:text-emerald-600">
              Stories
            </Link>
            <Link href="#sahaba" className="block py-2 text-gray-700 hover:text-emerald-600">
              Sahaba
            </Link>
            <Link href="#lineage" className="block py-2 text-gray-700 hover:text-emerald-600">
              Lineage
            </Link>
            <Link href="#lessons" className="block py-2 text-gray-700 hover:text-emerald-600">
              Lessons
            </Link>
            <Link href="#hadith" className="block py-2 text-gray-700 hover:text-emerald-600">
              Hadith
            </Link>
            <Link href="#tours" className="block py-2 text-gray-700 hover:text-emerald-600">
              Tours
            </Link>
            <Link href="#resources" className="block py-2 text-gray-700 hover:text-emerald-600">
              Resources
            </Link>
            <Link href="#shop" className="block py-2 text-gray-700 hover:text-emerald-600">
              Shop
            </Link>
            <Link href="/learn" className="block w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 text-center">
              Start Learning
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}