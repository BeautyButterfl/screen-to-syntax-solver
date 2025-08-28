import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FilterSectionProps {
  title: string;
  items: string[];
}

const FilterSection = ({ title, items }: FilterSectionProps) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (item: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(item)) {
      newSelected.delete(item);
    } else {
      newSelected.add(item);
    }
    setSelectedItems(newSelected);
  };

  const handleApplyFilter = () => {
    console.log(`Applying filter for ${title}:`, Array.from(selectedItems));
  };

  return (
    <Card className="bg-filter-bg border border-border p-2 mb-3">
      <h3 className="font-semibold text-xs text-foreground mb-2">{title}</h3>
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input 
              type="checkbox" 
              className="w-3 h-3 text-primary border-border rounded focus:ring-primary cursor-pointer"
              checked={selectedItems.has(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <span className="text-xs text-text-secondary cursor-pointer" onClick={() => handleCheckboxChange(item)}>
              {item}
            </span>
          </div>
        ))}
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        className="mt-2 w-full text-xs h-6"
        onClick={handleApplyFilter}
      >
        Apply Filter
      </Button>
    </Card>
  );
};

export default FilterSection;