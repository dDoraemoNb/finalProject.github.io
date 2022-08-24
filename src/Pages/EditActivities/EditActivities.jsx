import Editactivities from "../../Components/Editactivities/Editactivities";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import "./EditActivities.css"

const Editactivity = (props) => {
    return (
        <div className='main-web'>
            <div className="form">
                <div>
                    <Navbar />
                </div>

                <Editactivities />
            </div>
        </div>
    )
}

export default Editactivity;