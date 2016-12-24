import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { Grid } from 'semantic-ui-react'
import { fetchCharacters } from '../actions/MarvelComics';
import '../styles/loader.css';

class CharactersIndex extends Component {
  componentWillMount() {
    this.props.fetchCharacters();
  }


  renderCards() {
    return this.props.characters.data.results.map((char) => {
      const {id, name, thumbnail, comics, events, series, stories } = char;
      return (
          <Card
            key={id}
            id={id}
            img={`${thumbnail.path}/portrait_fantastic.jpg`}
            title={name}
            comicsCount={comics.available}
            eventsCount={events.available}
            seriesCount={series.available}
            storiesAvailable={stories.available}
            linkTo="character"
          />
      );
    });
  }

  render() {
    if (!this.props.characters.data) {
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
  return { characters: state.characters.all };
}
export default connect(mapStateToProps, {fetchCharacters})(CharactersIndex);
