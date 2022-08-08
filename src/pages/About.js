import * as React from "react";
import img from "../images/kirua4.jpeg"
const About = () => {
    return (
        <div className='About'>
            <div className="row">
                <div className="col-4">
                    <img src={img} alt="kiru"></img>
                </div>
                <div className="col-8">
                    <h1>
                        Killua Zoldyck
                </h1>
                    <p>
                        (キルア゠ゾルディック, Kirua Zorudikku) is the third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until he runs away from home and becomes a Rookie Hunter. He is the best friend of Gon Freecss and is currently traveling with Alluka Zoldyck.He has served as the deuteragonist for the series, having said role in the Heavens Arena, Greed Island, and Chimera Ant arcs. He was the main protagonist of the 13th Hunter Chairman Election arc. He also was the tritagonist of the Hunter Exam arc and the Yorknew City arc.
                </p>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default About;