import { Star } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

const recommendations = [
  { id: 1, name: "Poha Jalebi", emoji: "🍛", rating: 4.5, popular: true },
  { id: 2, name: "Momos", emoji: "🥟", rating: 4.8, popular: true },
  { id: 3, name: "Pizza", emoji: "🍕", rating: 4.6, popular: false },
  { id: 4, name: "Burger", emoji: "🍔", rating: 4.4, popular: false },
  { id: 5, name: "Biryani", emoji: "🍚", rating: 4.9, popular: true },
  { id: 6, name: "Maggi", emoji: "🍜", rating: 4.3, popular: false },
  { id: 7, name: "Samosa", emoji: "🥟", rating: 4.2, popular: false },
  { id: 8, name: "Cold Coffee", emoji: "☕", rating: 4.7, popular: true },
];

export function FoodRecommendations() {
  const currentHour = new Date().getHours();
  let title = "Popular Right Now";
  
  if (currentHour >= 12 && currentHour < 15) {
    title = "Perfect for Lunch";
  } else if (currentHour >= 16 && currentHour < 20) {
    title = "Evening Favorites";
  } else if (currentHour >= 20 || currentHour < 2) {
    title = "Late Night Cravings";
  }

  return (
    <div>
      <h2 className="mb-4">{title}</h2>
      <div className="relative -mx-4 px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {recommendations.map((item) => (
              <button
                key={item.id}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-24 h-24 bg-white rounded-full border-2 border-orange-200 flex items-center justify-center text-4xl mb-2 group-hover:scale-110 transition-transform group-hover:border-orange-400 relative">
                  {item.emoji}
                  {item.popular && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-sm">{item.name}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mt-1">
                    <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
