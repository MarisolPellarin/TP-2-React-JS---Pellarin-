import bodaImg from './assets/img/boda1.jpeg';
import quinceImg from './assets/img/quince1.jpeg';
import bautismoImg from './assets/img/bautismo1.jpeg';
import eventoImg from './assets/img/evento1.jpeg';



const products = [
  {
    id: '1',
    title: 'Invitación de boda clásica',
    category: 'boda',
    price: 1500,
    image: bodaImg,
  },
  {
    id: '2',
    title: 'Invitación de 15 años floral',
    category: '15años',
    price: 1300,
    image: quinceImg,
  },
  {
    id: '3',
    title: 'Invitación para bautismo dulce',
    category: 'bautismos',
    price: 1100,
    image: bautismoImg,
  },
  {
    id: '4',
    title: 'Invitación para evento corporativo',
    category: 'eventos',
    price: 1700,
    image: eventoImg,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};
