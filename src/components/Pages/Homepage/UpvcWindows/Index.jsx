import React from 'react'
import { Windows } from './Windows';
import { Doors } from './Door';



export const UpvcWindows = () => {
    return (
        <main className='px-4 md:px-28 bg-gray-50 py-10'>
          <Windows/>
          <Doors/>
        </main>
    )
}
