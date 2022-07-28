import React from 'react'
import ActivitySearch from '../../Components/ActivitySearch/ActivitySearch'
import Navbar from '../../Components/Navbar/Navbar'
import './Activity.css'

const Activity = (props) => {

    return (
        <div className='main-web'>

            <div className='Activity'>
                <div>
                    <Navbar />
                </div>
                <ActivitySearch />
            </div>
        </div>
    )
}

export default Activity