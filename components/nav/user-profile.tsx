'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { signOutAction } from '@/actions/auth-action';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function UserProfile() {
  const session = useSession();

  const imageUrl = session?.data?.user?.image;
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='hover:cursor-pointer'>
        <Button
          variant={'secondary'}
          className='flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full bg-white'
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${name} user profile image`}
              width={24}
              height={24}
              className='rounded-full'
            />
          )}
          <p className='truncate'>{email}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuItem className='lg:w-full px-28 flex justify-center items-center'>
          <form action={signOutAction}>
            <Button
              className='hover:text-primary text-center'
              type='submit'
              variant={'ghost'}
            >
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
