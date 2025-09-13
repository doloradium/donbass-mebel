import type { Metadata } from 'next';
import { Unbounded, Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const unbounded = Unbounded({
    variable: '--font-unbounded',
    subsets: ['latin', 'cyrillic'],
});

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Донбасс Мебель - Каталог премиальной мебели',
    description:
        'Изучайте нашу коллекцию высококачественной мебели, включая кухни, пуфы, обеденные группы и многое другое.',
    keywords:
        'мебель, Луганск, ЛНР, лнр, луганск, кухня, на заказ, лавка, пуф, полка, комод, стол, обеденный стол, обеденная группа, кухонный угол',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={`${montserrat.className} ${unbounded.variable} ${montserrat.variable}`}
            data-scroll-behavior='smooth'
        >
            <head>
                <meta name='apple-mobile-web-app-title' content='Мебель' />
            </head>
            <body className={`antialiased bg-gray-50`}>
                <Navigation />
                <main className='min-h-screen'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
