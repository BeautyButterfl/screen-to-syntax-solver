import { useState } from "react";
import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import DataTable from "@/components/DataTable";
import ReportModal from "@/components/ReportModal";
import ExportModal from "@/components/ExportModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("REPORTS");
  const [activeCCSTab, setActiveCCSTab] = useState("REPORTS");

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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Switched to ${tab} tab`);
  };

  const handleCCSTabClick = (tab: string) => {
    setActiveCCSTab(tab);
    console.log(`Switched to CCS ${tab} tab`);
  };

  const handleExport = () => {
    setIsExportModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar */}
        <div className="w-52 p-3 border-r border-border bg-background">
          <FilterSection 
            title="FILTER BY DEPARTMENT" 
            items={["Hardware", "Software", "Network", "Security"]}
          />
          <FilterSection 
            title="FILTER BY CATEGORY" 
            items={["Critical", "High", "Medium", "Low"]}
          />
          <FilterSection 
            title="FILTER BY STATUS" 
            items={["Open", "In Process", "Resolved", "Closed"]}
          />
          <FilterSection 
            title="FILTER BY TECHNIQUE" 
            items={["Diagnostic", "Repair", "Replacement", "Update"]}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3">
          <div className="h-full">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-sm font-bold text-foreground">REPORTS MANAGEMENT</h1>
              <span className="text-xs text-text-secondary">08/06/2025</span>
            </div>
            
            <div className="flex gap-1 mb-3">
              {["REPORTS", "DEPARTMENT", "CATEGORY", "STATUS", "TECHNIQUE", "LAST REVIEWED"].map((tab) => (
                <Button 
                  key={tab}
                  variant={activeTab === tab ? "default" : "outline"} 
                  size="sm" 
                  className="text-xs h-6 px-2"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>

            <div className="mb-3">
              <DataTable 
                headers={["Date", "Time", "Type", "Category", "Description", "Status"]}
                data={reportData}
                showActions={true}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="text-xs h-6 px-3"
                  onClick={handleExport}
                >
                  Export
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs h-6 px-3"
                  onClick={() => setIsReportModalOpen(true)}
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
        <div className="w-72 p-3 border-l border-border bg-background">
          <Card className="bg-card border border-border p-3 h-full">
            <h2 className="text-xs font-semibold text-foreground mb-2">Filter CCS</h2>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {["REPORTS", "DEPARTMENT", "CATEGORY", "STATUS", "TECHNIQUE", "LAST REVIEWED"].map((tab) => (
                <Button 
                  key={tab}
                  variant={activeCCSTab === tab ? "default" : "outline"} 
                  size="sm" 
                  className="text-xs h-5 px-2"
                  onClick={() => handleCCSTabClick(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>

            <DataTable 
              headers={["Date", "Time", "Description", "Status", "Team", "Priority"]}
              data={ccsData}
            />
          </Card>
        </div>
      </div>

      <ReportModal 
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        title="Add Report Comment"
      />

      <ExportModal 
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
};

export default Index;
