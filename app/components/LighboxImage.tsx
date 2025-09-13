'use client';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';
import React from 'react';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface LightboxProps {
    name: string;
    image: string;
    className?: string;
    color: string;
}

export default function LightboxImage({
    name,
    image,
    className,
    color,
}: LightboxProps) {
    const [open, setOpen] = React.useState(false);
    const slides = [{ src: image }];

    return (
        <>
            <Image
                onClick={() => setOpen(true)}
                src={image}
                alt={name}
                fill
                sizes='800px'
                className={`cursor-pointer scale-100 hover:scale-110 !transition-transform !duration-300 ease-in-out ${className}`}
            />
            <Lightbox
                render={{
                    buttonPrev: slides.length <= 1 ? () => null : undefined,
                    buttonNext: slides.length <= 1 ? () => null : undefined,
                    iconZoomIn: () => (
                        <div className='bg-white/80 p-2 rounded-md !shadow-md'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='size-6 text-black'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6'
                                />
                            </svg>
                        </div>
                    ),
                    iconZoomOut: () => (
                        <div className='bg-white/80 p-2 rounded-md !shadow-md'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='size-6 text-black'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6'
                                />
                            </svg>
                        </div>
                    ),
                    iconClose: () => (
                        <div className='!bg-white/80 p-2 rounded-md !shadow-md'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='size-6 text-black'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18 18 6M6 6l12 12'
                                />
                            </svg>
                        </div>
                    ),
                }}
                carousel={{ finite: slides.length <= 1 }}
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
                styles={{
                    root: {
                        '--yarl__color_backdrop': color,
                    },
                }}
            />
        </>
    );
}
