import React from 'react';
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import "./HeadBar.css"

class HeadBar extends React.Component{
    render(){
        return(
            <TableRow className="HeadBar">
                <TableCell>Ranking</TableCell>
                <TableCell>Poster</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Summary</TableCell>
            </TableRow>
        )
    }
}


export default HeadBar