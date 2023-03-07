import React, { useState } from 'react'
import { delay } from '../app/helper'
import { BugAntIcon } from '@heroicons/react/24/solid'
import { SAPageProps } from '../app/interfaces'
import DevPlate from './Dev_plate'

const SAPage = (props: SAPageProps) => {
  const [mainDev, setMainDev] = useState(false)
  let tap = 0

  async function tapToOpen() {
    if (tap >= 5 && !mainDev) {
      setMainDev(true)
      await delay(5000)
      tap = 0
      setMainDev(false)
    }
    tap++
  }

  return (
    <div className='flex flex-col items-center mx-2 tracking-wider sm:mx-5 lg:mx-10 xl:mx-10'>
      <img onClick={tapToOpen} src={props.mainImg.logoUrl} alt={props.mainImg.alt} width={150} height={150} />
      <div className='text-3xl font-semibold'>{props.app.name}</div>
      <a href={props.app.url} target='_blank' rel='noopener noreferrer'>
        <div className='text-sm textAni'>Powered by {props.app.name}</div>
      </a>
      <a href={props.devCompany.name} target='_blank' rel='noopener noreferrer'>
        <div className='mt-3 text-xs textAni '>
          Developed by {props.devCompany.name}, {props.devCompany.year}
        </div>
      </a>
      <div className='w-full px-5 my-5'>
        <hr className='flex border-1 border-black/10' />
      </div>
      <div className={`${mainDev ? 'collapse-open' : 'collapse-close'} collapse w-full`}>
        <div className='w-full collapse-content'>
          <div className='flex justify-start w-full px-5 text-2xl'>Developer info</div>
          {props.devs.map((i) => (
            <DevPlate key={i.imgUrl} name={i.name} role={i.role} url={i.url} imgUrl={i.imgUrl} />
          ))}
        </div>
      </div>
      <div className='flex justify-start w-full px-5 mt-5 text-2xl'>Issue or Bug report</div>
      <a className='w-full ' href={props.reportUrl} target='_blank' rel='noopener noreferrer'>
        <div className='flex items-center justify-start w-full px-5 mt-3 hover:acc-bt tsd '>
          <div className='w-16 h-16 '>
            <BugAntIcon />
          </div>
          <div className='ml-3'>
            <div className='text-lg font-semibold'>Report on Github issue tab</div>
            <div className='text-sm'>
              Before reporting any issue or bug report please add proper description and screenshorts to help fix the
              problem.
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default SAPage
