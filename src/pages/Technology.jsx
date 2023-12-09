// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import db from "../data.json";

import img1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img2 from "../assets/technology/image-spaceport-portrait.jpg";
import img3 from "../assets/technology/image-space-capsule-portrait.jpg";


function Technology() {

    let images = [img1, img2, img3];

    useEffect(() => {
        let linkItem = document.querySelector("#tech");
        linkItem.classList.add("active");
        linkItem.classList.remove("hover_effect");

        let tItem = document.querySelector(`#tech-${tech.id}`);
        tItem.classList.add("t-dot-active");
        tItem.classList.remove("tech-hover");

        let linkItem2 = document.querySelector("#tech2");
        linkItem2.classList.add("active");
        linkItem2.classList.remove("hover_effect");

        return () => {
            linkItem.classList.remove("active");
            linkItem.classList.add("hover_effect");

            tItem.classList.remove("t-dot-active");
            tItem.classList.add("tech-hover");

            linkItem2.classList.remove("active");
            linkItem2.classList.add("hover_effect");
        };
    });

    const [tech, setTech] = useState({
        name: db.technology[0].name,
        image: db.technology[0].images.portrait,
        description: db.technology[0].description,
        id: db.technology[0].id,
    });

    const handleClick = (item) => {
        setTech({
            name: item.name,
            image: item.images.portrait,
            description: item.description,
            id: item.id,
        });
    };
    return (
        <main className="tech">
            <div className="tech-box">
                <h3>
                    <span>03</span> Space launch 101
                </h3>
                <div className="tech-grid">
                    <div className="tech-data">

                        <ul className="tech-dots">
                            {db.technology.map((item, index) => {
                                return (
                                    <li
                                        className="t-dot tech-hover"
                                        key={index}
                                        id={`tech-${index}`}
                                        onClick={() => handleClick(item)}
                                    >{index}</li>
                                );
                            })}
                        </ul>

                        <div className="tech-content">
                            <h3>THE TERMINOLOGY...</h3>
                            <h2>{tech.name}</h2>
                            <p>{tech.description}</p>
                        </div>
                    
                    </div>

                    <div className="tech-pic">
                        {/* <img src={`../src/${tech.image}`} alt="tech-pic" /> */}
                        <img
                            className={tech.id === 0 ? "" : "hidden"}
                            src={tech.id === 0 ? images[0] : null}
                            alt="tech-pic"
                        />
                        <img
                            style={tech.id === 1 ? null : { display: "none" }}
                            src={tech.id === 1 ? images[1] : null}
                            alt="tech-pic"
                        />
                        <img
                            style={tech.id === 2 ? null : { display: "none" }}
                            src={tech.id === 2 ? images[2] : null}
                            alt="tech-pic"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Technology;
