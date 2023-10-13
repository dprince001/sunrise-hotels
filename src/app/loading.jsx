import React from 'react'
import Spinner from '@/assets/svgs/spinner'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
      <span className='animate-spin'>
        <Spinner />
      </span>
    </div>
  )
}

export default Loading