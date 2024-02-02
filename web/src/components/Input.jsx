import  IconDollar from '../assets/images/icon-dollar.svg'
function Input({
    numberValue= 0,
    handleChange= () => {},
    Icon,
    title,
    name
}){

    return (
        <div className={styles.container}>
            <label className={styles.title}>{title}</label>
            <div className={styles.wrapper}>
                <span className={styles.icon}><img src={Icon}/></span>
                <input 
                    name={name}
                    type="number" 
                    value={numberValue}
                    onChange={handleChange}
                    className={styles.input}/>
            </div>
        </div>
    )
}

export default Input

const styles = {
    container: "flex flex-col gap-2",
    title: "text-cian-500 font-bold",
    wrapper: "relative p-0",
    icon: "absolute top-1/2 -translate-y-1/2 left-3",
    input: "text-end bg-cian-100 m-0 py-1 text-2xl px-5 font-semibold focus:outline-none focus:border-2 focus:border-cian-300 hover:border-2 hover:border-cian-300 text-cian-600 w-full rounded"
}