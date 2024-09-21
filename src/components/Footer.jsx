import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Ajay Mondal</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href='https://github.com/mrakmondal6612'><FaGithubSquare/></a>
                <a href='https://www.instagram.com/b.tech_ak/'><FaInstagram/></a>
                <a href='https://www.linkedin.com/in/mr-ak/'><FaLinkedinIn/></a>
            </div>
        </div>

        <p className='text-gray-400'>@ 2024 Ajay Mondal</p>

    </div>
  )
}

export default Footer