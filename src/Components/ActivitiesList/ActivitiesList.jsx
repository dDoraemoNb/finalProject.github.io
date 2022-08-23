import axios from 'axios';
import React,{ useEffect ,useState} from 'react';
import { Link } from "react-router-dom"
import './ActivitiesList.css';
import useToken from '../../useToken';


// props pageninate = false
export const ActivitiesList = (props) => {
    const { token, setToken } = useToken();
    const [activitys, setActivitys] = useState(
        [
          {
            img: '010', title: 'ไปวิ่งกับน้องหมา', type: 'Jogging',
            description: 'It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. '
          },
          {
            img: '002', title: 'ไปปาก', type: 'swim',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
        ]
      );
      const getactivities = async (user = token) => {
          const response = await axios.get('http://localhost:8080/activities', { params: { user_id: user } })
      
          setActivitys(response.data)
        }
      



    useEffect(() => {
        getactivities()
        //request with limit
        //response limit
    },[])

    return (
        <div className="activities-list">
            {
                activitys.map(list => {

                    return (
                        <div className="activities-list-form">
                            <div className="activities-title">
                                <div className='title'>
                                    <img src={`activities_images/${list.img}.svg`} />
                                    <div className="activities-list-title">
                                        <h4>
                                            {list.title}
                                        </h4>
                                        <h3>08 Aug 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p className="activity-type">Activity: {list.type}</p>
                                </div>
                            </div>
                            <div className="activities-description">
                                <div className="activities-list-description">
                                <p> {list.description} </p>
                                </div>
                                <div class="activities-footer">
                                    <ul>

                                        <li class='activities-list-description'>30 mins</li>
                                        <Link to='/edit-activities' list={list.description} ><li class='description-btn'><a href="#"><i class='bx bx-edit'></i></a></li></Link>

                                        <li class='description-btn'><a href="#"><i class='bx bxs-trash' ></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* <div className="activities-list-form">
                <div className="activities-title">
                    <div className='title'>
                        <img src='/public/activities_images/010.svg' />
                        <div>
                            <h4 className="activities-list-title">
                                ไปวิ่งกับน้องหมา
                            </h4>
                        </div>
                    </div>
                    <div>
                        <p className="activity-type">Activity: Jorking</p>
                    </div>
                </div>
                <div className="activities-description">
                    <p className="activities-list-description">
                        วันนี้ฉันไปวิ่ง เจอน้องหมา
                    </p>
                </div>
            </div>
            <div className="activities-list-form">
                <div className="activities-title">
                    <div className='title'>
                        <img src='/public/activities_images/010.svg' />
                        <div>
                            <h4 className="activities-list-title">
                                ไปวิ่งกับน้องหมา
                            </h4>
                        </div>
                    </div>
                    <div>
                        <p className="activity-type">Activity: Jorking</p>
                    </div>
                </div>
                <div className="activities-description">
                    <p className="activities-list-description">
                        วันนี้ฉันไปวิ่ง เจอน้องหมา
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default ActivitiesList;

