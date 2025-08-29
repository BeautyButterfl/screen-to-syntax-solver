import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FilterSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FilterSection = ({ activeTab, onTabChange }: FilterSectionProps) => {
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
    console.log(`Applying filter:`, Array.from(selectedItems));
  };

  const items = activeTab === "approved" 
    ? ["Report 1", "Report 2", "Report 3", "Report 4"]
    : ["Pending Report 1", "Pending Report 2"];

  return (
    <div className="p-4">
      <h3 className="font-semibold text-sm text-foreground mb-4">Filter CCS</h3>
      
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => onTabChange("approved")}
          className={`px-3 py-1 text-xs rounded ${
            activeTab === "approved" 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Approved
        </button>
        <button
          onClick={() => onTabChange("pending")}
          className={`px-3 py-1 text-xs rounded ${
            activeTab === "pending" 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Pending
        </button>
      </div>

      {/* Filter Items */}
      <Card className="bg-filter-bg border border-border p-3">
        <div className="space-y-2">
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
          className="mt-3 w-full text-xs h-6"
          onClick={handleApplyFilter}
        >
          Apply Filter
        </Button>
      </Card>
    </div>
  );
};

export default FilterSection;