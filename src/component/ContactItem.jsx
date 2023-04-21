import React from 'react'
import ContactItemImage from './ContactItemImage'
import ContactItemBody from './ContactItemBody'
import DeleteButton from './DeleteButton'

const ContactItem = ({ name, tag, imageUrl, id, onDelete }) => {
  return (
    <div className='flex items-center my-6 mx-0 border-[1px] border-dashed border-black p-4 rounded-lg'>
        <ContactItemImage imageUrl={imageUrl} />
        <ContactItemBody name={name} tag={tag} />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default ContactItem