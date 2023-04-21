import React from 'react'

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button onClick={() => onDelete(id)} className='p-2 text-[18px] bg-[orangered] text-white border-0 rounded-[4px] cursor-pointer'>X</button>
  )
}

export default DeleteButton