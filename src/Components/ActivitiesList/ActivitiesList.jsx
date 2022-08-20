import React from 'react';

import './ActivitiesList.css';

export const ActivitiesList = (props) => {

    return (
        <div className="activities-list">
            {
                props.list.map(list => {
                    return (
                        <div className="activities-list-form">
                            <div className="activities-title">
                                <div className='title'>
                                    <img src={`/public/activities_images/${list.img}.svg`} />
                                    <div>
                                        <h4 className="activities-list-title">
                                            {list.title}
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <p className="activity-type">Activity: {list.type}</p>
                                </div>
                            </div>
                            <div className="activities-description">


                                <p className="activities-list-description">
                                    {list.description}
                                </p>
                                <div class="activities-footer">
                                    <ul>
                                        <li class='activities-list-description'>17:70</li>
                                        <li class='description-btn'><a href="#"><i class='bx bx-edit'></i></a></li>
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

