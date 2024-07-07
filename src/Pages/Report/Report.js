import React, { useState } from 'react'
import { questions } from '../../Datas'
import "./Report.css"
import Question from '../../Components/Question/Question'
export default function Report() {
  let [dataQues, setDataQues] = useState(questions)
  return (

    <>

      <section className='questions'>
        <main className='questions-wrapper'>
          <div className='questions-left'>
            <h1 className='questions-left__topic'>Question And About  Answers  About Login ... </h1>
          </div>
          <div className='questions-right'>

{


  dataQues.map((items)  =>  (


<Question  key={items.id}  {...items}></Question>

  ))
}
          </div>


        </main>

      </section>





    </>
  )
}
