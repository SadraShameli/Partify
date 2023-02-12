/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import Card from '../Card';
import { CheckBox } from '../CheckBox';
import { InputField, InputInfoText } from '../InputField';
import { UserSignInForm, UserSignInSchema } from './UserTypes';

import Routes from '../../utils/routes';
import AppleIcon from '../../assets/icons/Apple';
import GoogleIcon from '../../assets/icons/Google';
import TwitchIcon from '../../assets/icons/Twitch';
import SignInIcon from '../../assets/icons/SignIn';

export default function UserSignIn() {
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSignInForm>({ resolver: zodResolver(UserSignInSchema) });

    const onSubmit: SubmitHandler<UserSignInForm> = async (data) => {
        const result = await signIn('credentials', {
            username: data.email,
            password: data.password,
            callbackUrl: '/',
            redirect: false,
        });

        if (result?.ok) {
            setErrorMessage('');
        } else if (result?.error) {
            setErrorMessage(result.error);
        }
    };

    return (
        <div className='grid place-items-center'>
            <form className='mt-hero w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <h2 className='flex items-center justify-between'>
                        Sign in
                        <SignInIcon />
                    </h2>

                    <div className='grid gap-5'>
                        <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('google', { callbackUrl: '/' })}>
                            <GoogleIcon />
                            Sign in with Google
                        </button>

                        <div className='grid gap-5 sm:grid-cols-2 '>
                            <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('apple', { callbackUrl: '/' })}>
                                <AppleIcon />
                                Sign in with Apple
                            </button>

                            <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('twitch', { callbackUrl: '/' })}>
                                <TwitchIcon />
                                Sign in with Twitch
                            </button>
                        </div>

                        <div className='divider'>or</div>

                        <InputField placeholder='you@domain.com' autoComplete='email' title='Email address' type='email' {...register('email')}>
                            {errors.email && <InputInfoText>{errors.email?.message}</InputInfoText>}
                            {errorMessage && <InputInfoText>{errorMessage}</InputInfoText>}
                        </InputField>

                        <InputField
                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                            autoComplete='current-password'
                            title='Password'
                            type='password'
                            {...register('password')}
                        >
                            {errors.password && <InputInfoText>{errors.password?.message}</InputInfoText>}
                        </InputField>

                        <div className='flex justify-between'>
                            <CheckBox className='radio-xl' text='Remember me' />

                            <Link className='link-primary hover:link' href={Routes.resetPassword} type='button'>
                                Lost your password?
                            </Link>
                        </div>

                        <button className='btn-primary btn' title='Login to your account' type='submit'>
                            Login to your account
                        </button>

                        <div className='flex gap-2'>
                            <p>Not registered?</p>

                            <Link className='link-primary link' title='Sign up page' type='button' href={Routes.account}>
                                Create your account
                            </Link>
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    );
}
