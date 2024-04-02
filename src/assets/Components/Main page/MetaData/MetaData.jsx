import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../../Footer/Footer'
import './MetaData.css'
import { NavLink } from 'react-router-dom'

function MetaData({img}) {
    let apikey = "54aad910c2fa4c9c932387e3f39fb61f"
    let [metaData, setMetaData] = useState([])
    let [process, setProcess] = useState([])
    let {id} = useParams()
    let url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apikey}`
    let ingURL = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apikey}`
    
    useEffect(()=>{
        async function getMetaData(){
            let response = await fetch (url)
            let data = await response.json()
            setMetaData(data.ingredients)
            console.log(data.ingredients);
        }
        getMetaData()
    },[id])
    useEffect(()=>{
        async function getProcess(){
            let response2 = await fetch (ingURL)
            let data2 = await response2.json()
            console.log(data2[0].steps);
            setProcess(data2[0].steps)
        }
        getProcess()
    },[])



   
  return (
    <div className='wholePage'>
    <p id='recipieid'>Recipies of {id}</p>  
    <div className='metadataMain flex gap-[3vw]' id='conts'>
    <div className="ingredients">
        <h2>Ingredients</h2>
    {
        metaData && metaData.map((data,idx)=>{
            return <li key={idx}>{data.name}</li>
        })
    }
    </div>
    
    <div className='process'>
        <h2>Steps</h2>
        {
            process && process.map((data, idx)=>{
                return <div key={idx}>
                    <span className='text-[2vw]'>Step{idx+1}: </span>
                    {process[idx].step}
                    
                </div>;
            })
        }
    </div>

    </div>
    <Footer/>
    </div>

  )
}

export default MetaData