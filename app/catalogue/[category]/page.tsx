import { notFound } from 'next/navigation';
import { categories, getProductsByCategory } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import { getEnding } from '@/app/functions';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category.id,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
    const { category } = await params;
    const categoryData = categories.find((cat) => cat.id === category);

    if (!categoryData) {
        return {
            title: 'Категория не найдена',
        };
    }

    return {
        title: `${categoryData.name} - Донбасс Мебель`,
        description: categoryData.name,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const categoryData = categories.find((cat) => cat.id === category);

    if (!categoryData) {
        notFound();
    }

    const categoryProducts = getProductsByCategory(category);

    return (
        <div className='min-h-screen mt-16 bg-gray-50'>
            {/* Header */}
            <div className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <div className='flex items-center gap-2 text-sm text-gray-600 mb-2'>
                        <Link href='/catalogue' className='hover:text-blue-600'>
                            Каталог
                        </Link>
                        <span>/</span>
                        <span className='text-gray-900'>
                            {categoryData.name}
                        </span>
                    </div>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                        {categoryData.name}
                    </h1>
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
                            className='bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors'
                        >
                            Все товары
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/catalogue/${cat.id}`}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    cat.id === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className='mb-8'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-900'>
                            {categoryData.name}
                        </h2>
                        <div className='text-sm text-gray-600'>
                            {getEnding(categoryProducts.length)}
                        </div>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {categoryProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
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
                                В этой категории продуктов нет
                            </h3>
                            <p className='text-gray-600 mb-4'>
                                Мы работаем над добавлением товаров в эту
                                категорию
                            </p>
                            <Link
                                href='/catalogue'
                                className='bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'
                            >
                                Просмотреть все продукты
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
