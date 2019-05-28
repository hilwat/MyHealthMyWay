import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import menu from '../images/MyHealthMyWay Menu - White.svg';

var styles = {
    bmBurgerButton: {
        marginTop: '10px'
    }
}

function MenuComponent() {
    return (
        <Menu customBurgerIcon={ <img src={menu} /> } right styles={ styles }>
            <a id="home" href="/">Home</a>
            <a id="resources" href="/resources">Resources</a>
        </Menu>
    )
}

export default MenuComponent;