import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, Minus } from "lucide-react";
import { useState, useRef } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import { GroceryRecommendations } from "./GroceryRecommendations";
import { Badge } from "../ui/badge";

interface GroceryItem {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  subcategory: string;
}

const groceryItems: GroceryItem[] = [
  // Essentials - Dairy
  {
    id: 1,
    name: "Full Cream Milk",
    price: 60,
    unit: "1L",
    image: "🥛",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 2,
    name: "Toned Milk",
    price: 50,
    unit: "1L",
    image: "🥛",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 3,
    name: "Buffalo Milk",
    price: 70,
    unit: "1L",
    image: "🥛",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 4,
    name: "Curd",
    price: 40,
    unit: "500g",
    image: "🥣",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 5,
    name: "Paneer",
    price: 80,
    unit: "200g",
    image: "🧈",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 6,
    name: "Buttermilk",
    price: 25,
    unit: "500ml",
    image: "🥤",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 7,
    name: "Fresh Cream",
    price: 45,
    unit: "200ml",
    image: "🥛",
    category: "essentials",
    subcategory: "Dairy",
  },
  {
    id: 8,
    name: "Butter",
    price: 60,
    unit: "100g",
    image: "🧈",
    category: "essentials",
    subcategory: "Dairy",
  },

  // Essentials - Eggs
  {
    id: 9,
    name: "White Eggs",
    price: 60,
    unit: "6 pcs",
    image: "🥚",
    category: "essentials",
    subcategory: "Eggs",
  },
  {
    id: 10,
    name: "Brown Eggs",
    price: 70,
    unit: "6 pcs",
    image: "🥚",
    category: "essentials",
    subcategory: "Eggs",
  },
  {
    id: 11,
    name: "White Eggs (Tray)",
    price: 180,
    unit: "30 pcs",
    image: "🥚",
    category: "essentials",
    subcategory: "Eggs",
  },

  // Essentials - Vegetables
  {
    id: 12,
    name: "Tomato",
    price: 30,
    unit: "1kg",
    image: "🍅",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 13,
    name: "Onion",
    price: 35,
    unit: "1kg",
    image: "🧅",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 14,
    name: "Potato",
    price: 25,
    unit: "1kg",
    image: "🥔",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 15,
    name: "Green Chilli",
    price: 20,
    unit: "100g",
    image: "🌶️",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 16,
    name: "Capsicum",
    price: 60,
    unit: "500g",
    image: "🫑",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 17,
    name: "Cauliflower",
    price: 40,
    unit: "1pc",
    image: "🥦",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 18,
    name: "Cabbage",
    price: 30,
    unit: "1pc",
    image: "🥬",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 19,
    name: "Carrot",
    price: 40,
    unit: "500g",
    image: "🥕",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 20,
    name: "Cucumber",
    price: 30,
    unit: "500g",
    image: "🥒",
    category: "essentials",
    subcategory: "Vegetables",
  },
  {
    id: 21,
    name: "Spinach",
    price: 20,
    unit: "1 bunch",
    image: "🥬",
    category: "essentials",
    subcategory: "Vegetables",
  },

  // Essentials - Fruits
  {
    id: 22,
    name: "Banana",
    price: 40,
    unit: "6 pcs",
    image: "🍌",
    category: "essentials",
    subcategory: "Fruits",
  },
  {
    id: 23,
    name: "Apple",
    price: 120,
    unit: "1kg",
    image: "🍎",
    category: "essentials",
    subcategory: "Fruits",
  },
  {
    id: 24,
    name: "Orange",
    price: 80,
    unit: "1kg",
    image: "🍊",
    category: "essentials",
    subcategory: "Fruits",
  },
  {
    id: 25,
    name: "Mango",
    price: 100,
    unit: "1kg",
    image: "🥭",
    category: "essentials",
    subcategory: "Fruits",
  },
  {
    id: 26,
    name: "Grapes",
    price: 80,
    unit: "500g",
    image: "🍇",
    category: "essentials",
    subcategory: "Fruits",
  },
  {
    id: 27,
    name: "Pomegranate",
    price: 120,
    unit: "1kg",
    image: "🍎",
    category: "essentials",
    subcategory: "Fruits",
  },
  {
    id: 28,
    name: "Watermelon",
    price: 30,
    unit: "1kg",
    image: "🍉",
    category: "essentials",
    subcategory: "Fruits",
  },

  // Items - Packaged Snacks
  {
    id: 29,
    name: "Lays Chips",
    price: 20,
    unit: "50g",
    image: "🥔",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 30,
    name: "Kurkure",
    price: 20,
    unit: "50g",
    image: "🌽",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 31,
    name: "Bingo Mad Angles",
    price: 20,
    unit: "50g",
    image: "🥨",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 32,
    name: "Haldiram's Bhujia",
    price: 60,
    unit: "200g",
    image: "🥜",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 33,
    name: "Good Day Biscuits",
    price: 30,
    unit: "100g",
    image: "🍪",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 34,
    name: "Parle-G",
    price: 10,
    unit: "100g",
    image: "🍪",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 35,
    name: "Oreo",
    price: 30,
    unit: "120g",
    image: "🍪",
    category: "items",
    subcategory: "Packaged Snacks",
  },
  {
    id: 36,
    name: "Hide & Seek",
    price: 35,
    unit: "100g",
    image: "🍪",
    category: "items",
    subcategory: "Packaged Snacks",
  },

  // Items - Packaged Food
  {
    id: 37,
    name: "Maggi Noodles",
    price: 12,
    unit: "70g",
    image: "🍜",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 38,
    name: "Yippee Noodles",
    price: 12,
    unit: "70g",
    image: "🍜",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 39,
    name: "Top Ramen",
    price: 12,
    unit: "70g",
    image: "🍜",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 40,
    name: "Pasta (Penne)",
    price: 80,
    unit: "500g",
    image: "🍝",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 41,
    name: "Oats",
    price: 120,
    unit: "1kg",
    image: "🌾",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 42,
    name: "Corn Flakes",
    price: 150,
    unit: "500g",
    image: "🥣",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 43,
    name: "Bread",
    price: 40,
    unit: "400g",
    image: "🍞",
    category: "items",
    subcategory: "Packaged Food",
  },
  {
    id: 44,
    name: "Pav",
    price: 20,
    unit: "4 pcs",
    image: "🥖",
    category: "items",
    subcategory: "Packaged Food",
  },

  // Items - Flours & Staples
  {
    id: 45,
    name: "Wheat Flour (Atta)",
    price: 40,
    unit: "1kg",
    image: "🌾",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 46,
    name: "Rice",
    price: 60,
    unit: "1kg",
    image: "🍚",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 47,
    name: "Basmati Rice",
    price: 120,
    unit: "1kg",
    image: "🍚",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 48,
    name: "Toor Dal",
    price: 100,
    unit: "1kg",
    image: "🫘",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 49,
    name: "Moong Dal",
    price: 110,
    unit: "1kg",
    image: "🫘",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 50,
    name: "Chana Dal",
    price: 100,
    unit: "1kg",
    image: "🫘",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 51,
    name: "Besan (Gram Flour)",
    price: 80,
    unit: "500g",
    image: "🌾",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 52,
    name: "Maida",
    price: 40,
    unit: "1kg",
    image: "🌾",
    category: "items",
    subcategory: "Flours & Staples",
  },
  {
    id: 53,
    name: "Sooji (Rava)",
    price: 50,
    unit: "500g",
    image: "🌾",
    category: "items",
    subcategory: "Flours & Staples",
  },

  // Items - Cooking Essentials
  {
    id: 54,
    name: "Refined Oil",
    price: 120,
    unit: "1L",
    image: "🫗",
    category: "items",
    subcategory: "Cooking Essentials",
  },
  {
    id: 55,
    name: "Mustard Oil",
    price: 140,
    unit: "1L",
    image: "🫗",
    category: "items",
    subcategory: "Cooking Essentials",
  },
  {
    id: 56,
    name: "Ghee",
    price: 500,
    unit: "1L",
    image: "🧈",
    category: "items",
    subcategory: "Cooking Essentials",
  },
  {
    id: 57,
    name: "Salt",
    price: 20,
    unit: "1kg",
    image: "🧂",
    category: "items",
    subcategory: "Cooking Essentials",
  },
  {
    id: 58,
    name: "Sugar",
    price: 45,
    unit: "1kg",
    image: "🧂",
    category: "items",
    subcategory: "Cooking Essentials",
  },
  {
    id: 59,
    name: "Tea",
    price: 150,
    unit: "250g",
    image: "☕",
    category: "items",
    subcategory: "Cooking Essentials",
  },
  {
    id: 60,
    name: "Coffee",
    price: 180,
    unit: "200g",
    image: "☕",
    category: "items",
    subcategory: "Cooking Essentials",
  },

  // Items - Personal Care
  {
    id: 61,
    name: "Shampoo (Clinic Plus)",
    price: 140,
    unit: "340ml",
    image: "🧴",
    category: "items",
    subcategory: "Personal Care",
  },
  {
    id: 62,
    name: "Shampoo (Dove)",
    price: 160,
    unit: "340ml",
    image: "🧴",
    category: "items",
    subcategory: "Personal Care",
  },
  {
    id: 63,
    name: "Soap (Lux)",
    price: 35,
    unit: "100g",
    image: "🧼",
    category: "items",
    subcategory: "Personal Care",
  },
  {
    id: 64,
    name: "Soap (Dettol)",
    price: 40,
    unit: "100g",
    image: "🧼",
    category: "items",
    subcategory: "Personal Care",
  },
  {
    id: 65,
    name: "Toothpaste (Colgate)",
    price: 80,
    unit: "200g",
    image: "🪥",
    category: "items",
    subcategory: "Personal Care",
  },
  {
    id: 66,
    name: "Face Wash",
    price: 150,
    unit: "100ml",
    image: "🧴",
    category: "items",
    subcategory: "Personal Care",
  },
  {
    id: 67,
    name: "Hair Oil",
    price: 100,
    unit: "200ml",
    image: "🧴",
    category: "items",
    subcategory: "Personal Care",
  },

  // Items - Household
  {
    id: 68,
    name: "Detergent Powder",
    price: 120,
    unit: "1kg",
    image: "🧺",
    category: "items",
    subcategory: "Household",
  },
  {
    id: 69,
    name: "Dish Wash Liquid",
    price: 100,
    unit: "500ml",
    image: "🧽",
    category: "items",
    subcategory: "Household",
  },
  {
    id: 70,
    name: "Floor Cleaner",
    price: 150,
    unit: "1L",
    image: "🧹",
    category: "items",
    subcategory: "Household",
  },
  {
    id: 71,
    name: "Toilet Cleaner",
    price: 120,
    unit: "500ml",
    image: "🚽",
    category: "items",
    subcategory: "Household",
  },
  {
    id: 72,
    name: "Mosquito Coil",
    price: 30,
    unit: "10 coils",
    image: "🦟",
    category: "items",
    subcategory: "Household",
  },
  {
    id: 73,
    name: "Tissue Paper",
    price: 40,
    unit: "100 pulls",
    image: "🧻",
    category: "items",
    subcategory: "Household",
  },
  {
    id: 74,
    name: "Garbage Bags",
    price: 60,
    unit: "30 pcs",
    image: "🗑️",
    category: "items",
    subcategory: "Household",
  },
];

interface GroceryViewProps {
  searchQuery: string;
}

export function GroceryView({ searchQuery }: GroceryViewProps) {
  const [quantities, setQuantities] = useState<
    Record<number, number>
  >({});
  const [activeTab, setActiveTab] = useState<
    "essentials" | "items"
  >("essentials");
  const [activeCategory, setActiveCategory] =
    useState<string>("");
  const sectionRefs = useRef<
    Record<string, HTMLDivElement | null>
  >({});

  const updateQuantity = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const scrollToCategory = (category: string) => {
    const element = sectionRefs.current[category];
    if (element) {
      const yOffset = -120; // Offset for fixed header and tabs
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveCategory(category);
    }
  };

  const filterAndGroupItems = (category: string) => {
    const filteredItems = groceryItems.filter(
      (item) =>
        item.category === category &&
        item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
    );

    const grouped = filteredItems.reduce(
      (acc, item) => {
        if (!acc[item.subcategory]) {
          acc[item.subcategory] = [];
        }
        acc[item.subcategory].push(item);
        return acc;
      },
      {} as Record<string, GroceryItem[]>,
    );

    // Define custom order for subcategories
    const orderMap: Record<string, number> = {
      // Essentials order: Dairy, Vegetables, Eggs, Fruits
      Dairy: 1,
      Vegetables: 2,
      Fruits: 3,
      Eggs: 4,
      // Items order
      "Packaged Snacks": 1,
      "Packaged Food": 2,
      "Flours & Staples": 3,
      "Cooking Essentials": 4,
      "Personal Care": 5,
      Household: 6,
    };

    // Sort grouped items by custom order
    const sortedGrouped: Record<string, GroceryItem[]> = {};
    Object.keys(grouped)
      .sort(
        (a, b) => (orderMap[a] || 999) - (orderMap[b] || 999),
      )
      .forEach((key) => {
        sortedGrouped[key] = grouped[key];
      });

    return sortedGrouped;
  };

  const renderItemCard = (item: GroceryItem) => (
    <Card key={item.id} className="p-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-4xl shrink-0">
          {item.image}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="truncate">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.unit}</p>
          <p className="text-orange-600 mt-1">₹{item.price}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        {quantities[item.id] ? (
          <div className="flex items-center gap-3 w-full justify-center">
            <Button
              size="sm"
              variant="outline"
              onClick={() => updateQuantity(item.id, -1)}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-8 text-center">
              {quantities[item.id]}
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => updateQuantity(item.id, 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <Button
            size="sm"
            className="w-full"
            onClick={() => updateQuantity(item.id, 1)}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </Card>
  );

  const renderCategorySection = (category: string) => {
    const groupedItems = filterAndGroupItems(category);
    const subcategories = Object.keys(groupedItems);

    if (subcategories.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          No items found matching your search
        </div>
      );
    }

    return (
      <>
        {/* Category Navigation */}
        <div className="mb-6 -mx-4 px-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-2">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  className={`
                    relative overflow whitespace-nowrap px-5 py-2.5 rounded-full
                    transition-all duration-300 ease-out
                    ${
                      activeCategory === subcategory
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/10 scale-105"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-green-400 hover:shadow-md hover:scale-105"
                    }
                  `}
                  onClick={() => scrollToCategory(subcategory)}
                >
                  <span className="relative z-10 text-sm">
                    {subcategory}
                  </span>
                  {activeCategory === subcategory && (
                    <div className="absolute inset-0 animate-pulse opacity-50" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <div className="space-y-8">
          {subcategories.map((subcategory) => (
            <div
              key={subcategory}
              ref={(el) => {
                sectionRefs.current[subcategory] = el;
              }}
            >
              <h3 className="mb-4 text-gray-700">
                {subcategory}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedItems[subcategory].map(renderItemCard)}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <Tabs
        defaultValue="essentials"
        className="w-full"
        onValueChange={(value) =>
          setActiveTab(value as "essentials" | "items")
        }
      >
        {/* Recommendations Section */}
        <GroceryRecommendations category={activeTab} />

        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger value="essentials">
            Essentials
          </TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
        </TabsList>

        <TabsContent value="essentials">
          {renderCategorySection("essentials")}
        </TabsContent>

        <TabsContent value="items">
          {renderCategorySection("items")}
        </TabsContent>
      </Tabs>
    </div>
  );
}