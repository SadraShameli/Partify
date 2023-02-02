export default function Card({ children }: { children: React.ReactNode }) {
    return <div className='rounded shadow border p-8'>{children}</div>;
}
