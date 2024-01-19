'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

type BackButtonProps = {
  label: string;
  href: string;
};

export const BackButton = ({ label, href }: BackButtonProps) => {
  const router = useRouter();
  return (
    <div className='flex w-full items-center justify-center'>
      <Button
        onClick={() => router.push(href)}
        variant='link'
        className='text-muted-foreground text-sm hover:text-primary transition-all'
      >
        {label}
      </Button>
    </div>
  );
};
