import React from 'react'
import "./Feature.css"
import SouthIcon from '@mui/icons-material/South';
import  NorthIcon from '@mui/icons-material/North';
export default function Feature() {
    return (
    <div    className='feature'>
            <div className='feature-wrapper'>

                <div className='feature-item'>
                    <h3 className='feature-item__title'>Revanue</h3>
                    <div className='feature-item__contant'>
                        <h1 className='feature-item__contant-number'>$2,415</h1>
                        <small  className='feature-item__contant-percent'>-11.4
                        
                            <SouthIcon    className='feature-item__contant-icon   nagative'></SouthIcon>
                        
                        </small>
                    </div>
                    <span  className='feature-item__subContant'>Compared to  last  month</span>
                </div>
                <div className='feature-item'>
                    <h3 className='feature-item__title'>Sales</h3>
                    <div className='feature-item__contant'>
                        <h1 className='feature-item__contant-number'>$2,415</h1>
                        <small  className='feature-item__contant-percent'>-11.4
                        
                            <SouthIcon    className='feature-item__contant-icon   nagative'></SouthIcon>
                        
                        </small>
                    </div>
                    <span  className='feature-item__subContant'>Compared to  last  month</span>
                </div>
                <div className='feature-item'>
                    <h3 className='feature-item__title'>Cost</h3>
                    <div className='feature-item__contant'>
                        <h1 className='feature-item__contant-number'>$2,415</h1>
                        <small  className='feature-item__contant-percent'>-11.4
                        
                            <NorthIcon    className='feature-item__contant-icon   '></NorthIcon>
                        
                        </small>
                    </div>
                    <span  className='feature-item__subContant'>Compared to  last  month</span>
                </div>
  
            </div>
    </div>



    )
}
