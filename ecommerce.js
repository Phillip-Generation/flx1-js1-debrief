let item = 'other item';

item = item.toLowerCase();

switch (item) {
    case 'shoes':
        console.log('Shoes - $50');
        break;
    case 'jeans':
        console.log('Jeans - $25');
        break;
    case 'hat':
        console.log('Hat - $12');
        break;
    case 'socks':
        console.log('Socks - $2');
        break;
    default:
        console.log('Invalid Item');
}