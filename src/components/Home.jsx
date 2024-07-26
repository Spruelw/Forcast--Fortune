import React from "react";

export default function Home(){
    return(
        <div className="features">
            <div className="features-forcast">
                <img src="../../images/sun.png" alt="sun" />
                <p>7 day weather forecast anywhere in the US.</p>
            </div>
            <div className="features-fortune">
                <img src="../../images/crystalBall.png" alt="crystal ball" />
                <p>View your fortune of the day under the 7 day forecast.</p>
            </div>
        </div>
    )
}