import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import EmptyState from "@/components/EmptyState";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFiltersApplied, setHasFiltersApplied] = useState(false);

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleBackToDashboard = () => {
    console.log('Back to dashboard clicked');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to: ${page}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-foreground">REPORTS MANAGEMENT</h1>
              <span className="text-sm text-text-secondary">06/06/2025</span>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 flex items-center justify-center">
              {hasFiltersApplied ? (
                <div>
                  {/* This is where filtered results would show */}
                  <div className="text-center text-text-secondary">
                    Filtered results would appear here
                  </div>
                </div>
              ) : (
                <EmptyState />
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
      </div>
    </div>
  );
};

export default Index;