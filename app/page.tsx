import Image from 'next/image';
import Link from 'next/link';
import { categories, products } from './data/products';
import LightboxImage from './components/LighboxImage';
import ProductsSwiper from './components/ProductsSwiper';

export default function Home() {
    return (
        <div className='min-h-screen'>
            <section className='relative bg-[url(/hero.jpg)] bg-center bg-cover pt-8 text-white'>
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                    <div className='text-center flex flex-col gap-8'>
                        <Image
                            src='/icon.svg'
                            alt='Logo'
                            className='m-auto'
                            width={150}
                            height={150}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h1 className='text-4xl md:text-6xl font-bold font-heading'>
                            Донбасс Мебель
                        </h1>
                        <p className='text-xl md:text-2xl max-w-3xl mx-auto'>
                            Ваш комфорт — наш приоритет
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link
                                href='/catalogue'
                                className='bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                            >
                                Каталог
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id='about' className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4 font-heading'>
                            О нас
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Профессиональное производство мебели
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <div className='space-y-8'>
                            <div>
                                <p className='text-lg text-gray-700 mb-4'>
                                    готовых решений{' '}
                                    <span className='font-semibold text-lg font-heading  text-blue-600'>
                                        88
                                    </span>
                                </p>
                                <h3 className='text-xl font-semibold text-gray-900 mb-8 font-heading'>
                                    Мы производим:
                                </h3>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Индивидуальные заказы
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Бескаркасную мебель
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Обеденные группы
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Кухонные углы
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Мягкие лавки
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Комоды
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Полки
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shadow-md bg-white p-4 rounded-lg'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <span className='font-medium text-gray-900'>
                                                Пуфы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-8 h-full'>
                            <div className='bg-white shadow-md rounded-lg flex flex-col h-80 lg:h-full'>
                                <h3 className=' p-8 text-xl font-semibold text-gray-900 font-heading'>
                                    Оборудование:
                                </h3>

                                <div className='grid grid-cols-2 h-full'>
                                    <div className='flex justify-center items-center border-t border-r h-full border-gray-200'>
                                        <Image
                                            className='h-6'
                                            src='/grass.svg'
                                            alt='Grass'
                                            width={24}
                                            height={24}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>

                                    <div className='flex justify-center items-center border-t border-r h-full border-gray-200'>
                                        <Image
                                            className='h-6'
                                            src='/homag.svg'
                                            alt='Homag'
                                            width={24}
                                            height={24}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>

                                    <div className='flex justify-center items-center border-t border-r h-full border-gray-200'>
                                        <Image
                                            className='h-10'
                                            src='/altendorf.svg'
                                            alt='Altendorf'
                                            width={40}
                                            height={40}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>

                                    <div className='flex justify-center items-center border-t border-r h-full border-gray-200'>
                                        <Image
                                            className='h-8'
                                            src='/bosch.svg'
                                            alt='Bosch'
                                            width={32}
                                            height={32}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>

                                    <div className='flex justify-center items-center border-t border-r h-full border-gray-200'>
                                        <Image
                                            className='h-10'
                                            src='/weeke.svg'
                                            alt='Weeke'
                                            width={40}
                                            height={40}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>

                                    <div className='flex justify-center items-center border-t border-r h-full border-gray-200'>
                                        <Image
                                            className='h-10'
                                            src='/brandt.svg'
                                            alt='Brandt'
                                            width={40}
                                            height={40}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12 px-4 sm:px-6 lg:px-8'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4 font-heading'>
                            Популярные товары
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Наши наиболее популярные товары, тщательно выбранные
                            для вашего комфорта.
                        </p>
                    </div>

                    <div>
                        <ProductsSwiper
                            products={products}
                            ids={[1, 3, 5, 6]}
                        />
                    </div>

                    <div className='text-center mt-12'>
                        <Link
                            href='/catalogue'
                            className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                        >
                            Просмотреть все товары
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4 font-heading'>
                            Выберите категорию
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Найдите точно то, что вы ищете в нашей
                            организованной коллекции категорий мебели.
                        </p>
                    </div>

                    <div className='flex flex-wrap w-full max-w-4xl m-auto justify-center items-center gap-4'>
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/catalogue/${category.id}`}
                                className='group'
                            >
                                <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                                    <div className='px-6 pt-3 pb-2'>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors font-heading'>
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-16 bg-gradient-to-br bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4 font-heading'>
                            Модульные кухни
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Современное решение для вашего дома
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        {/* Content */}
                        <div className='space-y-8'>
                            <div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-6 font-heading'>
                                    Преимущества модульной кухни:
                                </h3>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-3'>
                                        <div className='font-semibold text-2xl -mt-1 text-gray-900'>
                                            +
                                        </div>
                                        <p className='text-gray-700'>
                                            позволяет добирать дополнительные
                                            шкафчики
                                        </p>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                        <div className='font-semibold text-2xl -mt-1 text-gray-900'>
                                            +
                                        </div>
                                        <p className='text-gray-700'>
                                            помогает сделать любое свободное
                                            пространство полезным
                                        </p>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                        <div className='font-semibold text-2xl -mt-1 text-gray-900'>
                                            +
                                        </div>
                                        <p className='text-gray-700'>
                                            дает возможность подбора цвета,
                                            площади и комплектации на ваш вкус
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-6 font-heading'>
                                    Кухни из данных материалов отличает:
                                </h3>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div className='bg-white p-4 rounded-lg shadow-md'>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                className='h-6'
                                                src='/time.svg'
                                                alt='Долговечность'
                                                width={24}
                                                height={24}
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                }}
                                            />
                                            <span className='font-medium text-gray-900'>
                                                долговечность
                                            </span>
                                        </div>
                                    </div>
                                    <div className='bg-white p-4 rounded-lg shadow-md'>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                className='h-6'
                                                src='/drop.svg'
                                                alt='Bлагоустойчивость'
                                                width={24}
                                                height={24}
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                }}
                                            />
                                            <span className='font-medium text-gray-900'>
                                                влагоустойчивость
                                            </span>
                                        </div>
                                    </div>
                                    <div className='bg-white p-4 rounded-lg shadow-md'>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                className='h-6'
                                                src='/spark.svg'
                                                alt='Износостойкость'
                                                width={24}
                                                height={24}
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                }}
                                            />
                                            <span className='font-medium text-gray-900'>
                                                износостойкость
                                            </span>
                                        </div>
                                    </div>
                                    <div className='bg-white p-4 rounded-lg shadow-md'>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                className='h-6'
                                                src='/arrow.svg'
                                                alt='Низкая стоимость'
                                                width={24}
                                                height={24}
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                }}
                                            />
                                            <span className='font-medium text-gray-900'>
                                                низкая стоимость
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kitchen Images */}
                        <div className='space-y-8 flex flex-col h-full'>
                            <div className='bg-white p-6 rounded-lg shadow-md'>
                                <h4 className='text-xl font-semibold text-gray-900 mb-4 font-heading'>
                                    Материалы:
                                </h4>
                                <div className='space-y-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 bg-gray-900 rounded-full'></div>
                                        <span className='text-gray-900'>
                                            <strong>Материал корпуса</strong> —
                                            ЛДСП
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 bg-gray-900 rounded-full'></div>
                                        <span className='text-gray-900'>
                                            <strong>Материал фасада</strong> —
                                            МДФ
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 h-80 lg:h-full gap-4'>
                                <div className='relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md'>
                                    <LightboxImage
                                        className='object-cover'
                                        image='/kitchen1.jpg'
                                        name='Модульная кухня 1'
                                        color='#000000'
                                    />
                                </div>
                                <div className='relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md'>
                                    <LightboxImage
                                        className='object-cover'
                                        image='/kitchen2.jpg'
                                        name='Модульная кухня 2'
                                        color='#000000'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4 font-heading'>
                            Почему выбирают Донбасс Мебель?
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Мы стремимся предоставить вам лучший опыт покупки
                            мебели.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center'>
                            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg
                                    className='w-8 h-8 text-green-600'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2 font-heading'>
                                Быстрое производство
                            </h3>
                            <p className='text-gray-600'>
                                Соблюдение всех оговоренных сроков без ущерба
                                качеству
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg
                                    className='w-8 h-8 text-blue-600'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2 font-heading'>
                                Гарантия качества
                            </h3>
                            <p className='text-gray-600'>
                                Вся продукция сделана из лучших материалов и
                                предназначена для долгой эксплуатации.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg
                                    className='w-8 h-8 text-purple-600'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                                    />
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2 font-heading'>
                                Удовлетворение клиента
                            </h3>
                            <p className='text-gray-600'>
                                Ваше удовлетворение является нашим первым
                                приоритетом
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contacts Section */}
            <section id='contacts' className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4 font-heading'>
                            Свяжитесь с нами
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Мы быстро отвечаем
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* Contact Information */}
                        <div className='space-y-8'>
                            <div className='bg-white p-8 rounded-lg shadow-sm'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-6 font-heading'>
                                    Контактная информация
                                </h3>

                                <div className='space-y-6'>
                                    {/* Email */}
                                    <div className='flex items-start gap-4'>
                                        <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg
                                                className='w-6 h-6 text-blue-600'
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
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-900 mb-1'>
                                                Email
                                            </h4>
                                            <a
                                                href='mailto:office@donbass-mebel.ru'
                                                className='text-blue-600 hover:text-blue-800 transition-colors'
                                            >
                                                office@donbass-mebel.ru
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone Numbers */}
                                    <div className='flex items-start gap-4'>
                                        <div className='bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg
                                                className='w-6 h-6 text-purple-600'
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
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-900 mb-1'>
                                                Телефоны
                                            </h4>
                                            <div className='space-y-1'>
                                                <a
                                                    href='tel:+79853999777'
                                                    className='block text-blue-600 hover:text-blue-800 transition-colors'
                                                >
                                                    +7 985 399 97 77
                                                </a>
                                                <a
                                                    href='tel:+79592999777'
                                                    className='block text-blue-600 hover:text-blue-800 transition-colors'
                                                >
                                                    +7 959 299 97 77
                                                </a>
                                                <a
                                                    href='tel:+79591197701'
                                                    className='block text-blue-600 hover:text-blue-800 transition-colors'
                                                >
                                                    +7 959 119 77 01
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address Information */}
                        <div className='space-y-8'>
                            <div className='bg-white p-8 rounded-lg shadow-sm'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-6 font-heading'>
                                    Адрес
                                </h3>

                                <div className='flex items-start gap-4 flex-col'>
                                    <div className='flex gap-4'>
                                        <div className='bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg
                                                className='w-6 h-6 text-red-600'
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
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-900 mb-1'>
                                                Наш офис
                                            </h4>
                                            <div className='text-gray-700 space-y-1'>
                                                <p>
                                                    г. Луганск, ул. Монтажная,
                                                    17а
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-start gap-4'>
                                        <div className='bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg
                                                className='w-6 h-6 text-green-600'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-900 mb-1'>
                                                Рабочие часы
                                            </h4>

                                            <div className='space-y-2 text-gray-700'>
                                                <p>
                                                    <span className='text-xs'>
                                                        Пн-Пт:
                                                    </span>{' '}
                                                    9:00 - 18:00
                                                </p>
                                                <p>
                                                    <span className='text-xs'>
                                                        Сб:
                                                    </span>{' '}
                                                    10:00 - 16:00
                                                </p>
                                                <p>
                                                    <span className='text-xs'>
                                                        Вс:
                                                    </span>{' '}
                                                    Выходной
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
