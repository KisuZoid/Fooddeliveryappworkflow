import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FoodRecommendations } from "./FoodRecommendations";
import { RestaurantList } from "./RestaurantList";
import { GroceryView } from "./GroceryView";

interface HomePageProps {
  isGroceryMode: boolean;
}

export function HomePage({ isGroceryMode }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (isGroceryMode) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Search Bar for Grocery */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for groceries, vegetables, fruits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-white border-gray-300"
            />
          </div>
        </div>
        <GroceryView searchQuery={searchQuery} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for food, restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-white border-gray-300"
          />
        </div>
      </div>

      {/* Food Recommendations */}
      <FoodRecommendations />

      {/* Snacks & Dining Tabs */}
      <Tabs defaultValue="snacks" className="mt-8">
        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger value="snacks">Snacks</TabsTrigger>
          <TabsTrigger value="dining">Dining</TabsTrigger>
        </TabsList>

        <TabsContent value="snacks">
          <RestaurantList type="snacks" searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="dining">
          <RestaurantList type="dining" searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
