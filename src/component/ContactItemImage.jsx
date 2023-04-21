import React from 'react'

const ContactItemImage = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="avatar" className='w-16 rounded-full' />
  )
}

export default ContactItemImage