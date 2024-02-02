function Summary({
    total = 0.0,
    tip = 0.0,
    handleClick= ()=> {}
}){
    return(
        <div className="rounded-lg grid grid-row-3 gap-4 p-4 bg-cian-600">
            <div className="flex justify-between items-center">
                <div>
                    <p className={styles.title}>Tip Amount</p>
                    <p className={styles.subtitle}>/ person</p>
                </div>
                <div className={styles.amount}>
                <span className={styles.dollar}>$</span> {tip.toFixed(2)}
                </div>
            </div>
            <div className="flex justify-between items-center text">
                <div>
                    <p className={styles.title}>Total</p>
                    <p className={styles.subtitle}>/ person</p>
                </div>
                <div className={styles.amount}>
                    <span className={styles.dollar}>$</span> {total.toFixed(2)}
                </div>
            </div>
            <button onClick={handleClick} className={`${styles.btn} ${ (total <= 0) && styles.btnDisable}`}>reset</button>
        </div>
    )
}

export default Summary

const styles = {
    title: 'text-cian-100 font-semibold text-sm',
    subtitle: 'text-xs text-cian-400',
    amount: 'text-3xl text-cian-300 font-bold flex items-center gap-1',
    dollar: 'text-lg',
    btn:'bg-cian-300 text-cian-600 rounded py-2 uppercase font-bold',
    btnDisable: 'text-opacity-30 bg-opacity-30'
}