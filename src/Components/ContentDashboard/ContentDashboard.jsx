import { useState } from 'react'
import './ContentDashboard.css'
import DailyRecommend from '../DailyRecommend/DailyRecommend'
import Greeting from '../Greeting/Greeting'

const ContentDashboard = () => {


    return (

        <div>
            <Greeting />
            <DailyRecommend />
            {/* <ActivityList /> */}
        </div>
    )

}

export default ContentDashboard
