import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

function Header() {

    return (
        <div>

            <Menu inverted>
                <Menu.Item
                    name="LIVE WEBSITE TRACKING"
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name="Currently Tracking 4 Websites"
                    />
                </Menu.Menu>

            </Menu>


        </div>
    );
}

export default Header;
