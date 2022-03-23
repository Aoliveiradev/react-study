import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ImListNumbered } from 'react-icons/im';
import { BsPersonCircle } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';
import { MdClass } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { GiNotebook } from 'react-icons/gi';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        background: '#032FA8',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(summary, ID, name, degree, clazz, edit) {
    return { summary, ID, name, degree, clazz, edit };
}

const rows = [
    createData(1, 159, 'Nome do Aluno 1', 24, 4.0),
    createData(2, 237, 'Nome do Aluno 2', 37, 4.3),
    createData(3, 262, 'Nome do Aluno 3', 24, 6.0),
    createData(4, 305, 'Nome do Aluno 4', 67, 4.3),
    createData(5, 356, 'Nome do Aluno 5', 49, 3.9),
    createData(6, 159, 'Nome do Aluno 6', 24, 4.0),

];

export default function AccccessibleTable() {
    return (
        <TableContainer >
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <ImListNumbered size={18} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <BsPersonCircle size={20} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <GiNotebook size={20} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <MdSchool size={20} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <MdClass size={20} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <FiEdit size={20} className="App-logo" />
                        </StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.summary}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.ID}</StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.degree}</StyledTableCell>
                            <StyledTableCell align="center">{row.clazz}</StyledTableCell>
                            <StyledTableCell align="center"><FiEdit size={20} className="App-logo" /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}