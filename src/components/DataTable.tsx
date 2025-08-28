import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps {
  headers: string[];
  data: any[][];
  showActions?: boolean;
}

const DataTable = ({ headers, data, showActions = false }: DataTableProps) => {
  const handleEdit = (rowIndex: number) => {
    console.log(`Editing row ${rowIndex}:`, data[rowIndex]);
  };

  const handleView = (rowIndex: number) => {
    console.log(`Viewing row ${rowIndex}:`, data[rowIndex]);
  };

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
            {showActions && <TableHead className="text-xs font-semibold text-foreground px-2 py-1 h-8">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="bg-table-row hover:bg-muted/30 border-b border-border/50">
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-xs text-text-secondary px-2 py-1 h-8">
                  {cell}
                </TableCell>
              ))}
              {showActions && (
                <TableCell className="px-2 py-1 h-8">
                  <div className="flex gap-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs px-2 py-0 h-5"
                      onClick={() => handleEdit(rowIndex)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs px-2 py-0 h-5"
                      onClick={() => handleView(rowIndex)}
                    >
                      View
                    </Button>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;