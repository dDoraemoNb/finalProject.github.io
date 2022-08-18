import Editactivities from "../../Components/Editactivities/Editactivities";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import "./Editactivities.css"

const Edit = (props) => {
    return (
        <div className='main-web'>
            <div className="form">
                <div>
                    <Navbar />
                </div>

                <Editprofile profile2={props.profile1}/>
            </div>
        </div>
    )
}

export default EditActivity;