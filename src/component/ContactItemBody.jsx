import React from 'react'

const ContactItemBody = ({name, tag}) => {
  return (
    <div className='ml-2 pl-2 border-l border-solid border-[#aaa] flex-1'>
        <h3 className='py-1 px-0 font-bold'>{name}</h3>
        <p>@{tag}</p>
    </div>
  )
}

export default ContactItemBody