import React from 'react';

import './ActivitiesList.css';

export const ActivitiesList = () => {
    return (
        <div className="activities-list">
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
            </div>
        </div>
    );
}

export default ActivitiesList;

