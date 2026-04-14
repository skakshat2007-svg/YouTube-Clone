import YoutubeIcon from "../images/YoutubeIcon.svg";
import DarkSearch from "../images/DarkSearchIcon.svg";
import WhiteSearch from '../images/WhiteSearchIcon.svg'
import DarkBell from "../images/DarkBellicon.svg";
import WhiteBell from "../images/WhiteBellicon.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(){
    const [searchIcon,setSeachIcon] = useState(DarkSearch)
    const [bellIcon,setBellIcon] = useState(DarkBell)
    const [theme,setTheme] = useState('light')
    const toggleTheme = ()=>{
        if(theme==='light'){
            document.body.classList.add('dark')
            setTheme('dark')
            setSeachIcon(WhiteSearch)
            setBellIcon(WhiteBell)
        }
        else{
            setTheme('light')
            document.body.classList.remove('dark')
            setSeachIcon(DarkSearch)
            setBellIcon(DarkBell)
        }
    }
    return (
        <nav>
            <div >
                <Link to="/" className="logo">
                    <img id="youtube-icon" src={YoutubeIcon} alt="YouTube" />
                    <h2>YouTube</h2>
                </Link>
            </div>
            <div id="search-container">
                <span style={{display: "flex", justifyContent: "center", alignItems:"center"}}><img className="utility-icons" src={searchIcon} alt="search" /></span>
                <input id="search-box" type="search" placeholder="Search" />
            </div>
            <div>
                <img src={bellIcon} className="utility-icons" alt="bell" />
                <button onClick={toggleTheme} id="theme-button">{theme==='light'?'Dark':'Light'}</button>
                <img id="user-profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="user" />
            </div>
        </nav>
    )
}