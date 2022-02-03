import React, {useRef, useState} from 'react';
import { Input, Grid, Button } from 'semantic-ui-react';
import URLServices from '../services/urlService';

const Text = (props) =>  {

    const [url, setUrl] = useState('')

    const addWebsite = () => {
        URLServices.addURL(url).then((resp) => {
            alert("Success!")
            props.refreshList()
        }).catch((e) => {
            alert(`Error! ${e}`)
        })
    }

    return (
        <div>

            <Grid columns={2} padded>
                <Grid.Column width={10}>
                    <Input value={url} onChange={(e) => setUrl(e.target.value)} fluid
                        placeholder='Enter your Website' />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button fluid
                        onClick={addWebsite}
                        content="SUBMIT" color='teal' />
                </Grid.Column>
            </Grid>


        </div>
    )

}

export default Text;
