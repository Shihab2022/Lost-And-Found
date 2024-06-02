import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const CustomTable = (props: any) => {
  const { rows = [], tableColumn } = props;

  return (
    <TableContainer sx={{ height: "100%" }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {tableColumn.map((column: any) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                sx={{ fontSize: "1rem", color: "black", fontWeight: 700 }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any, index: any) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {tableColumn.map((column: any, i: any) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function LostItemTable(props: any) {
  const { rows, columns } = props;
  return (
    <>
      <CustomTable rows={rows || []} tableColumn={columns} />
    </>
  );
}
