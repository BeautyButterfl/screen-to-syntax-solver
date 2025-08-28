import { useState } from "react";
import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import DataTable from "@/components/DataTable";
import ReportModal from "@/components/ReportModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reportData = [
    ["10-06-2025", "13:45", "HW", "Technique", "Status Issue", "IN PROCESS"],
    ["10-06-2025", "13:45", "HW", "Technique", "Hardware Issue", "RESOLVED"],
    ["10-06-2025", "13:45", "SW", "Technique", "Software Bug", "IN PROCESS"],
    ["10-06-2025", "13:45", "NW", "Technique", "Network Error", "OPEN"],
  ];

  const ccsData = [
    ["10-06-2025", "13:45", "CCS Issue", "IN PROCESS", "Technical Team", "High"],
    ["10-06-2025", "13:45", "CCS Issue", "RESOLVED", "Support Team", "Medium"],
    ["10-06-2025", "13:45", "CCS Issue", "OPEN", "Technical Team", "Low"],
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 p-4 border-r border-border">
          <FilterSection 
            title="FILTER BY DEPARTMENT" 
            items={["Hardware", "Software", "Network", "Security"]}
          />
          <FilterSection 
            title="FILTER BY CATEGORY" 
            items={["Critical", "High", "Medium", "Low"]}
          />
          <FilterSection 
            title="FILTER BY DEPARTMENT" 
            items={["IT Support", "Technical", "Maintenance"]}
          />
          <FilterSection 
            title="FILTER BY TECHNIQUE" 
            items={["Diagnostic", "Repair", "Replacement", "Update"]}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-lg font-bold text-foreground">REPORTS MANAGEMENT</h1>
              <span className="text-sm text-text-secondary">08/06/2025</span>
            </div>
            
            <div className="flex gap-2 mb-4">
              <Button variant="outline" size="sm" className="text-xs">
                REPORTS
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                DEPARTMENT
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                CATEGORY
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                STATUS
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                TECHNIQUE
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                LAST REVIEWED
              </Button>
            </div>

            <DataTable 
              headers={["Date", "Time", "Type", "Category", "Description", "Status"]}
              data={reportData}
              showActions={true}
            />

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <Button size="sm" className="text-xs">
                  Export
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add Comment
                </Button>
              </div>
              
              <div className="text-xs text-text-secondary">
                Showing 1-4 of 4 entries
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-4 border-l border-border">
          <Card className="bg-card border border-border p-3">
            <h2 className="text-sm font-semibold text-foreground mb-3">Filter CCS</h2>
            
            <div className="flex gap-2 mb-3">
              <Button variant="outline" size="sm" className="text-xs">
                REPORTS
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                DEPARTMENT
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                CATEGORY
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                STATUS
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                TECHNIQUE
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                LAST REVIEWED
              </Button>
            </div>

            <DataTable 
              headers={["Date", "Time", "Description", "Status", "Team", "Priority"]}
              data={ccsData}
            />
          </Card>
        </div>
      </div>

      <ReportModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Report Comment"
      />
    </div>
  );
};

export default Index;
