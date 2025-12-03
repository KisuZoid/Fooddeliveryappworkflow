import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import {
  User,
  MapPin,
  Phone,
  ShoppingBag,
  MessageSquare,
  Store,
} from "lucide-react";
import { Badge } from "../ui/badge";

interface UserProfileProps {
  onSwitchToVendor: () => void;
  onBackToHome: () => void;
}

export function UserProfile({
  onSwitchToVendor,
  onBackToHome,
}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Kislay Anand");
  const [address, setAddress] = useState("Janki Niwash");
  const [phone, setPhone] = useState("+91 9771450586");

  const orders = [
    {
      id: 1,
      restaurant: "Momos Corner",
      items: "Veg Momos x2, Cold Coffee",
      amount: 180,
      status: "Delivered",
      date: "2025-10-08",
      token: "MO-142",
    },
    {
      id: 2,
      restaurant: "Shree Tiffin Service",
      items: "Dal, Roti, Sabzi, Rice",
      amount: 120,
      status: "Delivered",
      date: "2025-10-07",
      token: "ST-089",
    },
    {
      id: 3,
      restaurant: "Pizza Hub",
      items: "Margherita Pizza, Fries",
      amount: 350,
      status: "In Progress",
      date: "2025-10-09",
      token: "PH-203",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                Personal Information
              </h2>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Save" : "Edit"}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!isEditing}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Mobile Number
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!isEditing}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="address">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Delivery Address
                </Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled={!isEditing}
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">
              Account Type
            </h2>
            <p className="text-gray-600 mb-4">
              Are you a vendor? Switch to vendor mode to manage
              your restaurant.
            </p>
            <Button
              onClick={onSwitchToVendor}
              variant="outline"
              className="gap-2"
            >
              <Store className="w-4 h-4" />
              Switch to Vendor Login
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold">
                    {order.restaurant}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {order.items}
                  </p>
                </div>
                <Badge
                  variant={
                    order.status === "Delivered"
                      ? "secondary"
                      : "default"
                  }
                  className={
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }
                >
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    Token: {order.token}
                  </span>
                  <span className="text-gray-600">
                    {order.date}
                  </span>
                </div>
                <span className="font-bold text-lg">
                  ₹{order.amount}
                </span>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">
              <MessageSquare className="w-5 h-5 inline mr-2" />
              Send Feedback
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="feedback-type">
                  Feedback Type
                </Label>
                <select
                  id="feedback-type"
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option>General Feedback</option>
                  <option>Restaurant Feedback</option>
                  <option>Delivery Feedback</option>
                  <option>App Feedback</option>
                </select>
              </div>
              <div>
                <Label htmlFor="feedback-message">
                  Your Feedback
                </Label>
                <Textarea
                  id="feedback-message"
                  placeholder="Share your experience..."
                  className="mt-2 min-h-32"
                />
              </div>
              <Button className="w-full">
                Submit Feedback
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}