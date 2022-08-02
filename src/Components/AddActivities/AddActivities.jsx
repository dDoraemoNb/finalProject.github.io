import React from "react";
import './AddActivities.css';

function AddActivities(props) {
    return (
        <div className="AddActivities">
            <div className="AddActivitiesForm">
                <form>
                    <input name="Title" type="text" placeholder="Title" />
                    <input name="Activities" type="text" placeholder="Activities" />
                    <input name="username" type="num" placeholder="00:00" />

                    <br />
                    <div className="description">

                        <textarea placeholder="Description..."name="description" id="" cols="100" rows="20"></textarea>
                        {/* <input name="Description" type="text" placeholder="Description..." /> */}
                    
                    </div>
                </form>
            </div >

            <br />
            <div className="button">
            <button className="buttonPost">POST</button>
</div>
        </div >
    )
}

export default AddActivities;