import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  onFiltersChange?: (hasFilters: boolean) => void;
}

const FilterSidebar = ({ onFiltersChange }: FilterSidebarProps) => {
  const [date, setDate] = useState<Date>();
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [technician, setTechnician] = useState("");

  const handleApplyFilters = () => {
    const hasFilters = !!(date || department || category || technician);
    onFiltersChange?.(hasFilters);
    console.log('Applying filters:', { date, department, category, technician });
  };

  // Auto-apply filters when any field changes
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    const hasFilters = !!(newDate || department || category || technician);
    onFiltersChange?.(hasFilters);
  };

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
    const hasFilters = !!(date || value || category || technician);
    onFiltersChange?.(hasFilters);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    const hasFilters = !!(date || department || value || technician);
    onFiltersChange?.(hasFilters);
  };

  const handleTechnicianChange = (value: string) => {
    setTechnician(value);
    const hasFilters = !!(date || department || category || value);
    onFiltersChange?.(hasFilters);
  };

  return (
    <div className="w-60 p-4 bg-muted/30 border-r border-border">
      <div className="space-y-6">
        {/* Filter by Date */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-2 block">
            FILTER BY DATE:
          </Label>
          <div className="text-xs text-text-secondary mb-2">Date Submitted:</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal text-xs h-8",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "MM/dd/yyyy") : <span>MM/DD/YYYY</span>}
                <CalendarIcon className="ml-auto h-4 w-4 text-primary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Filter by Department */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-2 block">
            FILTER BY DEPARTMENT:
          </Label>
          <div className="text-xs text-text-secondary mb-2">Select Department:</div>
          <Select value={department} onValueChange={handleDepartmentChange}>
            <SelectTrigger className="w-full h-8 text-xs">
              <SelectValue placeholder="Select Department" />
              <ChevronDown className="h-4 w-4 text-primary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hardware">Hardware</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="network">Network</SelectItem>
              <SelectItem value="security">Security</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter by Category */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-2 block">
            FILTER BY CATEGORY:
          </Label>
          <div className="text-xs text-text-secondary mb-2">Select Category:</div>
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full h-8 text-xs">
              <SelectValue placeholder="Select Category" />
              <ChevronDown className="h-4 w-4 text-primary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter by Technician */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-2 block">
            FILTER BY TECHNICIAN:
          </Label>
          <div className="text-xs text-text-secondary mb-2">Select Technician:</div>
          <Select value={technician} onValueChange={handleTechnicianChange}>
            <SelectTrigger className="w-full h-8 text-xs">
              <SelectValue placeholder="Select Technician" />
              <ChevronDown className="h-4 w-4 text-primary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech1">John Smith</SelectItem>
              <SelectItem value="tech2">Jane Doe</SelectItem>
              <SelectItem value="tech3">Mike Johnson</SelectItem>
              <SelectItem value="tech4">Sarah Wilson</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;