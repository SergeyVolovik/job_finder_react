import { BtnProps, BtnVariant } from '@/interfaces';

export const Button = ({ variant, children }: BtnProps) => {
  return (
    <button
      className={`px-8 py-3 text-sm normal-case rounded-xl transition ease-in-out ${
        variant === BtnVariant.outlined &&
        'border bottom-1 border-black text-black hover:border-blue hover:text-blue'
      } ${
        variant === BtnVariant.primary &&
        'bg-blue text-white border-none hover:bg-blue/80'
      }`}
    >
      {children}
    </button>
  );
};
