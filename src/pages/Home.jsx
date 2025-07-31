import React from 'react'
import Button from '../components/Button'
import CardList from '../components/CardList';

const Home = () => {
  return (
    <>
   
        <section
          className='h-screen bg-cover bg-center flex items-center justify-between text-white'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='container mx-auto p-4'>
            <h2 className='text-5xl font-bold mb-4 text-blue-950'>
              Welcome to the Card Gallery Na Ja
            </h2>
            <p className='text-black mb-6 text-lg font-semibold'>
              Browse through our collection of cards and discover amazing designs.
            </p>
            <Button nameButton="EXplore Carda" />
          </div>
        </section>

        <section className="bg-white text-center py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
            Welcome to the Vanguard Gay
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Vanguard so funny
          </p>
          <Button nameButton="Let's Go" />
        </section>

        <CardList />
      
    </>
  )
}

export default Home