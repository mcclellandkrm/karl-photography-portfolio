'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header className="header-overlay">
      <div className="header-content">
        {/* Logo - Square ODD MAN OUT style */}
        <div className="logo logo-clickable" onClick={scrollToTop}>
          <div className="logo-text">
            KARL<br />
            MCCLELLAND<br />
            PHOTOGRAPHY
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <Link href="/gallery" className="nav-link">MY WORK</Link>
          <Link href="/case-studies" className="nav-link">CASE STUDIES</Link>
          <button onClick={() => scrollToSection('my-story')} className="nav-link">MY STORY</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</button>
        </nav>
      </div>
    </header>
  );
}
