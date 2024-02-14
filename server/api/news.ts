import type { Card } from '~/types/card';

export default defineEventHandler(() => {
  const cards: Card[] = [
    {
      month: 'Октябрь',
      year: 2022,
      img: '/assets/img/32a4160fa16a4d502e7d7fbacb56798b.jpeg',
      name: 'Marianna Korzhimanova',
      text: 'Latest Magazine',
    },
    {
      month: 'Сентябрь',
      year: 2022,
      img: '/assets/img/8d46bbef1fd9739bbe2751bfef48adc9.jpeg',
      name: 'Nastya Koteneva',
      text: 'В тестовой съемке от Ольга Кулева',
    },
    {
      month: 'Август',
      year: 2022,
      img: '/assets/img/40c6170745203e9375c5edf49735a989.jpeg',
      name: 'Tanya Reutt',
      text: 'Danitlevi',
    },
    {
      month: 'Август',
      year: 2022,
      img: '/assets/img/1df9681787ce0b100893e79442b83e26.jpeg',
      name: 'Nastya Koteneva',
      text: 'В тестовой съемке от Ольга Кулева ',
    },
    // duplicate
    {
      month: 'Октябрь',
      year: 2022,
      img: '/assets/img/32a4160fa16a4d502e7d7fbacb56798b.jpeg',
      name: 'Marianna Korzhimanova',
      text: 'Latest Magazine',
    },
    {
      month: 'Сентябрь',
      year: 2022,
      img: '/assets/img/8d46bbef1fd9739bbe2751bfef48adc9.jpeg',
      name: 'Nastya Koteneva',
      text: 'В тестовой съемке от Ольга Кулева',
    },
    {
      month: 'Август',
      year: 2022,
      img: '/assets/img/40c6170745203e9375c5edf49735a989.jpeg',
      name: 'Tanya Reutt',
      text: 'Danitlevi',
    },
    {
      month: 'Август',
      year: 2022,
      img: '/assets/img/1df9681787ce0b100893e79442b83e26.jpeg',
      name: 'Nastya Koteneva',
      text: 'В тестовой съемке от Ольга Кулева ',
    },
  ];
  return cards;
});
