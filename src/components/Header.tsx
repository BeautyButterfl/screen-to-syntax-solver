import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-header-bg border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded font-bold text-lg">
            ARS
          </div>
          <nav className="flex items-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              HOME
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              TICKET
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              USER
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              DEPARTMENT
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              CATEGORY
            </Button>
          </nav>
        </div>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground text-sm">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;