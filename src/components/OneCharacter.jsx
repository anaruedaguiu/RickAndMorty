import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/OneCharacter.css'
import PortalRickAndMorty from '../PortalRickAndMorty.png'

function OneCharacter() {

  const param = useParams()
  const [ character, setCharacter ] = useState([])

  useEffect(()=>{
    fetch (`https://rickandmortyapi.com/api/character/${param.id}`)
    .then((res)=>res.json())
    .then((data)=>setCharacter(data))

  },[param.id])




  return (
    <>
    <div key={character.id}>
      <h1 className="nameOneCharacter">{character.name}</h1>
      <img src={character.image} alt={character.name}/>
      <h3 className="descriptionText">Especie: {character.species}</h3>
      <h3 className="descriptionText">Gender: {character.gender}</h3>
      <h3 className="descriptionText">Status: {character.status}</h3>
      <div className="goBack">
        <Link to = '/'> <img src={PortalRickAndMorty} alt="" className="imgPortal"/> </Link>
        <Link to = '/'> <button className='basic-btn'>⬅ Back</button> </Link>
      </div>
    </div>
    </>
  )
}

export default OneCharacter