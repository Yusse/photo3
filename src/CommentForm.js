//CommentForm.js
import React, { Component } from 'react';
import style from './style';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Send from 'material-ui-icons/Send';
import Card from "material-ui/Card";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 100,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  card: {
    marginTop: theme.spacing.unit * 1,
    minWidth: 100
  }
});

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.author} said "${this.state.text}"`)
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  }
  render() {
    const { classes } = this.props;
    
    return (
      <Card className={classes.card}>
        <TextField
          label="Nome"
          placeholder="Digite o seu nome"
          className={classes.textField}
          value={this.state.author}
          onChange={this.handleAuthorChange}
          margin="normal"
        />

        <TextField
          label="Texto"
          placeholder="Digite o texto"
          className={classes.textField}
          value={this.state.text}
          onChange={this.handleTextChange}
          margin="normal"
        />
        <Button onClick={this.handleSubmit} className={classes.button} raised color="primary">
          Enviar
          <Send className={classes.rightIcon} />
        </Button>        
      </Card>
    )
  }
}

CommentForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentForm);