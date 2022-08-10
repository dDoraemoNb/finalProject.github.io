import React from 'react'
import ActivitySearch from '../../Components/ActivitySearch/ActivitySearch'
import Navbar from '../../Components/Navbar/Navbar'
import ActivitiesList from '../../Components/ActivitiesList/ActivitiesList'
import './Activity.css'

const Activity = (props) => {

    return (
        <div className='main-web'>

            <div className='Activity'>
                <div>
                    <Navbar />
                </div>
                <ActivitySearch />
                <ActivitiesList list={props.list}/>
            </div>
        </div>
    )
}

export default Activity