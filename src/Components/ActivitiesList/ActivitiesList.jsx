import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ActivitiesList.css';
import useToken from '../../useToken';
import Swal from 'sweetalert2';


// props pageninate = false
export const ActivitiesList = (props) => {
    //console.log(props.Activity)

    if (props.Activity[0] === undefined) {
        return (
            <div className="activities-list">
                <div className='noObject'>
                    <h2> NO ACTIVITY</h2>
                </div>

            </div>
        )
    }


    return (
        <div className="activities-list">
            
            {

                props.Activity.map(list => {

                    return (
                        <div className="activities-list-form">
                            <div className="activities-title">
                                <div className='title'>
                                    <img src={`activities_images/${list.img}.svg`} />
                                    <div className="activities-list-title">
                                        <h4>
                                            {list.title}
                                        </h4>
                                        <h3>{new Date(list.date).toDateString()}</h3>
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
                                        <li class='activities-list-description timeText'>SPEND TIME : {list.time} min.</li>
                                        <li class='description-btn'><Link to={`/edit-activities/${list._id}`} ><i class='bx bx-edit'></i></Link></li>
                                        <li class='description-btn'><a href="#" onClick={e => props.deleteactivity(e, list._id)}><i class='bx bxs-trash' ></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default ActivitiesList;

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