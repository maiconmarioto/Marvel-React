import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchComic } from '../actions/MarvelComics';

class ComicsDetail extends Component {
  componentWillMount() {
    this.props.fetchComic(this.props.params.id);
  }

  render() {
    if (!this.props.comic) {
      return (
         <div className="loader"></div>
      );
    }

  const comic = this.props.comic.data.results[0];

  const stories = comic.stories.items.map((story) => {
    return story.name + ' | '
  });

  const characters = comic.characters.items.map((char) => {
    const url = char.resourceURI.split("/");
    const charId = url[url.length -1];
    return <Link key={charId} to={"/character/" + charId} > {char.name + ' | '} </Link>
  });

  let creators = null;
  if (comic.creators.items.length > 0) {
      creators = comic.creators.items.map((creator) => {
        return creator.name + ' | '
      });
  }

  const imgSource = (comic.images[0]) ? `${comic.images[0].path}/portrait_uncanny.jpg` : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg';


    return (
      <div>
        <div className="row">
          <div className="row">
            <div className="card">
              <div id="cover" className="card-image">
                <img src={imgSource} alt={`${comic.title} thumbnail`} />
              </div>
              <hr/>
              <div className="card-content">
                <h3>{comic.title}</h3>
                <p> <strong>Created by:</strong> { creators ? creators : '-'}</p>
                <p> <strong>Description: </strong> {comic.description}</p>
                <p> <strong>EAN: </strong> {comic.ean}</p>
                <p> <strong>ISBN: </strong> {comic.isbn}</p>
                <p> <strong>Character(s): </strong> {characters}</p>
                <p> <strong>Series: </strong> {comic.series.name} </p>
                <p> <strong>Stories: </strong> {stories} </p>
                <p> <strong>Format: </strong> {comic.format} </p>
              </div>
              <div className="card-action">
                <Link to={"/comics"}>
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {comic: state.comics.comic };
}
export default connect(mapStateToProps, {fetchComic})(ComicsDetail);
