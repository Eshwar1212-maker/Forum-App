import { FC } from 'react'
import { Icons } from './Icons'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'

interface SignInProps {
  
}
const SignIn: FC<SignInProps> = ({
  
}) => {
  return (
    <div className='container mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[400px]'>
        <div className='flex flex-col space-y-2 text-center'>
            <Icons.logo className='mx-auto h-6 w-6' />
                <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
                <UserAuthForm className=''/>
                <p className='px-8 text-center text-sm text-zinc-700'>
                    New to Breadit? Sign up or sign in here!
                </p>

        </div>      
    </div>
  )
}

export default SignIn