import "./ActivitiesList.css";

const Activities =()=>{
    return(
        <div className="Activities">
            <h2 className="ActivitiesTitle">
                Activities
            </h2>
            <form action="./action_page.php">
                <label for="Week">Weekly</label>
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
                </select>

                <button for="AddActivities" type="submit" className="AddActivities">
                    + Add Activity
                </button>
            </form>
        </div>
    );
};

export default Activities