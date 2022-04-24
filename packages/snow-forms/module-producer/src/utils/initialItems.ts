import { Fields } from '@snow-forms/types';

export const initialItems: Fields = [
  {
    id: 'Opremanje Prostora',
    children: [],
    name: 'Stambeni objekat | Poslovni prostor',
    type: 'input',
  },
  {
    id: 'Prostor',
    children: [
      { id: 'Kuhinja', children: [], type: 'checkbox', name: 'Kuhinja' },
      { id: 'Kupatilo', children: [], type: 'checkbox', name: 'Kupatilo' },
      {
        id: 'Kancelarija',
        children: [],
        type: 'checkbox',
        name: 'Kancelarija',
      },
      { id: 'Ostalo', children: [], type: 'checkbox', name: 'Ostao' },
    ],
    name: 'Collections',
    type: 'select',
  },
  {
    id: 'Ime i prezime',
    name: 'Ime i prezime',
    type: 'Input',
    children: [],
  },

  {
    id: 'Email',
    name: 'Email',
    type: 'Input',
    children: [],
  },

  {
    id: 'Br Telefona',
    name: 'Br Telefona',
    type: 'Input',
    children: [],
  },
  {
    id: 'Vreme i datum',
    children: [
      { id: 'Datum', name: 'Datum', type: 'input', children: [] },
      { id: 'Vreme', name: 'Vreme', type: 'input', children: [] },
    ],
    name: 'Vreme i datum',
    type: 'select',
  },
];
