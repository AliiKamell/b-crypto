import React, { useEffect } from 'react';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import homeStore from '../../views/Home/HomeStore';

const columns = [
    { id: 'image', label: 'Logo', minWidth: 170, align: 'left', format: (value) => <img src={value} alt="Logo" style={{ width: 50, height: 50 }} /> },
    { id: 'name', label: 'Name', minWidth: 100, align: 'left' },
    { id: 'symbol', label: 'Symbol', minWidth: 170, align: 'left' },
    { id: 'priceBTC', label: 'Price $', minWidth: 170, align: 'right' },
    { id: 'marketCap', label: 'Market Cap', minWidth: 170, align: 'right' },
];

const StickyHeadTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { coins, fetchCoins } = homeStore();

    useEffect(() => {
        fetchCoins(); // Fetch coins when the component mounts
    }, []); // Empty dependency array ensures it runs only once when mounted

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }} >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" className='trending-table'>
                    <TableHead className='table-head'>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.center} style={{ minWidth: column.minWidth }} className='column-lable'>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((coin) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={coin.id}>
                                        {columns.map((column) => {
                                            const value = coin[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.center}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 15]}
                component="div"
                count={coins.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default StickyHeadTable;
