import { Plus } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
        <Plus className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium text-muted-foreground mb-2">
        USE FILTERS TO
      </h3>
      <p className="text-lg font-medium text-muted-foreground">
        SHOW REPORTS
      </p>
    </div>
  );
};

export default EmptyState;