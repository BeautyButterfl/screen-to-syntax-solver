import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import DataTable from "@/components/DataTable";
import FilterSection from "@/components/FilterSection";
import EmptyState from "@/components/EmptyState";
import Pagination from "@/components/Pagination";
import ExportModal from "@/components/ExportModal";
import ReportModal from "@/components/ReportModal";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFiltersApplied, setHasFiltersApplied] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [activeTab, setActiveTab] = useState("reports");
  const [activeCCSTab, setCCSActiveTab] = useState("approved");

  // Sample data for the table
  const [reports] = useState([
    {
      id: "001",
      date: "06/01/2025",
      department: "Hardware",
      category: "Critical",
      technician: "John Smith",
      status: "Pending"
    },
    {
      id: "002", 
      date: "06/02/2025",
      department: "Software",
      category: "High",
      technician: "Jane Doe",
      status: "Approved"
    },
    {
      id: "003",
      date: "06/03/2025", 
      department: "Network",
      category: "Medium",
      technician: "Mike Johnson",
      status: "In Progress"
    }
  ]);

  const handleExport = () => {
    setShowExportModal(true);
  };

  const handleBackToDashboard = () => {
    console.log('Back to dashboard clicked');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to: ${page}`);
  };

  const handleEdit = (id: string) => {
    setShowReportModal(true);
    console.log('Edit report:', id);
  };

  const handleView = (id: string) => {
    console.log('View report:', id);
  };

  const handleFiltersApplied = (hasFilters: boolean) => {
    setHasFiltersApplied(hasFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar */}
        <FilterSidebar onFiltersChange={handleFiltersApplied} />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="h-full flex flex-col">
            {/* Header with tabs */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <h1 className="text-xl font-bold text-foreground">REPORTS MANAGEMENT</h1>
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab("reports")}
                    className={`px-4 py-1 text-sm font-medium border-b-2 ${
                      activeTab === "reports" 
                        ? "border-primary text-primary" 
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Reports
                  </button>
                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`px-4 py-1 text-sm font-medium border-b-2 ${
                      activeTab === "analytics" 
                        ? "border-primary text-primary" 
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Analytics
                  </button>
                </div>
              </div>
              <span className="text-sm text-text-secondary">06/06/2025</span>
            </div>
            
            {/* Content Area */}
            <div className="flex-1">
              {hasFiltersApplied && activeTab === "reports" ? (
                <DataTable 
                  data={reports}
                  onEdit={handleEdit}
                  onView={handleView}
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <EmptyState />
                </div>
              )}
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between mt-6">
              <Pagination 
                currentPage={currentPage}
                totalPages={20}
                onPageChange={handlePageChange}
              />
              
              <div className="flex gap-3">
                <Button 
                  className="text-sm font-medium"
                  onClick={handleExport}
                >
                  <Download className="h-4 w-4 mr-2" />
                  EXPORT
                </Button>
                <Button 
                  variant="outline"
                  className="text-sm font-medium"
                  onClick={handleBackToDashboard}
                >
                  BACK TO DASHBOARD
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Filter CCS */}
        <div className="w-72 border-l border-border bg-filter-bg">
          <FilterSection 
            activeTab={activeCCSTab}
            onTabChange={setCCSActiveTab}
          />
        </div>
      </div>

      {/* Modals */}
      <ExportModal 
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
      />
      
      <ReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        title="Edit Report"
      />
    </div>
  );
};

export default Index;