import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PersonPage = () =>{
    const { id } = useParams(); 
    console.log(`Це з персон пейдж ${id}`)

    return (
  
         
            <div>
              <h2>Детальна інформація про користувача id: {id}</h2>
              <p>User ID: {id}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error maiores dolore voluptatem, cupiditate exercitationem quisquam tempora facere est qui explicabo in eaque. Consequatur assumenda sint corporis recusandae accusantium illum!
              </p>
            </div>
        
    )
}
export default PersonPage;