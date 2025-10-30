import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    getProductById,
    products,
    getProductsByCategory,
    categories,
} from '../../data/products';
import LightboxImage from '@/app/components/LighboxImage';
import ProductsSwiper from '@/app/components/ProductsSwiper';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: String(product.id),
    }));
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getProductById(Number(id));

    if (!product) {
        return {
            title: 'Товар не найден - Донбасс Мебель',
        };
    }

    return {
        title: `${product.name} - Донбасс Мебель`,
        description: categories.find((cat) => cat.id === product.categoryId)
            ?.name,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getProductById(Number(id));

    if (!product) {
        notFound();
    }

    const relatedProductIds = getProductsByCategory(product.categoryId)
        .filter((p) => p.id !== product.id)
        .slice(0, 4)
        .map((p) => p.id);

    return (
        <div className='min-h-screen mt-16 bg-gray-50'>
            <div className='bg-white border-b'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <Link href='/catalogue' className='hover:text-blue-600'>
                            Каталог
                        </Link>
                        <span>/</span>
                        <Link
                            href={`/catalogue/${product.categoryId}`}
                            className='hover:text-blue-600'
                        >
                            {
                                categories.find(
                                    (cat) => cat.id === product.categoryId
                                )?.name
                            }
                        </Link>
                        <span>/</span>
                        <span className='text-gray-900'>{product.name}</span>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-8'>
                <div className='grid grid-cols-1 px-4 sm:px-0 lg:grid-cols-2 gap-12'>
                    <div className='relative'>
                        <div className='relative h-96 lg:h-[500px] shadow-md hover:shadow-xl bg-gray-200 rounded-lg overflow-hidden'>
                            <LightboxImage
                                image={product.image}
                                imageMin={product.imageMin}
                                name={product.name}
                                className='object-contain p-4'
                                color='rgb(229, 231, 235, 1)'
                            />
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div>
                            <h1 className='text-3xl font-bold text-gray-900 mb-2 font-heading'>
                                {product.name}
                            </h1>
                        </div>

                        <div className='bg-white shadow-md p-6 rounded-lg border'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                                Параметры
                            </h3>
                            <div className='space-y-3'>
                                <div className='grid grid-cols-2 justify-between'>
                                    <span className='text-gray-500'>
                                        Категория:
                                    </span>
                                    <span className='font-medium text-black'>
                                        {
                                            categories.find(
                                                (cat) =>
                                                    cat.id ===
                                                    product.categoryId
                                            )?.name
                                        }
                                    </span>
                                </div>
                                {product.extra && (
                                    <div className='grid grid-cols-2 justify-between'>
                                        <span className='text-gray-500'>
                                            Подкатегория:
                                        </span>
                                        <span className='first-letter:uppercase font-medium text-black'>
                                            {product.extra}
                                        </span>
                                    </div>
                                )}
                                {product.dimensions && (
                                    <div className='grid grid-cols-2 justify-between'>
                                        <span className='text-gray-600'>
                                            Измерения:
                                        </span>
                                        <div className='font-medium text-black flex flex-col gap-2'>
                                            {product.dimensions.length && (
                                                <div>
                                                    <span className='text-xs'>
                                                        Длина:{' '}
                                                    </span>
                                                    {product.dimensions.length}{' '}
                                                    мм
                                                </div>
                                            )}
                                            {product.dimensions.width && (
                                                <div>
                                                    <span className='text-xs'>
                                                        Ширина:{' '}
                                                    </span>
                                                    {product.dimensions.width}{' '}
                                                    мм
                                                </div>
                                            )}
                                            {product.dimensions.height && (
                                                <div>
                                                    <span className='text-xs'>
                                                        Высота:{' '}
                                                    </span>
                                                    {product.dimensions.height}{' '}
                                                    мм
                                                </div>
                                            )}
                                            {product.dimensions.depth && (
                                                <div>
                                                    <span className='text-xs'>
                                                        Глубина:{' '}
                                                    </span>
                                                    {product.dimensions.depth}{' '}
                                                    мм
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                                {product.dimensionsComplex && (
                                    <div className='grid text-black grid-cols-2 justify-between'>
                                        <span className='!text-gray-500'>
                                            Измерения:
                                        </span>
                                        <div className='flex flex-col gap-2 mb-2'>
                                            <span className='font-semibold'>
                                                Стул:{' '}
                                            </span>
                                            <div>
                                                <span className='text-xs'>
                                                    Высота:{' '}
                                                </span>
                                                {
                                                    product.dimensionsComplex
                                                        .stool.height
                                                }{' '}
                                                мм
                                            </div>
                                            <div>
                                                <span className='text-xs'>
                                                    Ширина:{' '}
                                                </span>
                                                {
                                                    product.dimensionsComplex
                                                        .stool.width
                                                }{' '}
                                                мм
                                            </div>
                                            <div>
                                                <span className='text-xs'>
                                                    Длина:{' '}
                                                </span>
                                                {
                                                    product.dimensionsComplex
                                                        .stool.length
                                                }{' '}
                                                мм
                                            </div>
                                        </div>

                                        {product.dimensionsComplex.corner ? (
                                            <div className='flex -mt-8 flex-col gap-2'>
                                                <span className='font-semibold'>
                                                    Угол:{' '}
                                                </span>
                                                <div>
                                                    <span className='text-xs'>
                                                        Высота:{' '}
                                                    </span>
                                                    {
                                                        product
                                                            .dimensionsComplex
                                                            .corner.height
                                                    }{' '}
                                                    мм
                                                </div>
                                                <div>
                                                    <span className='text-xs'>
                                                        Ширина:{' '}
                                                    </span>
                                                    {
                                                        product
                                                            .dimensionsComplex
                                                            .corner.width
                                                    }{' '}
                                                    мм
                                                </div>
                                                <div>
                                                    <span className='text-xs'>
                                                        Длина:{' '}
                                                    </span>
                                                    {
                                                        product
                                                            .dimensionsComplex
                                                            .corner.length
                                                    }{' '}
                                                    мм
                                                </div>
                                                <div>
                                                    <span className='text-xs'>
                                                        Глубина:{' '}
                                                    </span>
                                                    {
                                                        product
                                                            .dimensionsComplex
                                                            .corner.depth
                                                    }{' '}
                                                    мм
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                        <div className='flex flex-col gap-2'>
                                            <span className='font-semibold'>
                                                Стол:{' '}
                                            </span>
                                            <div>
                                                <span className='text-xs'>
                                                    Высота:{' '}
                                                </span>
                                                {
                                                    product.dimensionsComplex
                                                        .table.height
                                                }{' '}
                                                мм
                                            </div>
                                            <div>
                                                <span className='text-xs'>
                                                    Ширина:{' '}
                                                </span>
                                                {
                                                    product.dimensionsComplex
                                                        .table.width
                                                }{' '}
                                                мм
                                            </div>
                                            <div>
                                                <span className='text-xs'>
                                                    Длина:{' '}
                                                </span>
                                                {
                                                    product.dimensionsComplex
                                                        .table.length
                                                }{' '}
                                                мм
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {relatedProductIds.length > 0 && (
                    <div className='mt-16'>
                        <h2 className='text-2xl px-4 sm:px-0 font-bold text-gray-900 mb-8 font-heading'>
                            Похожие товары
                        </h2>
                        <div className='w-full'>
                            <ProductsSwiper
                                products={products}
                                ids={relatedProductIds}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
