import { signInAction } from '@/actions/auth-action';
import { Button } from '@/components/ui/button';
// import { signIn } from '@/auth';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1>Login</h1>
        <form action={signInAction}>
          <Button className='bg-[#DC4C3E]'>Login</Button>
        </form>
        {/* <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <Button type='submit'>Signin with Google</Button>
        </form> */}
      </main>
    </div>
  );
}
