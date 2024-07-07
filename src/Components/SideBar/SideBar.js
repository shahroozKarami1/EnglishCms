import React from 'react'
import LineStyleIcon from "@mui/icons-material/LineStyle"
import TimeLineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import StorefrontIcon from "@mui/icons-material/Storefront"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import BarChartIcon from "@mui/icons-material/BarChart"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import ReportIcon from "@mui/icons-material/Report"
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import "./SideBsr.css"
import { Link } from 'react-router-dom'
export default function SideBar() {
    return (

        <>

            <div className='side-bar'>
                <div className='side-bar__wrapper'>
                    <div className='side-bar__body'>
                        <ul className='side-bar__body-items '>
                            <h3 className='side-bar__body-topic'>Dashboard</h3>
                            <Link to={"/"} className='link'>
                                <li className='side-bar__body-link  active' >
                                    <LineStyleIcon className='side-bar-body-link-icon' />
                                    Home
                                </li>
                            </Link>
                            <li className='side-bar__body-link'  >
                                <TimeLineIcon className='side-bar-body-link-icon' />
                                Analytics
                            </li>
                            <li className='side-bar__body-link'>
                                <TrendingUpIcon className='side-bar-body-link-icon' />
                                Sales
                            </li>
                        </ul>
                        <ul className='side-bar__body-items '>
                            <h3 className='side-bar__body-topic'>Quick Menu</h3>
                            <Link to={"/users"} className='link'>
                                <li className='side-bar__body-link  active' >
                                    <PermIdentityIcon className='side-bar-body-link-icon' />
                                    Users
                                </li>
                            </Link>
                            <Link to={"/newUser"} className='link'>
                                <li className='side-bar__body-link'>
                                    <MailOutlineIcon className='side-bar-body-link-icon' />
                                    New User
                                </li>
                            </Link>
                            <Link to={"/products"} className='link' >
                                <li className='side-bar__body-link'>
                                    <StorefrontIcon className='side-bar-body-link-icon' />
                                    Products
                                </li>
                            </Link>
                            <li className='side-bar__body-link'>
                                <AttachMoneyIcon className='side-bar-body-link-icon' />
                                Transactions
                            </li>
                            <Link to={"/reports"} className='link'>

                                <li className='side-bar__body-link'>
                                    <BarChartIcon className='side-bar-body-link-icon' />
                                    Reports
                                </li>
                            </Link>
                        </ul>
                        <ul className='side-bar__body-items '>
                            <h3 className='side-bar__body-topic'>Notifications</h3>
                            <Link to="/mail"   className='link'>
                                <li className='side-bar__body-link  active' >
                                    <MailOutlineIcon className='side-bar-body-link-icon' />
                                    Mail
                                </li>
                            </Link>
                            <li className='side-bar__body-link'>
                                <DynamicFeedIcon className='side-bar-body-link-icon' />
                                feedback
                            </li>
                            <li className='side-bar__body-link'>
                                <ChatBubbleOutlineIcon className='side-bar-body-link-icon' />
                                messeges
                            </li>


                        </ul>
                        <ul className='side-bar__body-items '>
                            <h3 className='side-bar__body-topic'>Staff</h3>
                            <li className='side-bar__body-link  active' >
                                <WorkOutlineIcon className='side-bar-body-link-icon' />
                                Manage
                            </li>
                            <li className='side-bar__body-link'>
                                <CandlestickChartOutlinedIcon className='side-bar-body-link-icon' />
                                Analytics
                            </li>

                            <li className='side-bar__body-link'>
                                <ReportIcon className='side-bar-body-link-icon' />
                                Reports
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
