# Mebel - Furniture Catalogue

A modern, responsive furniture catalogue website built with Next.js 14, TypeScript, and Tailwind CSS. Features server-side rendering for optimal performance and SEO.

## Features

-   **Server-Side Rendering**: All pages are pre-rendered for fast loading and better SEO
-   **Responsive Design**: Mobile-first design that works on all devices
-   **Product Catalogue**: Browse products by category with filtering
-   **Individual Product Pages**: Detailed product information with specifications
-   **Modern UI**: Clean, professional design with smooth animations
-   **TypeScript**: Full type safety throughout the application
-   **SEO Optimized**: Proper metadata and structured data

## Pages

-   **Home Page**: Hero section, featured products, and category showcase
-   **Catalogue Page**: All products with category filtering
-   **Category Pages**: Products filtered by specific categories
-   **Product Pages**: Detailed product information with related products

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation component
│   ├── ProductCard.tsx  # Product card component
│   └── PlaceholderImage.tsx # Image placeholder component
├── data/               # Data layer
│   └── products.ts     # Product and category data
├── types/              # TypeScript type definitions
│   └── product.ts      # Product and category interfaces
├── catalogue/          # Catalogue pages
│   ├── page.tsx        # Main catalogue page
│   └── [category]/     # Category-specific pages
│       └── page.tsx
├── product/            # Product pages
│   └── [id]/           # Individual product pages
│       └── page.tsx
├── layout.tsx          # Root layout with navigation
├── page.tsx            # Home page
└── globals.css         # Global styles
```

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mebel
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Data Structure

### Product Interface

```typescript
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
    };
    material?: string;
    color?: string;
    inStock: boolean;
    featured?: boolean;
}
```

### Category Interface

```typescript
interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
}
```

## Features in Detail

### Server-Side Rendering

-   All pages use Next.js App Router with server components
-   Static generation for product and category pages
-   Dynamic metadata generation for SEO

### Responsive Design

-   Mobile-first approach with Tailwind CSS
-   Responsive grid layouts for product cards
-   Mobile navigation with hamburger menu

### Product Management

-   Easy to add new products by updating the products array
-   Category-based filtering
-   Featured products system
-   Stock status tracking

### Performance Optimizations

-   Image optimization with Next.js Image component
-   Placeholder images for missing product photos
-   Efficient routing with dynamic segments
-   Minimal client-side JavaScript

## Customization

### Adding New Products

Edit `app/data/products.ts` to add new products to the catalogue.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added to `app/globals.css`.

### Categories

Add new categories by updating the categories array in `app/data/products.ts`.

## Technologies Used

-   **Next.js 14**: React framework with App Router
-   **TypeScript**: Type safety and better developer experience
-   **Tailwind CSS**: Utility-first CSS framework
-   **React**: UI library
-   **ESLint**: Code linting

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support or questions, please open an issue in the repository.
