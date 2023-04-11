const Input = ({ type, placeholder, name, id, value, onChange, onBlur }: { type: string; placeholder: string; name?: string; id?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void }): JSX.Element => {
    return (
        <>
            <input type={type} className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 my-2" placeholder={placeholder} name={name} id={id} value={value} onChange={onChange} onBlur={onBlur} />
        </>
    )
}

export default Input
