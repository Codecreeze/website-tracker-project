import React from 'react';
import SingleWebsite from './SingleWebsite';

const  WebsiteList = props =>  {
    return (
        <div>
            {
                props.websites.map((website, idx )=> <SingleWebsite refresh={props.refreshList} website={website} idx={idx} />)
            }
        </div>
    );
}

export default WebsiteList;

