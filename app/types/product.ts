export interface Product {
    id: number;
    name: string;
    image: string;
    imageMin: string;
    categoryId: string;
    extra?: string;
    dimensions?: {
        width?: string;
        height?: string;
        depth?: string;
        length?: string;
        diameter?: string;
    };
    dimensionsComplex?: {
        corner?: {
            width: string;
            height: string;
            depth: string;
            length: string;
        };
        stool: {
            width: string;
            height: string;
            length: string;
        };
        table: {
            width: string;
            height: string;
            length: string;
        };
    };
}

export interface Category {
    id: string;
    name: string;
}
