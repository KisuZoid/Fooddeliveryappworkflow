import { Clock, Star, Tag } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface Restaurant {
  id: number;
  name: string;
  type: "snacks" | "dining";
  rating: number;
  deliveryTime: string;
  categories: string[];
  image: string;
  discount?: number;
  popular?: boolean;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Momos Corner",
    type: "snacks",
    rating: 4.5,
    deliveryTime: "20-30 min",
    categories: ["Momos", "Chowmein", "Manchurian"],
    image: "🥟",
    discount: 5,
    popular: true,
  },
  {
    id: 2,
    name: "Pizza Hub",
    type: "snacks",
    rating: 4.6,
    deliveryTime: "30-40 min",
    categories: ["Pizza", "Burger", "Fries"],
    image: "🍕",
    discount: 3,
  },
  {
    id: 3,
    name: "Biryani House",
    type: "snacks",
    rating: 4.8,
    deliveryTime: "25-35 min",
    categories: ["Biryani", "Chicken", "Rice"],
    image: "🍚",
    popular: true,
  },
  {
    id: 4,
    name: "Snack Station",
    type: "snacks",
    rating: 4.3,
    deliveryTime: "15-25 min",
    categories: ["Maggi", "Wings", "Strips"],
    image: "🍜",
  },
  {
    id: 5,
    name: "Shree Tiffin Service",
    type: "dining",
    rating: 4.7,
    deliveryTime: "30-45 min",
    categories: ["Dal", "Roti", "Sabzi", "Rice"],
    image: "🍱",
    popular: true,
  },
  {
    id: 6,
    name: "Annapurna Meals",
    type: "dining",
    rating: 4.6,
    deliveryTime: "35-50 min",
    categories: ["Thali", "Curry", "Chapati"],
    image: "🍛",
    discount: 4,
  },
  {
    id: 7,
    name: "Custom Kitchen",
    type: "dining",
    rating: 4.4,
    deliveryTime: "60-90 min",
    categories: ["Aloo Paratha", "Paneer", "Custom"],
    image: "🥘",
  },
  {
    id: 8,
    name: "Breakfast Point",
    type: "dining",
    rating: 4.5,
    deliveryTime: "20-30 min",
    categories: ["Poha", "Jalebi", "Kachori"],
    image: "🍲",
  },
];

interface RestaurantListProps {
  type: "snacks" | "dining";
  searchQuery: string;
}

export function RestaurantList({ type, searchQuery }: RestaurantListProps) {
  const filteredRestaurants = restaurants
    .filter((r) => r.type === type)
    .filter((r) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        r.name.toLowerCase().includes(query) ||
        r.categories.some((cat) => cat.toLowerCase().includes(query))
      );
    });

  return (
    <div className="grid gap-4">
      {filteredRestaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="flex gap-4">
            {/* Restaurant Image */}
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
              {restaurant.image}
            </div>

            {/* Restaurant Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600">
                    {restaurant.categories.join(", ")}
                  </p>
                </div>
                {restaurant.popular && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Popular
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span>{restaurant.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                {restaurant.discount && (
                  <div className="flex items-center gap-1 text-green-600">
                    <Tag className="w-4 h-4" />
                    <span>{restaurant.discount}% OFF</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
