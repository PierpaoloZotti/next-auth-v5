import { CheckCircle } from 'lucide-react';

type FormSuccessProps = {
  message?: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className='bg-green-500/50 p-2.5 rounded-md flex items-center space-x-2'>
      <CheckCircle className='text-sm text-green-600' />
      <p className='text-sm text-green-600'>{message}</p>
    </div>
  );
};
