import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react'
import { browserHistory, Link } from 'react-router';
import { fetchCharacter } from '../actions/MarvelComics';
import '../styles/loader.css';

class CharacterDetail extends Component {
  componentWillMount() {
    this.props.fetchCharacter(this.props.params.charId);
  }

   onClickHandler() {
      browserHistory.goBack();
   }

  render() {
    if (!this.props.character) {
      return (
         <div className="loader"></div>
      );
    }

    const char = this.props.character.data.results[0];
    const imgSource = (char.thumbnail) ? `${char.thumbnail.path}/portrait_uncanny.jpg` : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg';

    let comics = null;
    if (char.comics['items'].length > 0) {
      comics = char.comics['items'].map((comic) => {
        const url = comic.resourceURI.split("/");
        const comicId = url[url.length -1];
        return <Link key={comicId} to={"/comic/" + comicId}  > { comic.name +' | '}  </Link>;
      });
    };

    let events = null;
    if (char.events['items'].length > 0) {
      events = char.events['items'].map((event) => {
        return event.name + ' | ';
      });
    };

    let series = null;
    if (char.series['items'].length > 0) {
      series = char.series['items'].map((serie) => {
        return serie.name + ' | ';
      });
    };

    let stories = null;
    if (char.stories['items'].length > 0) {
      stories = char.stories['items'].map((story) => {
        return story.name + ' | ';
      });
    };

    return (
      <Grid divided>
        <Grid.Row centered>
          <Grid.Column>
            <div className="card">
              <div className="card-image">
                <img id="cover" src={imgSource} alt={`${char.images} thumbnail`} className="img-responsive center-block" />
              </div>
              <hr/>
              <div className="card-content">
                <legend></legend>
                <Header as='h2' style={{marginTop: -10}}>{char.name}</Header>
                <p><strong>Description: </strong> {char.description} </p> <br />
                <p><strong>Comics: </strong> {comics} </p> <br />
                <p><strong>Events: </strong> {events} </p> <br />
                <p><strong>Series: </strong> {series} </p> <br />
                <p><strong>Stories: </strong> {stories} </p> <br />

              </div>

              <div className="card-action">
                <Link to="#" onClick={this.onClickHandler}>
                  Back
                </Link>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
}

function mapStateToProps(state) {
  return { character: state.characters.character };
}
export default connect(mapStateToProps, {fetchCharacter})(CharacterDetail);
