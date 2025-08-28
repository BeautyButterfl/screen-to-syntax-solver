import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExportModal = ({ isOpen, onClose }: ExportModalProps) => {
  const [selectedFormat, setSelectedFormat] = useState("PDF");

  const formats = [
    { icon: "📄", name: "PDF", ext: ".pdf" },
    { icon: "📊", name: "Excel", ext: ".xlsx" },
    { icon: "📝", name: "Word", ext: ".docx" },
    { icon: "🔗", name: "CSV", ext: ".csv" },
    { icon: "📋", name: "Text", ext: ".txt" },
    { icon: "📑", name: "XML", ext: ".xml" },
  ];

  const handleExport = () => {
    console.log(`Exporting as ${selectedFormat}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold text-foreground">Save As (EXPORT)</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {formats.map((format) => (
              <Button
                key={format.name}
                variant={selectedFormat === format.name ? "default" : "outline"}
                className="flex flex-col items-center p-3 h-auto"
                onClick={() => setSelectedFormat(format.name)}
              >
                <span className="text-lg mb-1">{format.icon}</span>
                <span className="text-xs">{format.name}</span>
                <span className="text-xs text-text-secondary">{format.ext}</span>
              </Button>
            ))}
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
              Cancel
            </Button>
            <Button size="sm" className="text-xs" onClick={handleExport}>
              Export
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportModal;