import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Enjoy our Cuisines and Featured Recipies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Our Featured Indian Dish'
              label='Mutter Paneer'
              path='/products'
            />
            <CardItem
              src='images/img-27.jpg'
              text='Our Featured Korean Dish'
              label='Bibimbap'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Crispy on the outside, topped with immense flavour'
              label='ITALIAN'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Our featured indian dish'
              label='INDIAN'
              path='/services'
            />
            <CardItem
              src='images/img-23.jpg'
              text='Creamy rice with fresh seafood'
              label='KOREAN'
              path='/korean'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
