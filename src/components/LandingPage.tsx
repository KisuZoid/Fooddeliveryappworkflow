import { Button } from "./ui/button";
import {
  Smartphone,
  Clock,
  Tag,
  Truck,
  ShoppingBag,
  Coffee,
  UtensilsCrossed,
} from "lucide-react";

interface LandingPageProps {
  onInstall: () => void;
}

export function LandingPage({ onInstall }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <UtensilsCrossed className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">Meals</span>
        </div>
        <Button onClick={onInstall} size="sm" variant="outline">
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Food Delivery Made Simple for Campus Life
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with local tiffin centers, snack vendors,
            and dairy shops. Get your favorite meals delivered
            right to your doorstep.
          </p>
          <Button
            onClick={onInstall}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Install Web App
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Meals?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-orange-500" />}
            title="Flexible Time Slots"
            description="Choose delivery slots that fit your schedule. Get extra discounts on specific time windows."
          />
          <FeatureCard
            icon={<Tag className="w-8 h-8 text-orange-500" />}
            title="Student-Friendly Pricing"
            description="2-5% discounts on orders above ₹50. Special combo offers tailored for students."
          />
          <FeatureCard
            icon={<Truck className="w-8 h-8 text-orange-500" />}
            title="Smart Delivery"
            description="Low delivery fees starting at ₹10. On-demand and scheduled delivery options."
          />
          <FeatureCard
            icon={
              <ShoppingBag className="w-8 h-8 text-orange-500" />
            }
            title="Wide Variety"
            description="From tiffin meals to snacks, milk to groceries - everything in one place."
          />
        </div>
      </section>

      {/* Delivery Slots */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Delivery Slots
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <SlotCard
            time="12:00 PM - 3:00 PM"
            title="Afternoon"
            items={["Tiffin Meals", "Lunch Combos"]}
          />
          <SlotCard
            time="4:00 PM - 10:00 PM"
            title="Evening"
            items={["Tiffin", "Snacks", "Milk", "Beverages"]}
            badge="Popular"
          />
          <SlotCard
            time="11:00 PM - 2:00 AM"
            title="Night"
            items={["Limited Items", "Quick Snacks"]}
            badge="On-Demand"
          />
        </div>
      </section>

      {/* Popular Combos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Combos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <ComboCard emoji="🍱" name="Dinning + Chhas/Lassi" />
          <ComboCard emoji="🥟" name="Momos" />
          <ComboCard emoji="🍕" name="Pizza + Cold Drink" />
          <ComboCard emoji="🍔" name="Burger + Fries" />
          <ComboCard emoji="🍜" name="Maggi + Cold Coffee" />
          <ComboCard emoji="☕" name="Samosa + Chai" />
          <ComboCard emoji="🍛" name="Poha + Jalebi" />
          <ComboCard emoji="🍰" name="Cake" />
          <ComboCard emoji="🍚" name="Biryani + Raita" />
          <ComboCard emoji="🥟" name="Strips/Twister + Cold Drinks" />
          <ComboCard emoji="🍝" name="Noodles + Cold Coffee" />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of students already enjoying
            hassle-free food delivery.
          </p>
          <Button
            onClick={onInstall}
            size="lg"
            variant="secondary"
            className="bg-white text-orange-600 hover:bg-gray-100"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Install Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 border-t">
        <p>&copy; 2025 Meals. Made by students for students.</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function SlotCard({
  time,
  title,
  items,
  badge,
}: {
  time: string;
  title: string;
  items: string[];
  badge?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200 relative">
      {badge && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs">
          {badge}
        </span>
      )}
      <div className="mb-4">
        <div className="text-orange-600 font-bold">{time}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-sm text-gray-700 flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComboCard({
  emoji,
  name,
}: {
  emoji: string;
  name: string;
}) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-center">
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="text-sm">{name}</p>
    </div>
  );
}