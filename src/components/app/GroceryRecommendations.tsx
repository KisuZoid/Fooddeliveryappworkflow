import { ScrollArea } from "../ui/scroll-area";
import { Sparkles } from "lucide-react";

interface RecommendationItem {
  id: number;
  name: string;
  emoji: string;
  price: number;
  highlight: boolean;
}

const essentialsRecommendations: RecommendationItem[] = [
  { id: 1, name: "Full Cream Milk", emoji: "🥛", price: 60, highlight: true },
  { id: 2, name: "White Eggs", emoji: "🥚", price: 60, highlight: true },
  { id: 3, name: "Tomato", emoji: "🍅", price: 30, highlight: false },
  { id: 4, name: "Onion", emoji: "🧅", price: 35, highlight: false },
  { id: 5, name: "Potato", emoji: "🥔", price: 25, highlight: false },
  { id: 6, name: "Banana", emoji: "🍌", price: 40, highlight: true },
  { id: 7, name: "Curd", emoji: "🥣", price: 40, highlight: false },
  { id: 8, name: "Paneer", emoji: "🧈", price: 80, highlight: true },
];

const itemsRecommendations: RecommendationItem[] = [
  { id: 1, name: "Maggi Noodles", emoji: "🍜", price: 12, highlight: true },
  { id: 2, name: "Bread", emoji: "🍞", price: 40, highlight: false },
  { id: 3, name: "Oats", emoji: "🌾", price: 120, highlight: true },
  { id: 4, name: "Lays Chips", emoji: "🥔", price: 20, highlight: false },
  { id: 5, name: "Parle-G", emoji: "🍪", price: 10, highlight: false },
  { id: 6, name: "Shampoo", emoji: "🧴", price: 140, highlight: true },
  { id: 7, name: "Detergent", emoji: "🧺", price: 120, highlight: true },
  { id: 8, name: "Tea", emoji: "☕", price: 150, highlight: false },
];

interface GroceryRecommendationsProps {
  category: "essentials" | "items";
}

export function GroceryRecommendations({ category }: GroceryRecommendationsProps) {
  const recommendations = category === "essentials" ? essentialsRecommendations : itemsRecommendations;
  const title = category === "essentials" ? "Fresh Daily Essentials" : "Popular Items";

  return (
    <div className="mb-6">
      <h2 className="mb-4">{title}</h2>
      <div className="relative -mx-4 px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {recommendations.map((item) => (
              <button
                key={item.id}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-24 h-24 bg-white rounded-full border-2 border-green-200 flex items-center justify-center text-4xl mb-2 group-hover:scale-110 transition-transform group-hover:border-green-400 relative">
                  {item.emoji}
                  {item.highlight && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-xs text-green-600 mt-1">
                    ₹{item.price}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
