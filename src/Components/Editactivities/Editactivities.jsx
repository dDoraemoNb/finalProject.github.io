import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import './Editactivities.css';
import DatePicker from "react-datepicker";
import axios from "axios";


function Editactivities(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [activity, setActivitys] = useState({});
    const [selectedType, setType] = useState()
    // console.log(props.list.activityID)
    let { activity_id } = useParams();

    // let date = new Date(activity.date)

    const getActivityID = async (activity = activity_id) => {
        const response = await axios.get(`http://localhost:8080/activities/${activity}`);
        setActivitys(response.data)
        if (response.data.date) {
            const date = new Date(response.data.date)
            setStartDate(date)
        }


        setType(response.data.type)

        // console.log(response.data)
    }

    useEffect(() => {
        getActivityID();
    }, [])

    return (
        <div className="AddActivities">
            <div className="AddActivitiesForm">

                <form>
                    <div className="AddEdit" >
                        <div className="info" >
                            <input className="Title" name="Title" type="text" defaultValue={activity.title} placeholder="Title" />
                            <div className="selectActivity">
                                <div className="test">
                                    <p className="label">SelectActivities</p>
                                    <select value={selectedType} onChange={e => setType(e.target.value)} >
                                        <option value=""> -----------</option>
                                        <option value="Running">Running</option>
                                        <option value="Jogging">Jogging</option>
                                        <option value="Hikking">Hikking</option>
                                        <option value="Swimming">Swimming</option>
                                        <option value="Walking">Walking</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                                <div className="test">
                                    <p className="label">DATE</p>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} maxDate={new Date()} />
                                </div>
                                <div className="test">
                                    <p className="label">TIME</p>
                                    <input name="username" type="time" placeholder="00:00" defaultValue={activity.time} />
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="description">
                            <textarea defaultValue={activity.description} placeholder="Description..." name="description" id="" cols="180" rows="20"></textarea>
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