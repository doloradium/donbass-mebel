import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/product';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/product/${product.id}`} className='group w-full'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative h-64 bg-gray-200'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes='400px'
                        className='object-contain p-4'
                    />
                    {product.extra && (
                        <p className='absolute text-sm text-black bottom-2 rounded-sm left-2 px-2 py-1 shadow-md bg-white/50 backdrop-blur-sm'>
                            {product.extra}
                        </p>
                    )}
                </div>

                <div className='p-4'>
                    <h3 className='text-lg font-semibold truncate text-gray-900 group-hover:text-blue-600 transition-colors font-heading'>
                        {product.name}
                    </h3>
                </div>
            </div>
        </Link>
    );
}
