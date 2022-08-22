import React, { useState } from "react";
import './AddActivities.css';
import DatePicker from "react-datepicker";
import axios from "axios";
function AddActivities(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState()

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title: title,
            date: startDate,


        }

        console.log(data)
        axios.post('http://localhost:8080/activities/create', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            (error) => {
                if (error.response) console.log(error.response.data);
            }
        )
    }
    return (
        <div className="AddActivities">
            <div className="AddActivitiesForm">

                <form onSubmit={handleSubmit}>
                    <div className="AddEdit" >
                        <div className="info" >
                            <input className="Title" name="Title" type="text"
                                onChange={e => setTitle(e.target.value)} placeholder="Title" />
                            <div className="selectActivity">
                                <label for="type_activity">Type</label>
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
                                <input name="time" type="time" placeholder="00:00" />
                            </div>
                        </div>
                        <br />

                        <div className="description">
                            <textarea placeholder="Description..." name="description" id="" cols="180" rows="20"></textarea>
                            {/* <input name="Description" type="text" placeholder="Description..." /> */}
                        </div>

                    </div>
                    <div className="button">
                        <button className="buttonPost" type="submit">POST</button>
                    </div>
                </form>

            </div >

            <br />

        </div >
    )
}

export default AddActivities;
