import {
  UtensilsCrossed,
  User,
  ChevronLeft,
  ShoppingCart,
} from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface AppHeaderProps {
  userName: string;
  userAddress: string;
  isGroceryMode: boolean;
  onGroceryToggle: () => void;
  onUserClick: () => void;
  onCartClick: () => void;
  cartItemCount: number;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export function AppHeader({
  userName,
  userAddress,
  isGroceryMode,
  onGroceryToggle,
  onUserClick,
  onCartClick,
  cartItemCount,
  showBackButton,
  onBackClick,
}: AppHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo or Back Button */}
          <div className="flex items-center gap-3">
            {showBackButton && onBackClick ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackClick}
                className="gap-1"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </Button>
            ) : (
              <>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-lg">
                  Meals
                  <br />
                  {/* Center: Grocery Toggle */}
                  {!showBackButton && (
                    <div className="flex items-center gap-2">
                      <Label
                        htmlFor="grocery-mode"
                        className="text-sm"
                      >
                        Grocery
                      </Label>
                      <Switch
                        id="grocery-mode"
                        checked={isGroceryMode}
                        onCheckedChange={onGroceryToggle}
                      />
                    </div>
                  )}
                </span>
              </>
            )}
          </div>

          {/* Right: User Info */}
          <div className="flex items-center gap-2">
            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-white text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </button>

            {/* User Profile */}
            <button
              onClick={onUserClick}
              className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
            >
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">
                  {userName}
                </div>
                <div className="text-xs text-gray-500">
                  {userAddress}
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}