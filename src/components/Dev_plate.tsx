import React from 'react'
import { DevPlateProps } from '../app/interfaces'

export default function DevPlate(props: DevPlateProps) {
  return (
    <a href={props.url} target='_blank' rel='noopener noreferrer'>
      <div className='flex items-center justify-start mt-3 hover:acc-bt tsd'>
        <div className='w-16 h-16 ml-5 overflow-hidden border rounded-full'>
          <img src={props.imgUrl} alt={`${props.name} profile picture`} />
        </div>
        <div className='ml-3'>
          <div className='text-lg font-semibold'>{props.name}</div>
          <div className='text-sm'>{props.role}</div>
        </div>
      </div>
    </a>
  )
}
