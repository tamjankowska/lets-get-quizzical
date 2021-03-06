import React from 'react';
import './Mainpage.css';
import Section from './MainpageSection'
import su from '../../images/glee.jpg'
import { BrowserRouter } from 'react-router-dom';
import IdleTimer from '../logoutpopup/LogoutPopup';
import './MQmainpage.css';
import Logout from '../logout/Logout';

function Mainpage() {
    return (
        <>
            <IdleTimer />
            <BrowserRouter>
            {(sessionStorage.getItem("loggedIn")) ? 
            <div className="mainpage-container">
                <Section heading="You're Doing Great, Sweetie!"
                    // url="`${su}`"
                    photo={su}
                    text="See a track of all your Quizzical progress so far"
                    link="/userhistory"
                    button="See My History" />
                <Section heading="See How You Rank"
                    photo={su}
                    text="Checkout the global leaderboards to see where you are in the world"
                    link="/leaderboard"
                    button="Let Me See The Leaderboard" />
                <Section heading="Play a Round"
                    photo={su}
                    text="Test your knowledge - start a new quiz"
                    link="/quiz"
                    button="Start New Quiz" />
                <Section heading="Random Quiz"
                    photo={su}
                    text="I don't care just give me my quiz fix!"
                    link="/quiz"
                    button="Let's Get Into Quizzical" />
            </div>
            : <Logout />}
        </BrowserRouter>
        </>
    )
}

export default Mainpage;