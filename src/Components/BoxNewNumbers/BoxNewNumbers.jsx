import React from 'react'
import "./BoxNewNumbers.css"
import {User}  from  "../../Datas"
import VisibilityIcon from '@mui/icons-material/Visibility'; 



export default function  BoxNewNumbers   () {
    return (

        <>

            <div className='NewNumber'>
                <div className='NewNumber-wrapper'>
                    <h3 className='NewNumber-title'>New Join  Members</h3>
                    <ul className='NewNumber-list'>

                        {
                            User.map((singleUser)  =>  (

                        <li className='NewNumber-item'  key={singleUser.id}>
                            <img src="/Imgs/profile.png" alt=""   className='NewNumber__list-img'/>
                            <div className='NewNumber-list__middle'>
                                <span className='NewNumber-list__middle-name'>{singleUser.name}  </span>
                                <span className='NewNumber-list__middle-subName'>{singleUser.job}  </span>
                            </div>
                            <button className='NewNumber-list__btn'>

                                <VisibilityIcon   ></VisibilityIcon>
                                <span   className='NewNumber-list__btn-text'>DIsplay</span>
                            </button>
                        </li>

                            ))
                        }

                    </ul>
                </div>


            </div>


        </>
    )
}
