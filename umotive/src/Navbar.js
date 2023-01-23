import pf from "../src/profilepic.png" ;
import {useState,useRef} from 'react';
import user from "../src/user.png";
import edit from "../src/edit.png";
import exit from "../src/exit.png";

const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (  
        <div className="navbar">
            <h1>UMotive</h1>
            <div className = "links">
                <a href="/">Home</a>
                <a href="hotspots">Hot Spots</a>
                <a href="/promos">Promos</a>
                <a href="/messageboard">Message Board</a>
                <a href="/landing">Landing</a>
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <img alt="Profile" src={pf}/>
                </div>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                                    
                <DropdownItem link= {"/"} img = {user} text={"Profile"}/>
                <DropdownItem link = {"/messa"} img = {edit} text={"Edit"}/>
                <DropdownItem link = {"/"} img={exit} text={"Logout"}/>
                
                </ul>
            </div>
        </div>
    );
}

function DropdownItem(props){
    return(
        <li className="dropdownItem">
            <img src={props.img}></img>
            <a href={props.link}> {props.text}</a>
        </li>
    )
}
 
export default Navbar;