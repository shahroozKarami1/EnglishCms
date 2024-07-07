import React, { useState, useEffect } from 'react'

export default function useLocalS(key) {

    let [localLove, setLocalove] = useState(() => {
        let saveData = localStorage.getItem(key)
        if (saveData) {
            return saveData
        }
        return null
    })

    useEffect(() => {
        localStorage.setItem( key,  localLove )
    }, [localLove])

    return   [localLove  ,  setLocalove ]

}
