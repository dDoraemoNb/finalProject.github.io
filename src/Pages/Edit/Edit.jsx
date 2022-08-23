import Editprofile from "../../Components/Editprofile/Editprofile";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import "./Edit.css"

const Edit = (props) => {
   
    return (
        <div className='main-web'>
            <div className="form">
                <div>
                    <Navbar />
                </div>

                <Editprofile />
            </div>
        </div>
    )
}

export default Edit;