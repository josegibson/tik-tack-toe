import React from "react";

function Tile({ value, onClick }) {
    const getImageSource = () => {
        const src = value === "X" ? "/images/x-image.png" : "/images/o-image.png";
        console.log("Image source:", src); // Debugging line
        return src;
    };

    return (
        <button onClick={onClick} className="tile">
            {value === null ? null : <img src={getImageSource()} alt={value} className="tile-image" />}
        </button>
    );
}

export default Tile;