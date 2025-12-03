import { useState } from "react";
import { AppHeader } from "./app/AppHeader";
import { HomePage } from "./app/HomePage";
import { UserProfile } from "./app/UserProfile";
import { VendorDashboard } from "./app/VendorDashboard";
import { Cart, CartItem } from "./app/Cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";

export type UserType = "customer" | "vendor";
export type AppView = "home" | "profile" | "vendor-dashboard";

export function MainApp() {
  const [userType, setUserType] = useState<UserType>("customer");
  const [currentView, setCurrentView] = useState<AppView>("home");
  const [isGroceryMode, setIsGroceryMode] = useState(false);
  const [userName] = useState("Kislay Anand");
  const [userAddress] = useState("Janki Niwash");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Veg Momos",
      price: 80,
      quantity: 2,
      restaurant: "Momos Corner",
    },
    {
      id: "2",
      name: "Cold Coffee",
      price: 60,
      quantity: 1,
      restaurant: "Cafe Delight",
    },
  ]);

  const handleUserClick = () => {
    setCurrentView("profile");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
  };

  const handleSwitchToVendor = () => {
    setUserType("vendor");
    setCurrentView("vendor-dashboard");
  };

  const handleSwitchToCustomer = () => {
    setUserType("customer");
    setCurrentView("home");
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    setIsCartOpen(false);
  };

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        userName={userName}
        userAddress={userAddress}
        isGroceryMode={isGroceryMode}
        onGroceryToggle={() => setIsGroceryMode(!isGroceryMode)}
        onUserClick={handleUserClick}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={totalCartItems}
        showBackButton={currentView !== "home"}
        onBackClick={handleBackToHome}
      />

      <main className="pb-20">
        {currentView === "home" && (
          <HomePage isGroceryMode={isGroceryMode} />
        )}
        {currentView === "profile" && (
          <UserProfile
            onSwitchToVendor={handleSwitchToVendor}
            onBackToHome={handleBackToHome}
          />
        )}
        {currentView === "vendor-dashboard" && (
          <VendorDashboard onSwitchToCustomer={handleSwitchToCustomer} />
        )}
      </main>

      {/* Cart Sheet */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
          <SheetHeader className="px-4 py-4 border-b">
            <SheetTitle>Your Cart ({totalCartItems} items)</SheetTitle>
            <SheetDescription>
              Review your items and proceed to checkout
            </SheetDescription>
          </SheetHeader>
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}