import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Serve_cards() {
  return (
    <div className='cards'>
      <h1>The Most Authentic Indian Recipies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Recipe: firstly, in a large bowl soak 3 cup idli rice and 1 tsp methi for 5 hours.
              also, soak 1 cup urad dal for 3 hours.
              drain off the urad dal and transfer to the grinder. you can use mixi if you are comfortable.
              grind to smooth paste adding water as required.
              after grinding for 40 minutes, the batter will turn soft and fluffy.
              scoop out urad dal batter and keep aside.
              in the same grinder add soaked rice and 1 cup poha.
              also, add water as required and grind the batter.
              grind to a slightly coarse batter. if you grind to a very smooth paste, then the dosa will be very soft and not crisp.
              transfer the batter to the same vessel of urad dal batter.
              mix well making sure everything is well combined.
              cover and allow to ferment for 8 hours in a warm place. after 8 hours, the batter would have doubled indicating its well fermented.
              now mix the batter gently and use the batter to prepare dosa.
              finally, the dosa batter can be stored in the refrigerator for up to a week and use to make weeks breakfast.'
              label='Dosa'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Recipe: firstly, knead the dough for 10 minutes with ingredients listed for dough.
              cover with a moist cloth and rest for 2 hours in warm place.
              after 2 hours, knead the dough slightly. to remove if any air present in the dough.
              pinch a ball sized dough.
              gently roll to oval shape using rolling pin. make sure you do not make too thin nor thick. and also keep the size in mind. it should not be larger than your tawa size.
              grease with water over naan.
              furthermore, slowly flip over and put it on hot tawa and slightly press.
              now after a minute, flip the tawa upside down and cook naan directly on flame till they turn golden brown.
              also brush with some butter mixed with coriander leaves.
              gently scrape the naan from bottom and remove.
              finally, serve butter naan hot with your favourite curry like mattar paneer.'
              label='Naan'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Recipe: firstly, in a pan heat 2 tbsp oil. add 2 onion, 4 cloves garlic, and 2 inch ginger.
              saute until the onions turn golden brown.
              add 4 tomatoes, 2 tbsp cashew, and saute until the tomato turn soft and mushy.
              cool completely, and transfer to a mixer jar.
              grind to smooth paste without adding water.
              to prepare curry, heat 2 tbsp oil. add 1 tsp ghee, 1 tsp cumin, ½ inch cinnamon, 3 pods cardamom and 2 chilli. saute until the spices turn aromatic.
              keeping the flame on low, add ½ tsp turmeric, 1 tsp chilli powder, ½ tsp coriander powder, ½ tsp cumin powder, and ½ tsp garam masala.
              saute until the spices turn aromatic.
              now add prepared gravy and cook well.'
              label='Mutter Paneer'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Recipe: firstly, in a large bowl soak 1 cup urad dal for 2 hours.
              also, soak 2 cup idli rice for hours.
              after, 1 hour of soaking of urad dal, drain off the water and transfer to the grinder.
              grind for 45 minutes adding water as required. use urad dal soaked water for grinding, as it helps in fermentation.
              scrape the sides and grind until the batter turns soft and fluffy.
              transfer the batter to a large vessel and keep it aside.
              in the same grinder add soaked rice and grind.
              grind to a coarse paste adding water as required.
              transfer the rice batter to the same vessel.
              mix well making sure everything is well combined. mixing the batter with hand helps to aid fermentation.
              cover and ferment in a warm place for 8 hours.
              the batter is well fermented when it has doubled in volume.
              mix the batter gently, without disturbing the air pockets. add 2 tsp salt and mix gently.
              grease the idli plate with oil and pour the batter.
              steam the idli for 10 minutes or until the toothpick inserted comes out clean.
              finally, enjoy soft idli with chutney and sambar.'
              label='Idli'
              path='/products'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Recipe: firstly, in a large bowl take 1 cup white peas and soak in enough water for 8 hours.
              take soaked peas in the cooker and add 1 potato, ½ tsp turmeric and ½ tsp clove.
              add 3 cup water and pressure cook for 6 whistles.
              mash the potato slightly, adjusting the consistency as required. keep aside.
              now prepare masala paste by heating, 2 tbsp oil and saute 1 tsp fennel.
              also add 1 onion, 1 tsp ginger garlic paste and saute slightly.
              further, add 1 tomato and saute until the tomatoes turn soft and mushy.
              cool completely and transfer to a blender.
              add ½ cup mint and ¾ cup coriander.
              blend to smooth paste adding water if required. keep aside.
              in a large kadai heat 2 tbsp oil and ¾ tsp cumin, 1 bay leaf and 1 inch cinnamon. saute until spices turn aromatic.
              now add ½ tsp chilli powder, ½ tsp coriander powder, ¼ tsp cumin powder and ½ tsp garam masala.
              saute on low flame until spices turn aromatic.
              further, add in boiled white peas and mix well.
              add 1 cup water and 1 tsp salt.
              mix well adjusting consistency as required.
              cover and simmer for 10 minutes, or until the flavours are well absorbed.
              masala puri curry is ready to enjoy.
              masala puri assembling:
              firstly, in a plate crush 4 puri used to prepare pani puri.
              pour in a ladleful of prepared masala puri gravy.
              now top with 1 tsp tamarind chutney, 1 tsp green chutney and 2 tbsp spicy sev.
              also, top with 2 tbsp tomato, 2 tbsp onion and 1 tsp coriander.
              finally, enjoy masala puri recipe sprinkling chaat masala if required.'
              label='Masala Puri'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Serve_cards;
