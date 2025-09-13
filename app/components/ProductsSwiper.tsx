'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';
import { Product } from '../types/product';

export default function ProductsSwiper({
    products,
    ids,
}: {
    products: Product[];
    ids: number[];
}) {
    const filteredProducts = ids
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean) as Product[];

    return (
        <div className='w-full'>
            <div className='block sm:hidden -mt-16'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    pagination={{ el: '.custom-pagination', clickable: true }}
                    className='w-full'
                >
                    {filteredProducts.map((product) => (
                        <SwiperSlide
                            key={product.id}
                            className='!overflow-visible px-4 py-12 flex justify-center'
                        >
                            <div className='w-full'>
                                <ProductCard product={product} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='custom-pagination -mt-4 flex justify-center' />
            </div>

            {/* Tablet & Desktop: Grid */}
            <div className='hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className='flex w-full justify-center'
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
