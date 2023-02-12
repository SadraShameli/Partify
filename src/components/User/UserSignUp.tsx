/* eslint-disable @typescript-eslint/no-misused-promises */
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import Card from '../Card';
import { CheckBox } from '../CheckBox';
import { InputField, InputInfoText } from '../InputField';
import { UserSignUpSchema, UserSignUpForm } from './UserTypes';

import { api } from '../../utils/api';
import Routes from '../../utils/routes';
import AppleIcon from '../../assets/icons/Apple';
import GoogleIcon from '../../assets/icons/Google';
import TwitchIcon from '../../assets/icons/Twitch';
import AccountInfoIcon from '../../assets/icons/AccountInfo';

export default function UserSignUp() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');
    const createUserMutation = api.user.createUser.useMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSignUpForm>({ resolver: zodResolver(UserSignUpSchema), defaultValues: { terms: true } });

    const onSubmit: SubmitHandler<UserSignUpForm> = async (data) => {
        const result = await createUserMutation.mutateAsync(data);

        if (result?.error) {
            setErrorMessage(result.error);
        } else {
            await signIn('credentials', {
                username: data.email,
                password: data.password,
                callbackUrl: '/',
                redirect: false,
            });

            await router.push('/');
            setErrorMessage('');
        }
    };

    return (
        <div className='grid place-items-center'>
            <form className='mt-hero w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <h2 className='flex items-center justify-between'>
                        Create your account
                        <AccountInfoIcon />
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

                        <div className='grid grid-cols-2 gap-5'>
                            <InputField autoComplete='given-name' title='First name' {...register('firstName')}>
                                {errors.firstName && <InputInfoText>{errors.firstName?.message}</InputInfoText>}
                            </InputField>

                            <InputField autoComplete='family-name' title='Last name' {...register('lastName')}>
                                {errors.lastName && <InputInfoText>{errors.lastName?.message}</InputInfoText>}
                            </InputField>
                        </div>

                        <InputField autoComplete='email' placeholder='you@domain.com' title='Email address' type='email' {...register('email')}>
                            {errors.email && <InputInfoText>{errors.email?.message}</InputInfoText>}
                            {errorMessage && <InputInfoText>{errorMessage}</InputInfoText>}
                        </InputField>

                        <InputField autoComplete='new-password' title='Password' type='password' {...register('password')}>
                            {errors.password && <InputInfoText>{errors.password?.message}</InputInfoText>}
                        </InputField>

                        <InputField autoComplete='new-password' title='Confirm password' type='password' {...register('confirmPassword')}>
                            {errors.confirmPassword && <InputInfoText>{errors.confirmPassword?.message}</InputInfoText>}
                        </InputField>

                        <CheckBox text='I accept the' {...register('terms')}>
                            <Link className='link-primary pl-1 hover:link' title='Terms and Conditions' type='button' href={Routes.termsAndConditions}>
                                Terms and Conditions
                            </Link>
                        </CheckBox>

                        {errors.terms && <InputInfoText>{errors.terms?.message}</InputInfoText>}

                        <button className='btn-primary btn' title='Create an account' type='submit'>
                            Create an account
                        </button>

                        <div className='flex gap-2'>
                            <p>Already have an account?</p>

                            <Link className='link-primary link' title='Sign in page' type='button' href={Routes.signIn}>
                                Sign in here
                            </Link>
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    );
}
