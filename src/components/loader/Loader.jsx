import "./loader.css"

const Loader = () => {
  return ( 

    <div className="w-full h-full absolute top-0 left-0 bg-white flex items-center justify-center">
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
   );
}
 
export default Loader;