'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-brandcream/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <Link href="/" className="flex items-center">
          <div className="h-16 object-contain text-brandbrown font-bold text-xl">
            RUKAN
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="text-slate-700 hover:text-black">Home</a>
          <a href="#about" className="text-slate-700 hover:text-black">About</a>
          <a href="#services" className="text-slate-700 hover:text-black">Services</a>
          <Link href="/portfolio" className="text-slate-700 hover:text-black">Portfolio</Link>
          <a href="#contact" className="text-slate-700 hover:text-black">Contact</a>
          <Link href="/terms" className="text-slate-500 hover:text-[#3D2B1F] text-xs">Terms</Link>
          <Link href="/privacy" className="text-slate-500 hover:text-[#3D2B1F] text-xs">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
