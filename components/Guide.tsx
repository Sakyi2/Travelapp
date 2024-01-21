import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
  <div className='boder-2 border-red-500 padding-container max-container w-full pb-24'>
    <Image
    src='/paper-p.svg'
    alt='cham'
    width={50}
    height={50}/>
    <p className='uppercase regular-18 -mt-1 mb-3 text-blue-500'
    >We here for you </p>
    <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
       <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You to Save Landing</h2>
       <p className='regular-16 text-gray-30 xl:max-w-[520px]:'> only with the <strong>TravelHub</strong> application you will no faustrate about passport
       and get disappointed, because we already support ofline maps when there is no internet connection in the field.
       invite ur friends,relatives and friends to have fun n the wilderness through the valley and reach the top
       of the mountain </p>
    </div>
      </div>


      <div className='flexCenter max-container relative w-full boder-2 border-blue-500'>
        <Image
        src="/plane1.avif"
        alt='boat'
        width={110}
        height={80}
        className='w-full  lg:h-[350px] object-cover object-center lg:rounded-5xl '/>

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl
         border shadow-md md:left-[5%] lg:top-20'>

          <Image
          src="/meter.svg"
          alt='meter'
          width={16}
          height={158}
          className='h-full w-auto'/>
          <div className='flexBetween flex-col'>

            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-blue-500'>48min</p>
              </div>
              <p className='bold-20 mt-2'>Accra Ghana</p>
            </div>

            <div className='flex w-full flex-col'>
              
                <p className='regular-16 text-gray-20'>Start track</p>
               
              </div>
              <p className='bold-20 mt-2 whitespace-nowrap'>New York, City</p>
            </div>
          </div>
         

      </div>
    </section>
  )
}

export default Guide