import React, {Component} from "react";
import { stack as Menu } from "react-burger-menu";
import Tour from "../tourGallary/Tour";
import Popup from "reactjs-popup";
import {Link} from "react-scroll";
import './Menu.scss';

export default class MenuBurger extends Component{
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }
    render(){

        return (
            // Pass on our props
            <div className={"Main__menu"}>
            <Menu right
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
                <Popup modal trigger={ <a className="menu-item" >RESTAURANT TOUR</a>} position="right center">
                    <Tour />
                </Popup>

                <Link
                    activeClass="active"
                    to="Info"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="menu-item"
                    duration={500}
                    onClick={() => this.closeMenu()}
                >
                    INFO
                </Link>

            </Menu>
            </div>
        );
    };
}