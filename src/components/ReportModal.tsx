import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ReportModal = ({ isOpen, onClose, title }: ReportModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div>
            <Label htmlFor="category" className="text-xs text-text-secondary">Category</Label>
            <Input id="category" className="mt-1 text-xs" placeholder="Select category" />
          </div>
          <div>
            <Label htmlFor="department" className="text-xs text-text-secondary">Department</Label>
            <Input id="department" className="mt-1 text-xs" placeholder="Select department" />
          </div>
          <div>
            <Label htmlFor="technique" className="text-xs text-text-secondary">Technique</Label>
            <Input id="technique" className="mt-1 text-xs" placeholder="Select technique" />
          </div>
          <div>
            <Label htmlFor="description" className="text-xs text-text-secondary">Description</Label>
            <Textarea id="description" className="mt-1 text-xs" placeholder="Enter description" rows={3} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
              Cancel
            </Button>
            <Button size="sm" className="text-xs">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportModal;