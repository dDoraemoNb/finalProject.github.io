import React from 'react';

import './ActivitiesList.css';

export const ActivitiesList = () => {
    return (
        <div className="activities-list-form">
            <div className="activities-title">
                <div className='title'>
                    <img src="/public/activities_images/010.svg" />
                    <div>
                        <h4 className="activities-list-title">
                            title
                        </h4>
                    </div>
                </div>
                <div>
                    <p className="activity-type">Activity: jogging</p>
                </div>
            </div>
            <div className="activities-description">

                <p className="activities-list-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nemo reiciendis debitis voluptates omnis autem tenetur quam deserunt consequuntur aliquam, expedita laboriosam explicabo perspiciatis odio tempore qui enim officiis laudantium.
                </p>
                <div class="activities-footer">
                <ul>
                    <li class='activities-list-description'>17:70</li>
                    <li class='description-btn'><a href="#"><i class='bx bx-edit'></i></a></li>
                    <li class='description-btn'><a href="#"><i class='bx bxs-trash' ></i></a></li>
                </ul>
            </div>
            </div>

            {/* <div class="activities-footer">
                <ul>
                    <li class='activities-list-description'>17:70</li>
                    <li class='description-btn'><a href="#"><i class='bx bx-edit'></i></a></li>
                    <li class='description-btn'><a href="#"><i class='bx bxs-trash' ></i></a></li>
                </ul>
            </div> */}
                
            </div>

            );
}

export default ActivitiesList;