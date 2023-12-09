import { useState } from "react";
import { useEffect } from "react";
import db from "../data.json";

function Crew() {
    useEffect(() => {
        let linkItem = document.querySelector("#crew");
        linkItem.classList.add("active");
        linkItem.classList.remove("hover_effect");
        
        let dotItem = document.querySelector(`#crew-${crew.id}`);
        dotItem.classList.add("dot-active");
        dotItem.classList.remove("dot-hover");

        
        let linkItem2 = document.querySelector("#crew2");
        linkItem2.classList.add("active");
        linkItem2.classList.remove("hover_effect");

        return () => {
            linkItem.classList.remove("active");
            linkItem.classList.add("hover_effect");

            dotItem.classList.remove("dot-active");
            dotItem.classList.add("dot-hover");

            linkItem2.classList.remove("active");
            linkItem2.classList.add("hover_effect");
        };
    });

    const [crew, setCrew] = useState({
        name: db.crew[0].name,
        image: db.crew[0].images.png,
        role: db.crew[0].role,
        bio: db.crew[0].bio,
        id: db.crew[0].id,
    });

    const handleClick = (item) => {
        setCrew({
            name: item.name,
            image: item.images.png,
            role: item.role,
            bio: item.bio,
            id: item.id,
        });
    };

    return (
        <main className="crew">
            <div className="content-c">
                <h3>
                    <span>02</span> Meet your crew
                </h3>
                <div className="crew-grid">
                    <div className="crew-data">
                        <div className="crew-content">
                            <h3>{crew.role}</h3>
                            <h2>{crew.name}</h2>
                            <p>{crew.bio}</p>
                        </div>

                        <ul className="crew-dots">
                            {db.crew.map((item) => {
                                return (
                                    <li
                                        className="dots dot-hover"
                                        key={item.id}
                                        id={`crew-${item.id}`}
                                        onClick={() => handleClick(item)}
                                    >
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="crew-pic">
                        <img src={`../src/${crew.image}`} alt="crew-member" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Crew;
