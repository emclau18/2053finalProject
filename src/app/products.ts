export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Christian Louboutin Red Bottom Heels',
    price: 795,
    description: 'Christian Louboutin half Orsay Iriza pump in black shiny nappa leather is a timeless classic. Featuring a sensational cutout vamp and 85mm of stiletto heel for an exquisite silhouette of the pointy-toe pump. Expertly placed curves revealing the foot’s natural arch ensure every confident step.'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Old reliable.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/