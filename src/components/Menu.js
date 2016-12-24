import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class MainMenu extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

 state = { activeItem: 'home' }
 handleItemClick = (e, { name }) => {
    return this.setState({ activeItem: name });
  }

  // pushTo = (name) => {
  //   let route = '';
  //   name === 'home' ? route = '/' : route = '/' + name
  //   this.context.router.push(route);
  // }

 render() {
   const { activeItem } = this.state;

   return (
     <div>
       <Menu inverted>
         <Menu.Item as={ Link } to="/"  name='home' active={ activeItem === 'home' } onClick={this.handleItemClick}>
            Home
         </Menu.Item>
         <Menu.Item as={ Link } to="/characters" name='characters' active={activeItem === 'characters'} onClick={this.handleItemClick} >
           Characters
         </Menu.Item>
         <Menu.Item as={ Link } to="/comics" name='comics' active={activeItem === 'comics'} onClick={this.handleItemClick} >
           Comics
         </Menu.Item>
       </Menu>
    </div>
   )
 }
};

export default MainMenu;
