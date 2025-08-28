import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const handleNavClick = (item: string) => {
    console.log(`Navigating to ${item}`);
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  return (
    <header className="bg-header-bg border-b border-border px-4 py-2">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="p-1"
          onClick={handleMenuClick}
        >
          <Menu className="h-5 w-5 text-foreground" />
        </Button>
        
        <div className="flex flex-col items-center">
          <div className="text-xs text-text-secondary font-medium">RCC</div>
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold">
            ARS
          </div>
        </div>
        
        <Button
          variant="ghost"
          className="w-8 h-8 bg-primary rounded-full flex items-center justify-center p-0 hover:bg-primary/80"
          onClick={() => console.log('User menu clicked')}
        >
          <span className="text-primary-foreground text-xs">👤</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;