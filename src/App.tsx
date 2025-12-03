import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { MainApp } from "./components/MainApp";

export default function App() {
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  return (
    <div className="size-full">
      {!isAppInstalled ? (
        <LandingPage onInstall={() => setIsAppInstalled(true)} />
      ) : (
        <MainApp />
      )}
    </div>
  );
}
