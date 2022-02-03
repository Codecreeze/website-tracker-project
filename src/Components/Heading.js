import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

function Heading() {
    return (
        <div>
            <Grid columns={1} padded>
                <Grid.Column width={10}>
                    <Header as='h4' color='blue'>
                        WEBSITES
                    </Header>
                </Grid.Column>
            </Grid>



        </div>


    );
}

export default Heading;
