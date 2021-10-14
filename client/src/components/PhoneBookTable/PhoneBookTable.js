import React from 'react';
// Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Hooks
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function PhoneBookTable() {

  const [ t ] = useTranslation('common');
  const phoneBook = useSelector( state => state.phoneBook );
  const phoneBookEntrys = phoneBook.phoneBook;

  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { phoneBookEntrys &&
            phoneBookEntrys.map ( (c, i) =>  (
              <TableRow
                key={ c.name }
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  { c.name }
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
