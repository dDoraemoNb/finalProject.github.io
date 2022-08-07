import AddActivities from "../../Components/AddActivities/AddActivities";
import Navbar from "../../Components/Navbar/Navbar";
import './Add.css'
import React from "react";

const Add = () => {
    return (
        <div className='main-web'>
            <div className="add">
                <div>
                    <Navbar />
                </div>
                <AddActivities />
            </div>
        </div>
    )
}
export default Add