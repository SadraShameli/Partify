function ActiveStar(key: number) {
    return (
        <svg key={key} aria-hidden='true' className='w-5 h-5 text-yellow-400 fill-current' viewBox='0 0 20 20'>
            <title>First star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
    );
}

function DisabledStar(key: number) {
    return (
        <svg key={key} aria-hidden='true' className='dark:text-gray-500 w-5 h-5 text-gray-300 fill-current' viewBox='0 0 20 20'>
            <title>Fifth star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
    );
}

export function GenerateRatingStars({ count }: { count: number }) {
    const activeStars = Array.from({ length: count }, (_, index) => ActiveStar(index));
    const disabledStars = Array.from({ length: 5 - count }, (_, index) => DisabledStar(index));

    return (
        <>
            {activeStars}
            {disabledStars}
        </>
    );
}
