import React from 'react'
import CardData from '../services/cardData'
import Card from './card'

const CardList = () => {
  return (
    <>
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
        {CardData.map(card =>(
            <Card key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            />
        ))}
    </div>
    </>
  )
}

export default CardList