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
    
    <TableContainer component={Paper} sx={{ width: '98%' }}>
      <Table data-testid={'phone-book-table'}>
        <TableHead data-testid={'phone-book-table-head'} >
          <TableRow>
            <TableCell sx={{ width: '50%' }}> {t( 'phoneBookTable.name' )} </TableCell>
            <TableCell sx={{ width: '50%' }}> {t( 'phoneBookTable.phoneNumber' )}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid={'phone-book-table-body'}>
          { phoneBookEntrys &&
            phoneBookEntrys.map ( (c, i) =>  (
              
              <TableRow
                key={ i }
                sx={{ '&:last-child td, &:last-child': { border: 0 } }}
                role='phone-book-table-row'
              >
                <TableCell component="td" scope="row">
                  { c.name }
                </TableCell>
                <TableCell component="td" scope="row">
                  { c.phone }
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
