import { CounterProps } from '@/types';

export const Counter = ({ amount }: CounterProps) => {
  return <span className="text-gray">{amount}</span>;
};
