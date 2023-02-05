export default function Checkbox({ title, children }: { title: string; children?: React.ReactNode }) {
    return (
        <div className='flex'>
            <label className='flex cursor-pointer items-center justify-center'>
                <input className='checkbox-primary checkbox' type='checkbox' title={title} />
                <span className='pl-3'>{title}</span>

                {children}
            </label>
        </div>
    );
}
