import React, {useState, useEffect} from 'react'

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_TWEAKS=gql`
 query allTweaks {
    allTweaks {
      title
    }
 }
`
const Tweaks=(props)=>{
    const [tweaks,setTweaks]=useState([])
    const  {loading,data, error}=useQuery(ALL_TWEAKS)

    useEffect(()=>{
        if(data.allTweaks) {
            setTweaks(data.allTweaks)
        }
    },[data])

    if (loading) return(<div>loading...</div>);
    if (error) return(<div>Failed to load tweaks...</div>);
    return(
        <div>
            <ul>
                {
                    tweaks.map((tweak,index)=>{
                        return <li key={index}>{tweak.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Tweaks;
