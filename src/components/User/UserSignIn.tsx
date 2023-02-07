/* eslint-disable @typescript-eslint/no-misused-promises */
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Card from '../Card';
import Routes from '../../utils/routes';
import { CheckBox } from '../CheckBox';
import { InputField, InputInfoText } from '../InputField';
import { UserSignInForm, UserSignInSchema } from './UserTypes';

import GoogleIcon from '../../assets/icons/Google';
import AppleIcon from '../../assets/icons/Apple';
import TwitchIcon from '../../assets/icons/Twitch';

export default function UserSignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSignInForm>({ resolver: zodResolver(UserSignInSchema) });

    // eslint-disable-next-line @typescript-eslint/require-await
    const onSubmit: SubmitHandler<UserSignInForm> = async (data) => {
        console.log(data);
    };

    return (
        <div className='grid place-items-center'>
            <form className='mt-hero w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <h2 className='flex items-center justify-between'>
                        Sign in
                        <svg className='fill-current' viewBox='0 0 1024 1024'>
                            <path d='M110.4 923.2c-56.8 0-102.4-48-102.4-106.4V285.6c0-58.4 45.6-106.4 102.4-106.4h800.8c56.8 0 102.4 48 102.4 106.4V816c0 58.4-45.6 106.4-102.4 106.4H110.4z m0-701.6c-34.4 0-61.6 28.8-61.6 64V816c0 35.2 28 64 61.6 64h800.8c34.4 0 61.6-28.8 61.6-64V285.6c0-35.2-28-64-61.6-64H110.4z' />
                            <path d='M541.6 392c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 511.2c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 638.4c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h276.8c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24H541.6zM58.4 886.4c-2.4 0-4.8 0-7.2-0.8-12.8-4-20-18.4-16-32 23.2-78.4 77.6-142.4 148-176l16-8-13.6-12c-40-34.4-63.2-85.6-63.2-139.2 0-100 78.4-180.8 173.6-180.8 96 0 173.6 80.8 173.6 180.8 0 53.6-23.2 104.8-63.2 139.2l-13.6 12 16 8c68 32 132.8 112 157.6 194.4 16 52.8-16.8 36-1.6 16-3.2 4.8-16.8-5.6-32-5.6-12.8 0-19.2 24.8-19.2 22.4-31.2-104-120.8-203.2-217.6-203.2-99.2 0-186.4 67.2-216 166.4-1.6 11.2-11.2 18.4-21.6 18.4z m239.2-498.4c-69.6 0-126.4 58.4-126.4 130.4s56.8 130.4 126.4 130.4c69.6 0 126.4-58.4 126.4-130.4-0.8-72-56.8-130.4-126.4-130.4z' />
                        </svg>
                    </h2>

                    <div className='grid gap-8'>
                        <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('google')}>
                            <GoogleIcon />
                            Sign in with Google
                        </button>

                        <div className='grid gap-5 sm:grid-cols-2 '>
                            <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('apple')}>
                                <AppleIcon />
                                Sign in with Apple
                            </button>

                            <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('twitch')}>
                                <TwitchIcon />
                                Sign in with Twitch
                            </button>
                        </div>

                        <div className='divider'>or</div>

                        <InputField placeholder='you@domain.com' title='Email address' type='email' {...register('email')}>
                            {errors.email && <InputInfoText>{errors.email?.message}</InputInfoText>}
                        </InputField>

                        <InputField placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' title='Password' type='password' {...register('password')}>
                            {errors.password && <InputInfoText>{errors.password?.message}</InputInfoText>}
                        </InputField>

                        <div className='flex justify-between'>
                            <CheckBox text='Remember me' />

                            <Link href={Routes.resetPassword} type='button'>
                                Lost your password?
                            </Link>
                        </div>

                        <button className='btn-primary btn' title='Login to your account'>
                            Login to your account
                        </button>

                        <div className='flex gap-2'>
                            <p>Not registered?</p>

                            <Link className='text-primary ' title='Sign up page' type='button' href={Routes.account}>
                                Create your account
                            </Link>
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    );
}
