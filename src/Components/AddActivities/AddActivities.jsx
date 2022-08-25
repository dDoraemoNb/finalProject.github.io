import React, { useState } from "react";
import "./AddActivities.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import useToken from '../../useToken';
import { instance } from '../../api'
import Swal from "sweetalert2";

function AddActivities(props) {
  const [startDate, setStartDate] = useState(new Date());
  const { token, setToken } = useToken();

  const [addTitle, setTitle] = useState();
  const [addDescription, setDescription] = useState();
  const [addTime, setTime] = useState();
  const [addType, setType] = useState();

  // console.log(startDate)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    let image = ''
    if (addType === 'Running') {
      image = '010'

    } else if (addType === 'Jogging') {
      image = '014'

    } else if (addType === 'Walking') {
      image = '010'

    } else if (addType === 'Yoga') {
      image = '012'


    } else if (addType === 'Jump Rope') {
      image = '006'

    } else if (addType === 'Weight Training') {
      image = '001'
    }


    const data = {
      user_id: token,
      title: addTitle,
      description: addDescription,
      time: addTime,
      type: addType,
      date: startDate,
      img: image
    };
    instance.post('/activities/create', data)
    .then(() => Swal.fire({
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

  return (
    <div className="AddActivities">
      <div className="AddActivitiesForm">
        <form onSubmit={handleSubmit}>
          <div className="AddEdit">
            <div className="info">
              <input
                className="Title"
                name="Title"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)} //
              />
              <div className="selectActivity">
                <div className="test">
                  <p className="label">SelectActivities</p>
                  <select
                    onChange={(e) => setType(e.target.value)}
                    name="type_activity"
                    id="dropdown"
                  >
                    <option value=""> -----------</option>
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
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    maxDate={new Date()}
                  />
                </div>
                <div className="test">
                  <p className="label">SPEND TIME</p>
                  <input
                    name="time"
                    type="time"
                    defaultValue={'00:00'}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="description">
              <textarea
                placeholder="Description..."
                name="description"
                id=""
                cols="180"
                rows="20"
                onChange={(e) => setDescription(e.target.value)} //
              ></textarea>
              {/* <input name="Description" type="text" placeholder="Description..." /> */}
            </div>
          </div>
          <br />
          <div className="button">
            <button className="buttonPost" type="submit">
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default AddActivities;
