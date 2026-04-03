import { MenuItem, Review, RestaurantInfo } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Mr. FunBun Bakers",
  hindiName: "एमआर. फनबन बेकर्स",
  rating: 4.7,
  reviewCount: 199,
  priceRange: "₹200–400 per person",
  category: "Bakery and Cake Shop",
  address: "Govind Nagar, 554, hanskhera road, Para Rd, near sai mandir, Lucknow, Uttar Pradesh 226011",
  phone: "093357 28158",
  hours: "Open · Closes 11:30 PM",
  location: {
    lat: 26.8467,
    lng: 80.9462
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Glazed Donuts',
    description: 'Soft, fluffy donuts with a sweet sugar glaze.',
    price: '₹80',
    category: 'Sweet',
    image: 'https://picsum.photos/seed/donut/600/400'
  },
  {
    id: '2',
    name: 'Hazelnut Cold Coffee',
    description: 'Rich, creamy cold coffee with a hint of hazelnut.',
    price: '₹120',
    category: 'Beverage',
    image: 'https://picsum.photos/seed/coffee/600/400'
  },
  {
    id: '3',
    name: 'Cheese Corn KFC Momos',
    description: 'Crispy, fried momos stuffed with cheese and corn.',
    price: '₹150',
    category: 'Savory',
    image: 'https://picsum.photos/seed/momos/600/400'
  },
  {
    id: '4',
    name: 'Honey Chilli Potato',
    description: 'Sweet and spicy crispy potato wedges.',
    price: '₹140',
    category: 'Savory',
    image: 'https://picsum.photos/seed/potato/600/400'
  },
  {
    id: '5',
    name: 'Belgian Waffles',
    description: 'Warm waffles served with chocolate syrup and whipped cream.',
    price: '₹160',
    category: 'Sweet',
    image: 'https://picsum.photos/seed/waffle/600/400'
  },
  {
    id: '6',
    name: 'Truffle Jar',
    description: 'Layers of rich chocolate truffle and cake in a jar.',
    price: '₹180',
    category: 'Sweet',
    image: 'https://picsum.photos/seed/truffle/600/400'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Pooja Gupta',
    rating: 5,
    comment: 'Beautiful ambience and the food is very tasty. Specially the Hazelnut cold coffee is very tasty and their truffle jar.',
    date: '3 months ago',
    avatar: 'https://picsum.photos/seed/pooja/100/100'
  },
  {
    id: '2',
    author: 'Ritika Pandey',
    rating: 5,
    comment: 'Is a wonderful place. Very nice. Taste and ambience is also good.',
    date: '4 months ago',
    avatar: 'https://picsum.photos/seed/ritika/100/100'
  },
  {
    id: '3',
    author: 'Jaysingh Yadav',
    rating: 5,
    comment: 'Nice hangout place in para, great variety of options to have..... I loved the cheese corn kfc momos, tikka and waffles.',
    date: '4 months ago',
    avatar: 'https://picsum.photos/seed/jaysingh/100/100'
  }
];
