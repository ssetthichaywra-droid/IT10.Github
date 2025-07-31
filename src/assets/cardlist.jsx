import React from 'react'
import cardData from '../services/carddata'
import Card from './Card'

const cardlist = () => {
  return (
    <>
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
        {cardData.map(card =>(
            <card key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            />
        ))}
    </div>
    </>
  )
}

export default cardlist