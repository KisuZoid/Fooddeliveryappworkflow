import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import { Badge } from "../ui/badge";
import {
  Bell,
  Store,
  Plus,
  Edit,
  TrendingUp,
  MessageSquare,
  User,
  ShoppingBag,
  Utensils,
  Salad,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface VendorDashboardProps {
  onSwitchToCustomer: () => void;
}

export function VendorDashboard({
  onSwitchToCustomer,
}: VendorDashboardProps) {
  const [newOrders] = useState([
    {
      id: 1,
      token: "MO-203",
      items: "Veg Momos x2, Chowmein",
      customer: "Room 305, Hostel B",
      amount: 160,
      time: "2 min ago",
      slot: "Evening (6-7 PM)",
      type: "snacks",
    },
    {
      id: 2,
      token: "GR-104",
      items: "Full Cream Milk x2, White Eggs",
      customer: "Room 112, Hostel A",
      amount: 180,
      time: "5 min ago",
      slot: "Afternoon (12-3 PM)",
      type: "grocery",
    },
    {
      id: 3,
      token: "MO-204",
      items: "Paneer Momos x1",
      customer: "Room 205, Hostel C",
      amount: 80,
      time: "8 min ago",
      slot: "Evening (6-7 PM)",
      type: "snacks",
    },
  ]);

  const [menuItems] = useState([
    // Snacks & Dining
    {
      id: 1,
      name: "Veg Momos (6pc)",
      price: 60,
      category: "Snacks",
      subcategory: "Momos",
      available: true,
      type: "food",
    },
    {
      id: 2,
      name: "Paneer Momos (6pc)",
      price: 80,
      category: "Snacks",
      subcategory: "Momos",
      available: true,
      type: "food",
    },
    {
      id: 3,
      name: "Chowmein",
      price: 70,
      category: "Snacks",
      subcategory: "Chinese",
      available: true,
      type: "food",
    },
    {
      id: 4,
      name: "Manchurian",
      price: 90,
      category: "Snacks",
      subcategory: "Chinese",
      available: false,
      type: "food",
    },
    // Grocery - Essentials
    {
      id: 5,
      name: "Full Cream Milk",
      price: 60,
      category: "Essentials",
      subcategory: "Dairy",
      available: true,
      type: "grocery",
    },
    {
      id: 6,
      name: "White Eggs",
      price: 60,
      category: "Essentials",
      subcategory: "Eggs",
      available: true,
      type: "grocery",
    },
    {
      id: 7,
      name: "Tomato",
      price: 30,
      category: "Essentials",
      subcategory: "Vegetables",
      available: true,
      type: "grocery",
    },
    {
      id: 8,
      name: "Banana",
      price: 40,
      category: "Essentials",
      subcategory: "Fruits",
      available: true,
      type: "grocery",
    },
    // Grocery - Items
    {
      id: 9,
      name: "Maggi Noodles",
      price: 12,
      category: "Items",
      subcategory: "Packaged Food",
      available: true,
      type: "grocery",
    },
    {
      id: 10,
      name: "Lays Chips",
      price: 20,
      category: "Items",
      subcategory: "Packaged Snacks",
      available: true,
      type: "grocery",
    },
  ]);

  const [feedback] = useState([
    {
      id: 1,
      customer: "Kislay",
      rating: 5,
      comment: "Amazing momos! Fresh and tasty.",
      date: "2025-12-02",
      type: "snacks",
    },
    {
      id: 2,
      customer: "Janvi",
      rating: 4,
      comment: "Fresh vegetables, delivered on time.",
      date: "2025-12-02",
      type: "grocery",
    },
    {
      id: 3,
      customer: "Kittu",
      rating: 5,
      comment: "Best momos in campus!",
      date: "2025-12-01",
      type: "snacks",
    },
  ]);

  const [selectedMenuFilter, setSelectedMenuFilter] = useState("all");

  const filteredMenuItems = menuItems.filter((item) => {
    if (selectedMenuFilter === "all") return true;
    if (selectedMenuFilter === "food") return item.type === "food";
    if (selectedMenuFilter === "grocery") return item.type === "grocery";
    return true;
  });

  const getOrderTypeIcon = (type: string) => {
    switch (type) {
      case "snacks":
        return <Utensils className="w-4 h-4" />;
      case "grocery":
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return <Store className="w-4 h-4" />;
    }
  };

  const getOrderTypeColor = (type: string) => {
    switch (type) {
      case "snacks":
        return "bg-orange-100 text-orange-700";
      case "grocery":
        return "bg-green-100 text-green-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1>Vendor Dashboard</h1>
          <p className="text-gray-600">CampusEats Vendor - Multi-Category</p>
        </div>
        <Button
          onClick={onSwitchToCustomer}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <User className="w-4 h-4" />
          Switch to Customer
        </Button>
      </div>

      {/* New Orders Alert */}
      {newOrders.length > 0 && (
        <Alert className="mb-6 bg-gradient-to-r from-orange-50 to-green-50 border-orange-200">
          <Bell className="h-4 w-4 text-orange-600 animate-pulse" />
          <AlertDescription className="text-orange-900">
            You have {newOrders.length} new order
            {newOrders.length > 1 ? "s" : ""}!
          </AlertDescription>
        </Alert>
      )}

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Orders</p>
              <p className="text-2xl">24</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Revenue</p>
              <p className="text-2xl">₹2,840</p>
            </div>
            <Store className="w-8 h-8 text-orange-500" />
          </div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-2xl">4.7 ⭐</p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="orders">New Orders</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        {/* New Orders */}
        <TabsContent value="orders" className="space-y-4">
          {newOrders.map((order) => (
            <Card
              key={order.id}
              className={`p-4 border-l-4 ${
                order.type === "snacks"
                  ? "border-l-orange-500"
                  : "border-l-green-500"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge className={getOrderTypeColor(order.type)}>
                      <div className="flex items-center gap-1">
                        {getOrderTypeIcon(order.type)}
                        <span>Token: {order.token}</span>
                      </div>
                    </Badge>
                    <span className="text-sm text-gray-600">
                      {order.time}
                    </span>
                  </div>
                  <h3>{order.items}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {order.customer}
                  </p>
                  <p className="text-sm text-gray-600">
                    Slot: {order.slot}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl text-green-600">
                    ₹{order.amount}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1" size="sm">
                  Accept Order
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  Reject
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Menu Management */}
        <TabsContent value="menu" className="space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Select
              value={selectedMenuFilter}
              onValueChange={setSelectedMenuFilter}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="food">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    <span>Food Items</span>
                  </div>
                </SelectItem>
                <SelectItem value="grocery">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Grocery Items</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add New Item
            </Button>
          </div>

          <div className="space-y-4">
            {filteredMenuItems.map((item) => (
              <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3>{item.name}</h3>
                      <Badge
                        variant={
                          item.available ? "secondary" : "outline"
                        }
                        className={
                          item.available
                            ? "bg-green-100 text-green-700"
                            : ""
                        }
                      >
                        {item.available
                          ? "Available"
                          : "Out of Stock"}
                      </Badge>
                      <Badge variant="outline">
                        {item.type === "food" ? (
                          <div className="flex items-center gap-1">
                            <Utensils className="w-3 h-3" />
                            <span>Food</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <ShoppingBag className="w-3 h-3" />
                            <span>Grocery</span>
                          </div>
                        )}
                      </Badge>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-600">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.subcategory}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg">₹{item.price}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Feedback */}
        <TabsContent value="feedback" className="space-y-4">
          {feedback.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3>{item.customer}</h3>
                    <Badge
                      variant="outline"
                      className={
                        item.type === "snacks"
                          ? "border-orange-300 text-orange-700"
                          : "border-green-300 text-green-700"
                      }
                    >
                      {item.type === "snacks" ? "Snacks" : "Grocery"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <div className="text-lg">
                  {"⭐".repeat(item.rating)}
                </div>
              </div>
              <p className="text-gray-700">{item.comment}</p>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
