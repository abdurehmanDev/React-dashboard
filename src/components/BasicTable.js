import * as React from 'react';
import './Styles/table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from 'react-bootstrap/Container';
import TableData from '../data-folder/TableData';


export function BasicTable() {
  return (
    <Container className='contains'>

      <header>
        <h4 className='row-header spacing table-head'>New Appointments</h4>
      </header>
      <main className='main-table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className='row-bg'>
                <TableCell className='th-1' style={{padding: '12px'}}>patient</TableCell>
                <TableCell style={{padding: '12px'}}>doctor</TableCell>
                <TableCell style={{padding: '12px'}}>date & time</TableCell>
                <TableCell style={{padding: '12px'}}>disease</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData.map((row) => (
                <TableRow
                  key={row.pName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell style={{textAlign: 'left',   borderBottom: 'none' }}>
                    <span className= 'pName-icon'  style={{ backgroundColor: row.bgColor}}>{row.pName[0]}</span>
                    {row.pName}
                  </TableCell>
                  <TableCell style={{textAlign: 'right', borderBottom: 'none'}}>{row.doctor}</TableCell>
                  <TableCell style={{textAlign: 'right', borderBottom: 'none'}}>{row.dateNtime}</TableCell>
                  <TableCell style={{textAlign: 'right', borderBottom: 'none'}}><span className='disease' style={{color: row.bgColor , backgroundColor: row.diseaseBgColor}}>{row.disease}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </Container>
  );
}
