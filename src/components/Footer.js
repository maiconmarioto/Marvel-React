import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class Footer extends Component {

 render() {
   return (
     <div>
       <br />
       <br />
       <Menu inverted fixed="bottom" size="mini">
         <Menu.Item link position="right">
            <Link to="http://marvel.com">Data provided by Marvel. © 2016 MARVEL</Link>
         </Menu.Item>
       </Menu>
    </div>
   )
 }
};

export default Footer;
