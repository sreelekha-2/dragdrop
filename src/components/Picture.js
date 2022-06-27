import React from 'react'

import { useDrag } from 'react-dnd'

export default function Picture(props) {

    const {image}=props
    const {url,id}=image

    const [{isDragging},drag]=useDrag(()=>({
        type:"image",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:monitor.isDragging()
        })
    }))
  return (
    <img ref={drag} src={url}  style={{border:isDragging?"5px solid red":"0px"}}  width="150px"/>
  )
}
