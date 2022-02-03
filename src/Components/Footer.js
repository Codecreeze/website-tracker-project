import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

function Footer() {
  return (
      <div>
          
          <Grid padded textAlign='justified'>
              <Grid.Column width={12} >
         <Header.Subheader as="h6">
         It lets users add a list of URLs in local storage. Along with the URL it stores the Title of the page
         returned when fetching the contents of the URL. The Application then fetches the contents of each
         URL and checks the response type. If the response is 200 OK, it marks the URL as LIVE. If the 
         response when getting the contents of the website throws an error, the application highlights
         the errored website in the list. The application does this every 5 minutes or ON DEMAND for a single 
         website when the URL is clicked by the user. On reload, the website checks the local storage for the 
         list of websites added and loads all of them again.
         </Header.Subheader>
         </Grid.Column>
         </Grid>
         
      </div>
  );
}

export default Footer;
