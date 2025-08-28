import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps {
  headers: string[];
  data: any[][];
  showActions?: boolean;
}

const DataTable = ({ headers, data, showActions = false }: DataTableProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-table-header">
            {headers.map((header, index) => (
              <TableHead key={index} className="text-xs font-semibold text-foreground px-3 py-2">
                {header}
              </TableHead>
            ))}
            {showActions && <TableHead className="text-xs font-semibold text-foreground px-3 py-2">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="bg-table-row hover:bg-muted/50">
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-xs text-text-secondary px-3 py-2">
                  {cell}
                </TableCell>
              ))}
              {showActions && (
                <TableCell className="px-3 py-2">
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs px-2 py-1">
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