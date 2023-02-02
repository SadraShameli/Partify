export default function Checkbox({ title, children }: { title: string; children?: React.ReactNode }) {
    return (
        <div className='flex'>
            <label className='flex items-center justify-center cursor-pointer'>
                <input className='checkbox checkbox-primary' type='checkbox' title={title} />
                <span className='pl-3'>{title}</span>

                {children}
            </label>
        </div>
    );
}
