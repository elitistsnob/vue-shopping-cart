export default function currencyFormat(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currencyDisplay: 'symbol', currency: 'USD' }).format(number);
} 