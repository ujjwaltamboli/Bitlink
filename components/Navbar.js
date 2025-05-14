"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  document.addEventListener('mouseup', (e)=>{setMenuOpen(false)});

  return (
    <nav className="bg-fuchsia-700 flex justify-between items-center h-14 px-4 lg:px-8 text-white relative">
      <Link href="/" className="font-bold text-lg lg:text-xl">BitLinks</Link>
      <button className="lg:hidden bg-fuchsia-600 p-2 rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`lg:flex gap-6 ${menuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:static bg-fuchsia-700 w-full lg:w-auto p-4 lg:p-0 top-14 lg:top-0 left-0 lg:left-auto z-10`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shorten">Shorten</Link></li>
        <li><Link href="/contact">Contact us</Link></li>
      </ul>
      <div className="hidden lg:flex gap-2">
        <Link href="/shorten"><button className="bg-fuchsia-400 p-1 rounded-md">Try Now</button></Link>
        <Link href="http://www.github.com"><button className="bg-fuchsia-400 p-1 rounded-md">Github</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;