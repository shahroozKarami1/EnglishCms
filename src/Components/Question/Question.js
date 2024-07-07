import React, { useState } from 'react'
import "./Question.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import withToggle from '../HOCS/withToggle';
 function Question({ title, id, info  ,  showInfo  ,  clickHandler }) {

    return (
        <>
            <article className='boxQues'>

                <header className='boxQues-wrapper' onClick={clickHandler}>
                    <div className='boxQues-left'>
                        <h3 className='boxQues-left__text'>

                            {title}
                        </h3>

                    </div>
                    <div className='boxQues-right'>
                        <button className='boxQues-right__btn'>{showInfo ? <RemoveIcon /> : <AddIcon />}</button>
                    </div>
                </header>
                {

                    showInfo && (
                        <div className='boxQues__answer'>
                            {info}
                        </div>
                    )
                }


            </article>




        </>)
}


export  default withToggle(Question)