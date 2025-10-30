'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='fixed top-0 inset-x-0 z-50'>
            <nav
                className={`${
                    isScrolled ? 'bg-white/80' : 'bg-white'
                } backdrop-blur-xs shadow-md z-60`}
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center'>
                            <Link
                                href='/'
                                className='flex-shrink-0 flex items-center'
                            >
                                <Image
                                    src='/logo.svg'
                                    alt='Logo'
                                    width={50}
                                    height={50}
                                    className='!h-8'
                                    style={{ width: 'auto' }}
                                />
                            </Link>
                        </div>

                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8'>
                            <Link
                                href='/catalogue'
                                className='transition-colors duration-[800ms] ease-in-out text-gray-700 hover:text-blue-500 px-3 py-2 font-medium'
                            >
                                Каталог
                            </Link>

                            <Link
                                href='/#about'
                                className='transition-colors duration-[800ms] ease-in-out text-gray-700 hover:text-blue-500 px-3 py-2 font-medium'
                            >
                                О нас
                            </Link>

                            <Link
                                href='/#contacts'
                                className='transition-colors duration-[800ms] ease-in-out text-gray-700 hover:text-blue-500 px-3 py-2 font-medium'
                            >
                                Контакты
                            </Link>
                        </div>

                        <a
                            href='tel:+79853999777'
                            className='my-auto text-gray-900 font-semibold'
                        >
                            +7 (985) 399-97-77
                        </a>

                        {/* Mobile menu button */}
                        <div className='md:hidden flex items-center'>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
                            >
                                <span className='sr-only'>Open main menu</span>
                                {!isMenuOpen ? (
                                    <svg
                                        className='block h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M4 6h16M4 12h16M4 18h16'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className='block h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence mode='wait'>
                {isMenuOpen && (
                    <motion.div
                        key='mobile-menu'
                        className='md:hidden absolute left-0 right-0 top-16 z-55 border-b border-black/5'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <div className='px-2 pt-2 pb-3 flex flex-col space-y-1 sm:px-3 bg-white border-t'>
                            <Link
                                href='/#about'
                                className='transition-colors duration-[800ms] ease-in-out text-gray-700 hover:text-blue-500 px-3 py-2 font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                О нас
                            </Link>

                            <Link
                                href='/#contacts'
                                className='transition-colors duration-[800ms] ease-in-out text-gray-700 hover:text-blue-500 px-3 py-2 font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Контакты
                            </Link>

                            <Link
                                href='/catalogue/'
                                className='transition-colors duration-[800ms] ease-in-out text-gray-700 hover:text-blue-500 px-3 py-2 font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Каталог
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
