import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../actions/MarvelComics';
import Card from '../components/Card';
import { Grid } from 'semantic-ui-react'
import '../styles/loader.css';

class ComicsIndex extends Component {
  componentWillMount() {
    this.props.fetchComics();
  }

  renderCards() {
    return this.props.comics.data.results.map((comic) => {
      return (
        <Card
          key={comic.id}
          id={comic.id}
          img={`${comic.thumbnail.path}/portrait_fantastic.jpg`}
          title={comic.title}
          description={comic.description}
          linkTo="comic"
        />
      );
    });
  }

  render() {
    if (!this.props.comics.data) {
      return (
        <div className="loader"></div>
      )
    }

    return (
      <Grid divided>
        <Grid.Row centered>
          { this.renderCards() }
        </Grid.Row>
      </Grid>
    );
  };
}

function mapStateToProps(state) {
  return { comics: state.comics.all };
}
export default connect(mapStateToProps, {fetchComics})(ComicsIndex);
