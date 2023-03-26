import { LogoProps } from '@/types';

export const Logo = ({ imgSrc, className }: LogoProps) => {
  return <img className={className + 'object-fill'} src={imgSrc} alt="Logo" />;
};
