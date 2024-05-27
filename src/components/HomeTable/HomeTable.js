

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import { fetchCoin } from '../../store/actions/coin-action';
import { useDispatch } from 'react-redux';
import './HomeTable.css';
import { useSelector } from "react-redux"
import { useState } from 'react';





const columns = [
  { id: 'logo', label: '', },
  { id: 'name', label: 'Name', minWidth: 150, align: 'left' },
  {
    id: 'symbol',
    label: 'Symbol',
    minWidth: 130,
    align: 'left',
  },
  {
    id: 'price',
    label: 'Price $',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'market-cap',
    label: 'Market-Cap $',
    minWidth: 150,
    align: 'left',
  },
];


export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const coins = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoin())
  }, [dispatch])




  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 490 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  id='table-head'
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coins
              .map((coin) => {
                return (
                  <TableRow  role="checkbox" tabIndex={-1} key={coin.id} id='table-body'>
                    <TableCell >
                      <img src={coin.image} alt='coin-img' className='img-table' />
                    </TableCell>
                    <TableCell id='coin-name'>{coin.name}</TableCell>
                    <TableCell id='coin-symbol'>{coin.symbol}</TableCell>
                    <TableCell id='coin-price'>{coin.price}</TableCell>
                    <TableCell id='coin-mc'>{coin.market_cap}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div id='table-pagination'>

        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Paper>
  );
}

