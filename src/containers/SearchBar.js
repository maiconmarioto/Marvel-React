import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/MarvelComics';
import { Grid, Input, Form } from 'semantic-ui-react'
import '../styles/loader.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchCharacters(this.state.term);
  }

  render() {

    return (
      <Grid divided>
        <Grid.Row centered>
          <Grid.Column mobile={14} tablet={14} computer={14}>
            <Form onSubmit={this.onFormSubmit}>
              <Input name="searchTerm"
                style={{marginTop: "10px", marginBottom: "-15px"}}
                fluid
                icon="search"
                placeholder='Search characters by name...'
                onChange={this.onInputChange}
                value={this.state.term}
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
}



function mapStateToProps(state) {
  return { characters: state.characters.all }
}
export default connect(mapStateToProps, {fetchCharacters})(SearchBar);
