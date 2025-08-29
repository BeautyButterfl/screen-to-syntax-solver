import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Report {
  id: string;
  date: string;
  department: string;
  category: string;
  technician: string;
  status: string;
}

interface DataTableProps {
  data: Report[];
  onEdit: (id: string) => void;
  onView: (id: string) => void;
}

const DataTable = ({ data, onEdit, onView }: DataTableProps) => {
  const headers = ["ID", "Date", "Department", "Category", "Technician", "Status"];

  return (
    <div className="bg-card border border-border rounded overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-table-header border-b border-border">
            {headers.map((header, index) => (
              <TableHead key={index} className="text-xs font-semibold text-foreground px-2 py-1 h-8">
                {header}
              </TableHead>
            ))}
            <TableHead className="text-xs font-semibold text-foreground px-2 py-1 h-8">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((report) => (
            <TableRow key={report.id} className="bg-table-row hover:bg-muted/30 border-b border-border/50">
              <TableCell className="text-xs text-text-secondary px-2 py-1 h-8">{report.id}</TableCell>
              <TableCell className="text-xs text-text-secondary px-2 py-1 h-8">{report.date}</TableCell>
              <TableCell className="text-xs text-text-secondary px-2 py-1 h-8">{report.department}</TableCell>
              <TableCell className="text-xs text-text-secondary px-2 py-1 h-8">{report.category}</TableCell>
              <TableCell className="text-xs text-text-secondary px-2 py-1 h-8">{report.technician}</TableCell>
              <TableCell className="text-xs text-text-secondary px-2 py-1 h-8">{report.status}</TableCell>
              <TableCell className="px-2 py-1 h-8">
                <div className="flex gap-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs px-2 py-0 h-5"
                    onClick={() => onEdit(report.id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs px-2 py-0 h-5"
                    onClick={() => onView(report.id)}
                  >
                    View
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;