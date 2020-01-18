import React from 'react';
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"




class Movie extends React.Component{
    render(){
        return(
            
            <TableRow>
                <TableCell>{this.props.id+1}</TableCell>
                <TableCell><img src={this.props.poster} alt={this.props.title}></img></TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.year}</TableCell>
                <TableCell>{this.props.summary.slice(0,250)}...</TableCell>
            </TableRow>
            
           
            
        )
    }
}


export default Movie