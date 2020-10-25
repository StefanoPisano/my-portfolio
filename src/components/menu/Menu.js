import {Component} from 'react';
import './menu.css';

export default class Menu extends Component {
    render() {
        return (
        <div className="row">
            <div className="col-md-9">
                <span className="signature">Stefano Pi.</span>
            </div>
            <div className="col menuLink">SKILLS</div>
            <div className="col menuLink">EDUCATION</div>
            <div className="col menuLink">EXPERIENCE</div>
            <div className="col menuLink" style={{marginRight: "3%"}}>CONTACT</div>
        </div>
        )
    }
}