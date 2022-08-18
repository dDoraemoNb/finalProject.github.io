import "./ActivitySearch.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
const ActivitySearch = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <div className="Activities">
            <h2 className="ActivitiesTitle">
                Activities
            </h2>
            <div className="search_form">
                <form action="./action_page.php">
                    {/* <label for="Week">Weekly</label>
                <select name="week" id="dropdown">
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                </select>

                <label for="Month">Monthly</label>
                <select name="month" id="dropdown">
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>

                <label for="year">Yearly</label>
                <select name="year" id="dropdown">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select> */}
                    <label for="date">Date</label>
                    <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        maxDate={new Date()}
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                        isClearable={true}
                    />

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



                </form>
                <Link to="/add" className='btnAddActivities'>+Add Activity</Link>
                
            </div>
        </div>
    );
};

export default ActivitySearch