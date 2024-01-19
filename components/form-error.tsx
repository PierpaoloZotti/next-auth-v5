import { AlertTriangle } from 'lucide-react';

type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className='bg-destructive/40 p-2.5 rounded-md flex items-center space-x-2'>
      <AlertTriangle className='text-sm text-destructive' />
      <p className='text-sm text-destructive'>{message}</p>
    </div>
  );
};
