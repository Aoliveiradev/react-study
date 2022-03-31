import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ImListNumbered } from 'react-icons/im';
import { MdSchool } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import {useEffect, useState} from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        background: '#757575',
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 13,
        fontWeight: 'italic',
        paddingLeft: '25px',


    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: '10px',
    },
}));



export default function DegreeTable() {
    const [degrees, setDegrees] = useState([])

    useEffect(() => {
        fetch('/api/degrees')
            .then(response => response.json())
            .then(json => {
                setDegrees(json.degrees);
            });
    }, []);


    return (
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <ImListNumbered size={18} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <MdSchool size={20} className="App-logo" />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <FiEdit size={20} className="App-logo" />
                        </StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {degrees.map((row, index) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                #{index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center"><FiEdit size={20} className="App-logo"/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}