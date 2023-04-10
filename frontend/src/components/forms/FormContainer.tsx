const FormContainer = ({ children, title }: { children: React.ReactNode; title: string }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[79vh]">
            <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-700 md:text-5xl text-center mb-4">{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default FormContainer
