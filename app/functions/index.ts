export function getEnding(input: number) {
    let number = Math.abs(input);
    if (number % 100 >= 11 && number % 100 <= 14) {
        return `${number} товаров`;
    }

    switch (number % 10) {
        case 1:
            return `${number} товар`;
        case 2:
        case 3:
        case 4:
            return `${number} товарa`;
        default:
            return `${number} товаров`;
    }
}
