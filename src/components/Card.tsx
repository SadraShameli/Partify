export default function Card({ children }: { children: React.ReactNode }) {
    return <div className='rounded border p-8 shadow'>{children}</div>;
}
