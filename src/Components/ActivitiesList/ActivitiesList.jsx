import React from 'react';

import './ActivitiesList.css';

export const ActivitiesList = () => {
    return (
        <div class="activities-list">
            <div class="activities-list-form">
                <div class="activities-title">
                    <div>
                    <img src='/public/activities_images/010.svg' />                    
                    </div><div>
                    <h4 class="activities-list-title">
                        ไปวิ่งกับน้องหมา
                    </h4>
                    </div>
                    <div>
                    <p class="activity-type">Activity: Jorking</p>
                    </div>
                </div>
                <div class="activities-description">
                    <p class="activities-list-description">
                        วันนี้ฉันไปวิ่ง เจอน้องหมา
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ActivitiesList;