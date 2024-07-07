import React, { useState, useEffect } from 'react'
export default function useFetch(url) {
    
    let [post, setPost] = useState(null)
    let [isPending, setIspending] = useState(true)
    let [error, setError] = useState(null)

    useEffect ( ()  =>  {

        setTimeout(() => {
    
    
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setIspending(false)
                        setPost(data)
                        setError(null)
    
                    })
                    .catch(err => console.log(err))
    
     
        }, 2000);

    },  [])

    return  [post  ,  isPending  ,  error]
}
