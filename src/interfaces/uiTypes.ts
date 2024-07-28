/* eslint-disable no-unused-vars */
import { Key, ReactNode } from 'react';

export interface IconProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  badgeContent?: number;
  positionTooltip?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start'
    | undefined;
}

export interface LogoProps {
  imgSrc: string;
  className?: string;
}

export interface CardProps {
  key?: Key;
  children?: ReactNode;
  className?: string;
  [props: string]: any;
}

export interface CounterProps {
  amount: string | number;
}

export interface LocationDropdownProps {
  className?: string;
}

export enum BtnVariant {
  outlined = 'outlined',
  primary = 'primary'
}

export interface BtnProps {
  children?: string | ReactNode;
  variant: BtnVariant;
}
