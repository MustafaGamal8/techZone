import { useSelector } from "react-redux";
import NavBar from './../NavBar';
import { useState } from "react";

import i18n  from 'i18next';
import { Trans } from 'react-i18next';
const Home = () => {
  const  state =  useSelector(state =>  {return state.productsReducer})
  const [selectedLang, setSelectedLang] = useState('ar');
  
  const changeLanguage = ()=>{
    
    i18n.changeLanguage("ar")
    
  }
  

  return ( 
  <>
  {
        state.isLoading  === false ? 
        <>
        <NavBar />
        <div className="h-80 mt-2 w-full" style={{"background":"#c6ecff"}}>
          <button onClick={changeLanguage}><Trans>language</Trans> </button>
        </div>
        
        </>:
      <h1>loading</h1>
      }

    </>
    );
}
 
export default Home;