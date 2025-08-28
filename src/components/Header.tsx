import { Button } from "@/components/ui/button";

const Header = () => {
  const handleNavClick = (item: string) => {
    console.log(`Navigating to ${item}`);
  };

  return (
    <header className="bg-header-bg border-b border-border px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-bold">
            ARS
          </div>
          <nav className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-xs font-medium text-foreground hover:text-primary hover:bg-transparent px-2 py-1"
              onClick={() => handleNavClick('HOME')}
            >
              HOME
            </Button>
            <Button 
              variant="ghost" 
              className="text-xs font-medium text-foreground hover:text-primary hover:bg-transparent px-2 py-1"
              onClick={() => handleNavClick('TICKET')}
            >
              TICKET
            </Button>
            <Button 
              variant="ghost" 
              className="text-xs font-medium text-foreground hover:text-primary hover:bg-transparent px-2 py-1"
              onClick={() => handleNavClick('USER')}
            >
              USER
            </Button>
            <Button 
              variant="ghost" 
              className="text-xs font-medium text-foreground hover:text-primary hover:bg-transparent px-2 py-1"
              onClick={() => handleNavClick('DEPARTMENT')}
            >
              DEPARTMENT
            </Button>
            <Button 
              variant="ghost" 
              className="text-xs font-medium text-foreground hover:text-primary hover:bg-transparent px-2 py-1"
              onClick={() => handleNavClick('CATEGORY')}
            >
              CATEGORY
            </Button>
          </nav>
        </div>
        <Button
          variant="ghost"
          className="w-6 h-6 bg-primary rounded-full flex items-center justify-center p-0 hover:bg-primary/80"
          onClick={() => console.log('User menu clicked')}
        >
          <span className="text-primary-foreground text-xs">👤</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;