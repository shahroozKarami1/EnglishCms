import React, { useEffect, useRef, useState } from 'react'

function toggle(OrginalComponent) {

    const NewComponent  =   ()  =>  {
        
        let [isShow, setIsShow] = useState(true)
        let inputRef = useRef(null)
        useEffect(()  =>  {
                inputRef.current.focus()
        }  ,  [])
        function clickHandler() {
            setIsShow(prev => !prev)
        }
            
         return <OrginalComponent  isShow =  {isShow}   inputRef = {inputRef}  clickHandler   =  {clickHandler} />
        
    }
    return  NewComponent
}





