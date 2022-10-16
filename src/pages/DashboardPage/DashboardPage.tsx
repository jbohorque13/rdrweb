import React from 'react';
import {Column, useTable} from 'react-table';
import {
  StyledWrapper,
  StyledTable,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableBodyRow,
  StyledTableBodyCell
} from './style';

interface ExampleObject {
    col1: string
    col2: string
}

const DashboardPage: React.FC = () => {
    const data = React.useMemo(
     () => [
       {
         col1: 'Hello',
         col2: 'World',
       },
       {
         col1: 'react-table',
         col2: 'rocks',
       },
       {
         col1: 'whatever',
         col2: 'you want',
       },
         {
         col1: 'whatever',
         col2: 'you want',
       },
     ],
     []
   )

   const columns: Column<ExampleObject>[] = React.useMemo(
     () => [
       {
         Header: 'Column 1',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Column 2',
         accessor: 'col2',
       },
     ],
     []
   )
   // @ts-ignore
    const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable<ExampleObject>({ columns, data })

   return (
       <StyledWrapper>
         <StyledTable {...getTableProps()}>
           <StyledTableHead>
             {headerGroups.map(headerGroup => (
               <StyledTableHeadRow {...headerGroup.getHeaderGroupProps()}>
                 {headerGroup.headers.map(column => (
                   <StyledTableHeadCell
                     {...column.getHeaderProps()}
                   >
                     {column.render('Header')}
                   </StyledTableHeadCell>
                 ))}
               </StyledTableHeadRow>
             ))}
           </StyledTableHead>
           <StyledTableBody {...getTableBodyProps()}>
             {rows.map(row => {
               prepareRow(row)
               return (
                 <StyledTableBodyRow {...row.getRowProps()}>
                   {row.cells.map(cell => {
                     return (
                       <StyledTableBodyCell
                        $withOverFlow={true}
                         {...cell.getCellProps()}
                       >
                         {cell.render('Cell')}
                       </StyledTableBodyCell>
                     )
                   })}
                 </StyledTableBodyRow>
               )
             })}
           </StyledTableBody>
         </StyledTable>
       </StyledWrapper>
   )
};

export default React.memo(DashboardPage);
