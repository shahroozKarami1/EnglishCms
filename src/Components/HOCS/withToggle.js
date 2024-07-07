import React  ,  {useState} from 'react'

export default function withToggle(OrginalComponent) {

    const NewComponent = (props ) => {
        const [showInfo, setShowInfo] = useState(false)
        
        function clickHandler() {
            setShowInfo(prev => !prev)
        }

        return <OrginalComponent   showInfo  =  {showInfo}  clickHandler  =  {clickHandler}    {...props} />
    }
    return NewComponent

}
