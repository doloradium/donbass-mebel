import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='bg-[#151515]  text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div className='space-y-4 col-span-2'>
                        <div>
                            <Link
                                href='/'
                                className='flex-shrink-0 flex mb-6 items-center'
                            >
                                <Image
                                    src='/logo.svg'
                                    alt='Logo'
                                    className='invert'
                                    width={150}
                                    height={400}
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </Link>
                            <p className='text-gray-300'>
                                Ваш комфорт — наш приоритет
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-white'>
                            Основные страницы
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/'
                                    className='text-gray-300 hover:text-white transition-colors'
                                >
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/catalogue'
                                    className='text-gray-300 hover:text-white transition-colors'
                                >
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/catalogue/sofas'
                                    className='text-gray-300 hover:text-white transition-colors'
                                >
                                    Каталог
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-white'>
                            Контакты
                        </h3>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <svg
                                    className='h-5 w-5 text-gray-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                    />
                                </svg>
                                <span className='text-gray-300'>
                                    +7 (985) 399-97-77
                                </span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <svg
                                    className='h-5 w-5 text-gray-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                </svg>
                                <span className='text-gray-300'>
                                    office@donbass-mebel.ru
                                </span>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <svg
                                    className='h-5 w-5 text-gray-400 mt-0.5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                </svg>
                                <div>
                                    <p className='text-gray-300'>
                                        ЛНР, г. Луганск
                                    </p>
                                    <p className='text-gray-300'>
                                        ул. Монтажная, 17а
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-12 pt-8'>
                    <div className='text-center'>
                        © 2025 Донбасс Мебель. Все права защищены.
                    </div>
                </div>
            </div>
        </footer>
    );
}
