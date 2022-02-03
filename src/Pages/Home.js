import React, {useEffect, useState} from 'react';
import Footer from '../Components/Footer';
import Heading from '../Components/Heading';
import Input from '../Components/Input';
import WebsiteList from '../Components/WebsiteList';
import URLServices from '../services/urlService';


const Home = () => {

  const [urlsList, setUrlsList] = useState( URLServices.getFromLS() )

  const refreshList = () => {
    setUrlsList( URLServices.getFromLS() )
  }

  
  return( 
  <div >    
    <Input refreshList={refreshList}/> 
    <div>
      <Heading  />
      <WebsiteList refreshList={refreshList} websites={urlsList} />
      <Footer />
      </div>   

  </div>
  );
};

export default Home;
