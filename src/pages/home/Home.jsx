import React from 'react'

import CourseSlider from '../../components/home/CourseSlider'
import FeedbackSlider from '../../components/home/FeedbackSlider'
import Participants from '../../components/home/Participants'
import ConsultationForm from '../../components/home/ConsultationForm'
import TrendingTechnology from '../../components/home/TrendingTechnology'
import LatestCourse from "../../components/home/LatestCourse"
import TrainingPhilosophy from "../../components/home/TrainingPhilosophy"
import CourseAdvantages from "../../components/home/CourseAdvantages"
import "./index.css"
import Events from '../../components/home/Events'
import LearningFree from "../../components/home/LearningFree"

function Home() {

    return (
        <>
            <CourseSlider />
            <TrendingTechnology />
            <Events />
            <LearningFree />
            <TrainingPhilosophy />
            <FeedbackSlider />
            <CourseAdvantages />
            <Participants />
            <LatestCourse />
            <ConsultationForm />
        </>
    )
}

export default Home