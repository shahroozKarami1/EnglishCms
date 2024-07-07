import React from 'react'
import "./TopBar.css"
import { Container } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export default function TobBar() {
    return (


        <>
                <div className='top-bar'>
                    <div className='top-bar__wrapper'>
                        <div className="top-bar__right">
                            <div className='top-bar__right-icon'>
                                <NotificationsIcon />
                                <span className='top-bar__right-icon-badge'>1</span>
                            </div>
                            <div className='top-bar__right-icon'>
                                <LanguageIcon />
                                <span className='top-bar__right-icon-badge'>1</span>
                            </div>
                            <div className='top-bar__right-icon'>
                                <SettingsIcon />
                            </div>
                            <div className='top-bar__right-logo'>
                                <PersonIcon></PersonIcon>
                                {/* موقتی  */}
                            </div>
                        </div>
                        <div className="top-bar__left">
                            <h1  >shahrooz love js </h1>
                        </div>
                    </div>
                </div>

        </>

    )
}
