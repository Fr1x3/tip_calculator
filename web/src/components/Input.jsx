import  IconDollar from '../assets/images/icon-dollar.svg'
function Input({
    numberValue= 0,
    handleChange= () => {},
    Icon,
    title,
    name
}){

    return (
        <div className="flex flex-col gap-2">
            <label className="text-cian-500 font-bold">{title}</label>
            <div className=" relative p-0  ">
                <span className="absolute top-1/2 -translate-y-1/2 left-3"><img src={Icon}/></span>
                <input 
                    name={name}
                    type="number" 
                    value={numberValue}
                    onChange={handleChange}
                    className="text-end bg-cian-100 m-0 py-1 text-2xl px-5 font-semibold focus:outline-none focus:border-2 focus:border-cian-300 hover:border-2 hover:border-cian-300 text-cian-600 w-full rounded"/>
            </div>
        </div>
    )
}

export default Input