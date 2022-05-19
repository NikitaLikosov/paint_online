import React from 'react'
import { BsSquareFill, BsCircle, BsEraser, BsArrow90DegLeft, BsArrow90DegRight} from 'react-icons/bs';
import { GiPaintBrush, GiPalette } from 'react-icons/gi';
import {HiOutlineMinus} from 'react-icons/hi'
import {AiOutlineSave} from 'react-icons/ai'

export default function ToolBar() {
  
  const leftIcons = [
    <GiPaintBrush />,
    <BsSquareFill/>,
    <BsCircle />,
    <BsEraser />,
    <HiOutlineMinus />,
    <GiPalette />
  ]
  const rightIcons = [
    <BsArrow90DegLeft />,
    <BsArrow90DegRight />,
    <AiOutlineSave />
  ]

  return (
    <div className='flex flex-row justify-between border-b-2 bg-slate-100 shadow-sm rounded-b-lg overflow-hidden' >
      <div className='flex flex-row '>
        {leftIcons.map((el) => (
          <div className='p-4 cursor-pointer hover:bg-slate-200'>{el}</div>
        ))}
      </div>
      <div className='flex flex-row'>
      {rightIcons.map((el) => (
          <div className='p-4 cursor-pointer hover:bg-slate-200'>{el}</div>
        ))}
      </div>
    </div>
  )
}
