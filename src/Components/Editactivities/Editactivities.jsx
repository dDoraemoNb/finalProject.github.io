import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import './Editactivities.css';
import DatePicker from "react-datepicker";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import useToken from '../../useToken';
import Swal from "sweetalert2";
import { instance } from "../../api";

function Editactivities(props) {
    const [startDate, setStartDate] = useState(new Date());
    const { token, setToken } = useToken();
    const [activity, setActivitys] = useState({});
    const [selectedType, setType] = useState()
    // console.log(props.list.activityID)
    let { activity_id } = useParams();
    const [updateTitle, setupdateTitle] = useState();
    const [updateDescription, setupdateDescription] = useState();
    const [updateTime, setupdateTime] = useState();
    // const [updateType, setupdateType] = useState();



    const navigate = useNavigate()

    // let date = new Date(activity.date)

    const getActivityID = async (activity = activity_id) => {
        const response = await instance.get(`/activities/${activity}`);
        setActivitys(response.data)
        if (response.data.date) {
            const date = new Date(response.data.date)

            setStartDate(date)
        }
        setupdateTitle(response.data.title)
        setupdateDescription(response.data.description)
        setupdateTime(response.data.time)
        setType(response.data.type)

        // console.log(response.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let image = ''
        if (selectedType === 'Running') {
            image = '010'

        } else if (selectedType === 'Jogging') {
            image = '014'

        } else if (selectedType === 'Walking') {
            image = '010'

        } else if (selectedType === 'Yoga') {
            image = '012'


        } else if (selectedType === 'Jump Rope') {
            image = '006'

        } else if (selectedType === 'Weight Training') {
            image = '001'
        }


        const data = {
            user_id: token,
            title: updateTitle,
            description: updateDescription,
            time: updateTime,
            type: selectedType,
            date: startDate,
            img: image
        };
        instance.put(`/activities/${activity_id}`, data)
            .then(()=>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {

                        navigate('/activity')


                    }

                })
            )

    };




    useEffect(() => {
        getActivityID();
    }, [])

    return (
        <div className="AddActivities">
            <div className="AddActivitiesForm">

                <form onSubmit={handleSubmit}>
                    <div className="AddEdit" >
                        <div className="info" >
                            <input className="Title" name="Title" type="text" defaultValue={activity.title} onChange={e => setupdateTitle(e.target.value)} placeholder="Title" />
                            <div className="selectActivity">
                                <div className="test">
                                    <p className="label">SelectActivities</p>
                                    <select value={selectedType} onChange={e => setType(e.target.value)} >
                                        <option value={activity.type}>Previous :{activity.type}</option>
                                        <option value="Running">Running</option>
                                        <option value="Jogging">Jogging</option>
                                        <option value="Jump Rope">Jump Rope</option>
                                        <option value="Weight Training">Weight Training</option>
                                        <option value="Walking">Walking</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                                <div className="test">
                                    <p className="label">DATE</p>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} maxDate={new Date()} />
                                </div>
                                <div className="test">
                                    <p className="label">SPEND TIME</p>
                                    <input type="time" placeholder="00:00" defaultValue={activity.time} onChange={e => setupdateTime(e.target.value)} />
                                </div>

                            </div>
                        </div>
                        <br />

                        <div className="description">
                            <textarea defaultValue={activity.description} onChange={e => setupdateDescription(e.target.value)} placeholder="Description..." name="description" id="" cols="180" rows="20"></textarea>
                            {/* <input name="Description" type="text" placeholder="Description..." /> */}
                        </div>

                    </div>
                    <div className="button">
                        <button className="buttonSave" type="submit" >Save</button>
                        <button className="buttonCancel" type="reset">Cancel</button>
                    </div>
                </form>

            </div >
            <br />

        </div >
    )
}

export default Editactivities;