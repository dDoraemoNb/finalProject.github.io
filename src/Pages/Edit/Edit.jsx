import Editprofile from "../../Components/Editprofile/Editprofile";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import "./Edit.css"

const Edit = (props) => {
    console.log(props.profile)
    return (
        <div className='main-web'>
            <div className="form">
                <div>
                    <Navbar />
                </div>

                <Editprofile profile={props.profile}/>
            </div>
        </div>
    )
}

export default Edit;