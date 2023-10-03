import "../../app/globals.css";
import { SwitchTheme } from "@/components/SwitchTheme";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SwitchTheme />
    </div>
  );
}
