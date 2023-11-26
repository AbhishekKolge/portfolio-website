'use client';
import { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
    } else {
      setActiveSection('about');
    }
  }, []);

  return (
    <nav className='nav hidden lg:block'>
      <ul className='mt-16 w-max'>
        <li>
          <Link
            className={`group flex items-center py-3 ${
              activeSection === 'about' ? 'active' : ''
            }`}
            href='#about'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`group flex items-center py-3 ${
              activeSection === 'experience' ? 'active' : ''
            }`}
            href='#experience'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Experience
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`group flex items-center py-3 ${
              activeSection === 'projects' ? 'active' : ''
            }`}
            href='#projects'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`group flex items-center py-3 ${
              activeSection === 'blogs' ? 'active' : ''
            }`}
            href='#blogs'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Blogs
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
