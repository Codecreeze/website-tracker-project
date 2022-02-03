import React, {useEffect, useState} from 'react';
import { Grid, Input, Button, Header, Divider, Feed } from 'semantic-ui-react';
import moment from 'moment'
import URLServices from '../services/urlService';

const SingleWebsite = ({website, idx, refresh}) => {
    const [fetching, setFetching] = useState(false)
   
    const fetchIt = async () => {
            setFetching(true)
            await URLServices.getStatus(website.url)
            setFetching(false)
            refresh()
    }
    useEffect(() => {
        setTimeout( async () => {
            fetchIt()
        }, 1000 * 300)
    }, [fetching])

    return (
    
    <div key={"item-"+idx}>
    <Grid padded>
<Grid.Row>
    <Grid.Column width={10} >
        <Feed>
            <Feed.Event>
                <Feed.Content>
                    <Feed.Summary
                        content={website.title}
                        style={{cursor: 'pointer'}}
                        onClick={fetchIt}
                        date={moment(website.lastChecked).fromNow()}
                    />
                </Feed.Content>
            </Feed.Event>
        </Feed>
    </Grid.Column>
    <Grid.Column width={6}>
        {website.status == "ACTIVE" && !fetching ?  <Button size='large' color='green'>LIVE</Button> : null}
        {website.status == "ERROR" && !fetching ?  <Button size='large' color='red'>ERROR</Button> : null}
        {fetching ?  <Button size='large' color='yellow'>PENDING</Button> : null}
    </Grid.Column>
</Grid.Row>
</Grid>
<Divider fitted />
    </div>
    
    )

}

export default SingleWebsite