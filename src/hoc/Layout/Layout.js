import React, { Component } from "react";
// CSS styles
import classes from "./Layout.module.css";
// Components
import MenuToggle from "components/Navigation/MenuToggle/MenuToggle";
import Drawer from "components/Navigation/Drawer/Drawer";

class Layout extends Component {
    state = {
        menu: false,
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu,
        });
    };

    menuCloseHandler = () => {
        this.setState({
            menu: false,
        });
    };

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                    className={classes.MenuToggle}
                />
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;
