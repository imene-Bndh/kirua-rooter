import * as React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbarx = () => {
    // function dropdownMenu(){
    //     var x = document.getElementById("dropDownClick");
    //     if(x.className==="rel"){
    //         x.className+=" responsive";
    //         /*add the class of the nav element*/   
    //     }else{
    //         x.className="rel";
    //     }
        
    // }
    return (
        <div className="NavbarX">
            <nav>
                <ul class="rel" id="dropDownClick">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {/* <li class="dropDownIcon">
                        <a href="javascript:void(0);" onclick={dropdownMenu()}>&#9776;</a>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbarx;