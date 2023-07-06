'use client';

import { FC, useState } from 'react';

const Page: FC = () => {
  const [input, setInput] = useState<string>('');

  return (
    <div className='container flex items-center h-full max-w-3xl mx-auto'>
      <div className='relative bg-white w-full h-fit p-4 rounded-lg space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Create a community</h1>
        </div>

        <hr className='bg-zinc-500 h-px' />

        <div>
          <p className='text-lg'></p>
        </div>
      </div>
    </div>
  );
};

export default Page;
