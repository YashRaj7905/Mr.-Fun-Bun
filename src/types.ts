export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Sweet' | 'Savory' | 'Beverage';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface RestaurantInfo {
  name: string;
  hindiName: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  category: string;
  address: string;
  phone: string;
  hours: string;
  location: {
    lat: number;
    lng: number;
  };
}
