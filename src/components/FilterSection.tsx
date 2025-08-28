import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FilterSectionProps {
  title: string;
  items: string[];
}

const FilterSection = ({ title, items }: FilterSectionProps) => {
  return (
    <Card className="bg-filter-bg border border-border p-3 mb-4">
      <h3 className="font-semibold text-sm text-foreground mb-2">{title}</h3>
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input 
              type="checkbox" 
              className="w-3 h-3 text-primary border-border rounded focus:ring-primary"
            />
            <span className="text-xs text-text-secondary">{item}</span>
          </div>
        ))}
      </div>
      <Button variant="outline" size="sm" className="mt-2 w-full text-xs">
        Apply Filter
      </Button>
    </Card>
  );
};

export default FilterSection;