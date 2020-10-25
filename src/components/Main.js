import { Component } from "react";
import Greetings from './greetings/Greetings';
import Menu from './menu/Menu';

export default class Main extends Component {

    render() {
      return (
        <div>
          <Menu></Menu>
          <Greetings name="Stefano"/>
       </div>
      );
    }
  }