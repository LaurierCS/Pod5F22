import phils from "../src/images/phils.png" ;
import drink from "../src/images/drink.png";
import pub from "../src/images/pub.png";
import revive from "../src/images/revive.png";
import kentucky from "../src/images/kentucky.png";
import allure from "../src/images/allure.png";
import ethels from "../src/images/ethels.png";



const Home = () => {
    return ( 
        <div className="home">
            <div className="hotspot">
                <a href="/promos"><img height="100%" width="100%" alt="Hot Spot" src={phils}/></a>
            </div>
            <div className="promos">
                <Spots link={"/promos"} linkimg = {drink}/>
                <Spots link={"/promos"} linkimg = {pub}/>
                <Spots link={"/promos"} linkimg = {revive}/>
                <Spots link={"/promos"} linkimg = {kentucky}/>
                <Spots link={"/promos"} linkimg = {allure}/>
                <Spots link={"/promos"} linkimg = {ethels}/>
            </div>
        </div> 

    );
}
 
function Spots(props){
    return(
        <div className="promos-items">
            <a href={props.link}><img height="100%" width="100%" src={props.linkimg}/> </a>
        </div>
    )
}
export default Home;