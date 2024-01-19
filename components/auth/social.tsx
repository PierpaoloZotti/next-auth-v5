'use client';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
export const Social = () => {
  return (
    <div className='flex w-full items-center gap-x-2'>
      <Button
        className='w-full'
        size='lg'
        variant='outline'
        onClick={() => {}}
      >
        <FcGoogle className='h-6 w-6' />
      </Button>
      <Button
        className='w-full'
        size='lg'
        variant='outline'
        onClick={() => {}}
      >
        <FaGithub className='h-6 w-6' />
      </Button>
    </div>
  );
};
