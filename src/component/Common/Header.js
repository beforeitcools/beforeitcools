import {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import DownLoadModal from "../Modal/DownLoadModal";

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
      const $header = document.querySelector("header");
  
      const handleScroll = () => {
        const offset = window.scrollY;
        
        if ($header) {
          if (offset > $header.clientHeight) {
            $header.classList.add("active");
          } else {
            $header.classList.remove("active");
          }
        }
      };
  
      
      window.addEventListener("scroll", handleScroll);
  
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    
    
    return (
      <> 
        <header> 
          <div className="inner">
            <h1 className="logo">
                <Link to="/"><img src="/images/logo.png" alt="locat logo"/></Link>
            </h1>
            <button onClick={openModal}>앱 다운로드</button>
            <DownLoadModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
          </div>
        </header>
      </>
    );
}

export default Header;