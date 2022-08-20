import React, { useState } from "react";
import './Editactivities.css';
import DatePicker from "react-datepicker";
function Editactivities(props) {
    const [startDate, setStartDate] = useState(new Date());
    // console.log(props.list.activityID)
    return (
        <div className="AddActivities">
            <div className="AddActivitiesForm">
                
                <form>
                    <div className="AddEdit" >
                        <div className="info" >
                            <input className="Title" name="Title" type="text" placeholder="Title" />
                            <div className="selectActivity">
                                <select name="type_activity" id="dropdown">
                                    <option value=""> -----------</option>
                                    <option value="Running">Running</option>
                                    <option value="Jogging">Jogging</option>
                                    <option value="Hikking">Hikking</option>
                                    <option value="Swimming">Swimming</option>
                                    <option value="Walking">Walking</option>
                                    <option value="Yoga">Yoga</option>
                                </select>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} maxDate={new Date()} />
                                <input name="username" type="time" placeholder="00:00" />
                            </div>
                        </div>
                        <br />

                        <div className="description">
                            <textarea placeholder="Description..." name="description" id="" cols="180" rows="20"></textarea>
                            {/* <input name="Description" type="text" placeholder="Description..." /> */}
                        </div>

                    </div>
                </form>

            </div >
            <br />
            <div className="button">
                <button className="buttonSave" >Save</button>
                <button className="buttonCancel">Cancel</button>
            </div>
        </div >
    )
}

export default Editactivities;
