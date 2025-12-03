import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurant: string;
  image?: string;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function Cart({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal < 50 ? 15 : 10;
  const gstOnDelivery = deliveryFee * 0.18;
  const platformFee = subtotal * 0.05;
  const discount = subtotal >= 50 ? subtotal * 0.02 : 0;
  const total = subtotal + deliveryFee + gstOnDelivery + platformFee - discount;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Your cart is empty
        </h3>
        <p className="text-sm text-gray-500 text-center">
          Add items from restaurants to get started
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.restaurant}</p>
                <p className="text-sm font-medium mt-1">₹{item.price}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                className="h-8 w-8 p-0"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="border-t bg-white px-4 py-4 space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">
              Delivery Fee {subtotal < 50 && "(Orders < ₹50)"}
            </span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">GST on Delivery (18%)</span>
            <span>₹{gstOnDelivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Platform Fee (5%)</span>
            <span>₹{platformFee.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount (2%)</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
          )}
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <span className="font-medium">Total</span>
          <span className="text-lg font-bold">₹{total.toFixed(2)}</span>
        </div>
        <Button onClick={onCheckout} className="w-full" size="lg">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
