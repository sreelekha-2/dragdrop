import React, { useState } from 'react'

import Picture from './Picture'

import { useDrop } from 'react-dnd'

const Pictures=[
    {
        id:1,
        url:"https://sooryaonlineshopping.com/wp-content/uploads/2020/06/Mangoes.jpg"
    },
    {
        id:2,
        url:"https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"
    },
    {
        id:3,
        url:"https://image.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-260nw-1840946851.jpg"
    }
]

export default function DrogDrop() {

    const [board,setBoard]=useState([])

    const [{isOver},drop]=useDrop(()=>({
        accept:"image",
        drop:(item)=>addImageToBoard(item.id),
        collect:(monitor)=>({
            isOver:monitor.isOver()
        })
    }))

    const addImageToBoard=(id)=>{
        const dropedImage=Pictures.filter(picture=>picture.id===id)
        setBoard(board=>[...board,dropedImage[0]])
    }
  return (
    <>
        <div className='Pictures'>
            {Pictures.map(picture=>{
                return <Picture image={picture} key={picture.id}/>
            })}
        </div>
        <div className='Board' ref={drop}>
            {board.map(picture=>{
                return <Picture image={picture} key={picture.id}/>
            })}</div>
    </>
  )
}
