import React from 'react';
import { Link } from 'react-router';
import { Grid, Header } from 'semantic-ui-react'
import '../styles/cardStyle.css';


const ComicCard = (props) => {

  const title = props.title.length >= 30 ? props.title.substring(0,30) + '...' : props.title;
  const imgSource = (props.img) ? props.img : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg';
  return (
    <Grid.Column mobile={16} tablet={5} computer={3}>
      <div className="card">
        <div className="card-image">
          <img id="cover" src={imgSource} alt={`${props.title} thumbnail`} className="img-responsive center-block" />
        </div>

        <div className="card-content" style={{height: "150px"}}>
          <legend></legend>
          <Header as='h3' style={{marginTop: -10}}>{title}</Header>
          <strong>{props.description ? props.description.substring(0,60) + "..." : ''}</strong>
          {(props.comicsCount) ? <p><strong>Comics count:       </strong> {props.comicsCount} </p> : ''}
          {(props.eventsCount) ? <p><strong>Events count:       </strong> {props.eventsCount} </p> : '' }
          {(props.seriesCount) ? <p><strong>Series count:       </strong> {props.seriesCount} </p> : '' }
          {(props.storiesAvailable) ? <p><strong>Stories count: </strong> {props.storiesAvailable} </p> : '' }
        </div>

        <div className="card-action">
          <Link to={props.linkTo + "/" + props.id}>
             See More
          </Link>
        </div>
      </div>
    </Grid.Column>
  );
}

export default ComicCard;
