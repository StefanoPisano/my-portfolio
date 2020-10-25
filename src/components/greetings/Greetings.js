import {
    Component
} from 'react';

import './greetings.css';
import logo from './001.png'; // with import

export default class Greetings extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col greetingsCol">
                        <div className="greetings">Hello folks! I'm {this.props.name}</div>
                    <div className="greetingsDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dui vitae tincidunt egestas. Nulla faucibus, mi ac consectetur porta, massa augue volutpat nisi, facilisis tristique leo enim nec diam. Pellentesque mattis luctus sagittis. Nam luctus magna nec quam ultrices tincidunt. Nam vulputate fringilla diam vel venenatis. Nulla in lorem. 
                    <br/><button type="button" class="btn btn-primary btn-lg contactButton">Contact me</button>
                    </div>
                </div>
                <div className="col greetingsImage">
                    <img src={logo}/>
                </div>
            </div>
        </div>
        )
    }
}