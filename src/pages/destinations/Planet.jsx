import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router";
import db from "../../data.json";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

function Planet() {

    const [data, setData] = useState([]);

    let { postSlug } = useParams();

    let images = [moon, mars, europa, titan];


    useEffect(() => {
        // Fetch post using the postSlug
        let planetItem = document.querySelector(`#${postSlug}`);
        planetItem.classList.add("active");
        planetItem.classList.remove("hover_effect");
        getData(postSlug);
        return () => {
            planetItem.classList.remove("active");
            planetItem.classList.add("hover_effect");
        };
    }, [postSlug]);

    const getData = (slug) => {
        for (let i = 0; i < db.destinations.length; i++) {
            if (db.destinations[i].name === slug) {
                setData(db.destinations[i]);
            }
        }
    };

    useEffect(() => {
        let linkItem = document.querySelector("#destination");
        linkItem.classList.add("active");
        linkItem.classList.remove("hover_effect");

        let linkItem2 = document.querySelector("#destination2");
        linkItem2.classList.add("active");
        linkItem2.classList.remove("hover_effect");

        return () => {
            linkItem.classList.remove("active");
            linkItem.classList.add("hover_effect");

            linkItem2.classList.remove("active");
            linkItem2.classList.add("hover_effect");
        };
    });

    return (
        <main className="destination">
            <div className="content">
                <h3>
                    <span>01</span> Pick your destination
                </h3>
                <div className="grid">
                    <div className="one rotate">

                        {/* <img
                            src={`../../src/${data.images.png}`}
                            alt="planet"
                        /> */}

                        <img
                            className={data.name === "Moon" ? "" : "hidden"}
                            src={data.name === "Moon" ? images[0] : null}
                            alt="planet"
                        />
                        <img
                            style={
                                data.name === "Mars"
                                    ? null
                                    : { display: "none" }
                            }
                            src={data.name === "Mars" ? images[1] : null}
                            alt="planet"
                        />
                        <img
                            style={
                                data.name === "Europa"
                                    ? null
                                    : { display: "none" }
                            }
                            src={data.name === "Europa" ? images[2] : null}
                            alt="planet"
                        />
                        <img
                            style={
                                data.name === "Titan"
                                    ? null
                                    : { display: "none" }
                            }
                            src={data.name === "Titan" ? images[3] : null}
                            alt="planet"
                        />
                    </div>

                    <div className="two">
                        <ul className="planet-list">
                            {db.destinations.map((item, index) => {
                                return (
                                    <li
                                        className="planet-item hover_effect"
                                        key={index}
                                        id={`${item.name}`}
                                    >
                                        <Link to={`/fm-space-tourism-website/destination/${item.name}`}>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="d-content">
                            {/* <p>Slug is: {postSlug}</p> */}
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <hr />
                            <div className="distance-travel">
                                <div>
                                    <p className="data-label">AVG. DISTANCE</p>
                                    <p className="data">{data.distance}</p>
                                </div>
                                <div>
                                    <p className="data-label">
                                        EST. TRAVEL TIME
                                    </p>
                                    <p className="data">{data.travel}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Planet;
