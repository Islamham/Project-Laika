'use client'
import SlidingWindow from '@/components/SlidingWindow'

export default function MainOverlay({locationData}) {
  return(
    <div className='absolute w-screen h-screen'>
      {locationData && <div className={`bg-black w-full h-full absolute top-0 left-0 opacity-50`} />}

      <SlidingWindow locationData={locationData} />
    </div>
  );
}
