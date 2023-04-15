import { FC } from 'react';

import { SVG_LOGO_SIZE } from './constants';
import { LogoIconStyled } from './styles';
import { LogoItemProps } from './types';

export const LogoItem: FC<LogoItemProps> = ({ size }) => (
  <LogoIconStyled
    size={size}
    viewBox={`0 0 ${SVG_LOGO_SIZE.width} ${SVG_LOGO_SIZE.height}`}
  >
    <path
      className='color-1'
      fill='#C08D2C'
      d='M350.56.58c94.31,6,160.37,73.07,180.53,129.82-11-2.94-21.8-5.47-32.93-6.24-5.14-.36-10.31-.77-15.46-.67-3.45.07-5.42-1.28-7.28-4C423,41.53,317.17,22,240.69,76.22c-19.67,14-35.26,31.64-47.8,52.31a159.71,159.71,0,0,0-21.57,62.19c-.45,3.28-1.87,3.91-4.83,3.89-16.16-.12-32.33-.36-48.48,0-23.72.55-44.05,9-58.46,28.41C43,245.33,40,269.91,51.35,295.23c11.08,24.77,31,38.4,58,41.6,7.89.93,15.61-.17,23.35-1.36a5,5,0,0,0,2.94-1.6Q226.29,242.9,317,152c1.46-1.46,2.88-2.48,5.15-2.47,20.32.1,40.65.07,61,.1.29,0,.57.22,1.39.57-1.41,1.52-2.66,2.95-4,4.29q-107.08,107.1-214,214.3c-6.6,6.64-13.73,10.66-22.73,12.15-2.06.34-4.35.2-6.17,1.61h-38c-21.31-1.73-39.72-10.61-56-23.83C21.66,340.88,7.36,318,1.71,290.21-.41,279.77,0,269,.13,258.38c.36-26.21,9.67-49.29,26.35-69,26.09-30.88,60-45,100.28-43.17,4.43.2,6.18-1.21,7.54-5.07,10.82-30.82,27.65-58.06,51-80.85,31.92-31.18,69.88-51.2,114.14-58.63a69.26,69.26,0,0,1,11.41-1c3.54-.15,7.08.32,10.61-.32a6.74,6.74,0,0,1,1.73-.18C332.3.4,341.45-.57,350.56.58Z'
    />
    <path
      className='color-2'
      fill='#FFFFFF'
      d='M179.66,382.53c1.2-1.35,2.33-2.76,3.6-4,58-58,116.11-115.77,173.77-174,17.69-17.87,35.79-35.32,53.4-53.25a8.08,8.08,0,0,1,6.24-2.72c15.52-.13,31.05.31,46.58.07,25.36-.39,48,7.72,68.09,22.47,25.29,18.57,40.45,43.72,46.22,74.54,1.42,2.17-.28,4.8,1,7h0c1.16,8.23.22,16.49.53,24.73,0,.53,0,1.07,0,1.6-.68,2.19-.42,4.46-.5,6.7a8.6,8.6,0,0,1-.18,1.43c-.51,1.62-.33,3.34-.76,5a107.36,107.36,0,0,1-16.72,40.22c-16.2,24.11-38.41,40-66.13,48.44-4,1.2-8.17.89-12.18,1.86h-189c-1-2.78,1-4.47,2.55-6,13.32-13.28,26.52-26.69,40-39.85,2.67-2.61,5.91-2.76,9.28-2.76h65.95c20,0,40-.13,59.95.07a42.81,42.81,0,0,0,18.39-3.91C536.31,309,545,250.37,511.47,217.13c-14.18-14-31.1-20.65-50.78-20.91-7.16-.09-14.32.05-21.48,0a11.65,11.65,0,0,0-8.95,3.55c-30.83,30.88-62.12,61.31-92.4,92.71-28.1,29.13-57.15,57.3-85.45,86.21a24.59,24.59,0,0,1-5.76,3.88Z'
    />
  </LogoIconStyled>
);
