import React, { useState } from 'react'
import { delay } from '../app/helper'
import { BugAntIcon } from '@heroicons/react/24/solid'
import { SAPageProps } from '../app/interfaces'
import DevPlate from './Dev_plate'

const SAPage = (props: SAPageProps) => {
  const [mainDev, setMainDev] = useState(false)
  const [clIsOpen, setCLIsopen] = useState(false)
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
      <img onClick={tapToOpen} src={props.app.logo.logoUrl} alt={props.app.logo.alt} width={150} height={150} />
      <div className='text-3xl font-semibold'>{props.app.title}</div>
      <p
        onClick={() => setCLIsopen(!clIsOpen)}
        className={`${clIsOpen && 'font-bold tracking-[0.5em]'} flex mt-1 mb-4 space-x-2 text-xs tracking-wider text-center transition-all duration-700 cursor-pointer hover:tracking-widest hover:text-black`}
      >
        <span className='font-semibold'>{props.app.codeName}</span>
        <span>v{props.app.version}</span>
      </p>
      <div className={`-mt-1 collapse ${clIsOpen ? 'collapse-open' : ''} w-full max-w-xl `}>
        <div className='w-full max-w-xl collapse-content'>
          <div className='overflow-y-auto max-h-96'>
            <div className='flex flex-col justify-center mx-2 mt-2 mb-3 ring-2 rounded-xl ring-blue-500/10'>
              {Object.keys(props.changeLogs).slice(0, 20).map(x =>
                <div className='p-3 mx-3 my-2 bg-slate-400/10 hover:bg-blue-200/10 rounded-xl ring-1 ring-blue-300/40 h-fit'>
                  <div className='text-sm font-semibold tracking-wider'>v{x}</div>
                  <div className='text-xs opacity-70'>{new Date(props.changeLogs[x].date).toUTCString()}</div>
                  <div className='py-1 my-1 divider' />
                  <ul className='ml-4 text-sm list-disc opacity-80'>
                    {props.changeLogs[x].changes.map(c => <li className='hover:list-decimal'>{c}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <a href={props.poweredBy.url} target='_blank' rel='noopener noreferrer'>
        <div className='text-sm transition-all duration-700 hover:tracking-widest hover:text-black'>
          Powered by {props.poweredBy.companyName}
        </div>
      </a>
      <a href={props.devCompany.url} target='_blank' rel='noopener noreferrer'>
        <div className='mt-3 text-xs transition-all duration-700 hover:tracking-widest hover:text-black '>
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
        <div
          className='flex items-center justify-start w-full px-5 mt-3 transition-all duration-500 ease-in-out \
        overflow-hidden hover:rounded-xl hover:px-4 hover:py-3 hover:text-xl hover:font-bold hover:tracking-wider \
        hover:backdrop-blur hover:scale-105 hover:border-blue-400 hover:bg-slate-900/80 hover:text-slate-300/70 \
        focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:scale-90
        '
        >
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
