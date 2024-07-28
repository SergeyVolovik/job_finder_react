import { CounterProps } from '@/interfaces';

export const Counter = ({ amount }: CounterProps) => {
  return <span className="text-gray">{amount}</span>;
};
