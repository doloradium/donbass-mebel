import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';
import { getEnding } from '@/app/functions';

export const metadata = {
    title: 'Каталог - Донбасс Мебель',
    description:
        'Изучайте нашу коллекцию высококачественной мебели, включая кухни, пуфы, обеденные группы и многое другое.',
};

export default function CataloguePage() {
    return (
        <div className='min-h-screen mt-16 bg-gray-50'>
            {/* Header */}
            <div className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                        Каталог
                    </h1>
                    <p className='text-gray-600'>
                        Изучайте нашу коллекцию высококачественной мебели,
                        включая кухни, пуфы, обеденные группы и многое другое.
                    </p>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                {/* Categories Filter */}
                <div className='mb-8'>
                    <h2 className='text-lg font-semibold text-gray-900 mb-4'>
                        Категории
                    </h2>
                    <div className='flex flex-wrap gap-2'>
                        <Link
                            href='/catalogue'
                            className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'
                        >
                            Все товары
                        </Link>
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/catalogue/${category.id}`}
                                className='bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors'
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className='mb-8'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-900'>
                            Все товары
                        </h2>
                        <div className='text-sm text-gray-600'>
                            {getEnding(products.length)}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* No Products Message */}
                {products.length === 0 && (
                    <div className='text-center py-12'>
                        <div className='text-gray-400 mb-4'>
                            <svg
                                className='mx-auto h-12 w-12'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                                />
                            </svg>
                        </div>
                        <h3 className='text-lg font-medium text-gray-900 mb-2'>
                            Товары не найдены
                        </h3>
                        <p className='text-gray-600'>
                            Попробуйте изменить поиск или просмотреть наши
                            категории.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
