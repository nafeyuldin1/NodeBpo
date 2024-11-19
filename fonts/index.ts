import { DM_Sans

  , League_Spartan



} from 'next/font/google';

const unbounded = League_Spartan

({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

 
const CaladeaFont = DM_Sans
({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

export const CaladeaF  =  CaladeaFont.className;
 
export const Rancher  =  unbounded.className;