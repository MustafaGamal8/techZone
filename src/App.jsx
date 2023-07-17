import { useEffect, useState } from "react"
import { useDispatch} from "react-redux"
import { fetchData } from "./store/fetchSlice"
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import arTranslation from './locales/ar.json';
import enTranslation from './locales/en.json';
import Loader from './components/loader/Loader';

const App = () => {
  const dispatch = useDispatch()
  const [isDataFetched,setIsDataFetched] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setIsDataFetched(sessionStorage.getItem("isDataFetched"))
    }, 2000);
    if (!isDataFetched) {
    console.log("done")
    dispatch(fetchData())
    }else{
      console.log("already fetched")
    }
  },[])


  const defultLang = localStorage.getItem("lang") ? localStorage.getItem("lang") : 'en' 
  



  i18n.use(initReactI18next).init({
    resources:{
      ar: { translation: arTranslation },
      en:{ translation : enTranslation }
    },
    lng: defultLang ,  // Set default language to Arabic
    fallbackLng: 'en', // Fallback language if translation is missing for a key
    interpolation: {
      escapeValue: false, // React already sanitizes the output, so no need to escape
    },
  })
      
  if (!isDataFetched) {
    return(
      <>
      <Loader />
      </>

    )
    
  }else{

   return (    
    <>
    <Routes>
      <Route  path="/"  element={<Home />}/>
    </Routes>
    </>
    
    );
  }
  




}
 
export  default App;