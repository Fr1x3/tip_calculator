import { useState } from "react"

function Tips(){
    const [customTipRate, setCustomTipRate] = useState(0.0)
    const [selectedTipRate, setSelectedTipRate] = useState(0.0)
    const [isSelectedId, setIsSelectedId] = useState(-1)
    // set the tip rate selected or custom
    //const tipRate = customTipRate || selectedTipRate

    function onCustomTipChanged(event){
        setCustomTipRate(event.target.value)
        setSelectedTipRate(0.0)
        setIsSelectedId(-1)
    }

    function onTipSelected(tip){
        setSelectedTipRate(tip.rate)
        setIsSelectedId(tip.id)
        setCustomTipRate(0.0)   
    }

    return (
        <div>
            <h1 className={styles.title}>Select Tip %</h1>
            <div className={styles.container}>
                {tipRates.map( tip => (
                    <div 
                        key={tip.id} 
                        onClick={() => onTipSelected(tip)}
                        className={`${styles.selectBox} ${(isSelectedId === tip.id) && styles.activeSelectBox}`}
                    >
                        {tip.rate}%
                    </div>
                ))}
                <input 
                    type="number" 
                    placeholder="Custom" 
                    className={styles.input}
                    value={customTipRate > 0 ? customTipRate : ''}
                    onChange={onCustomTipChanged}
                />
            </div>
        </div>
    )
}

export default Tips

const styles = {
    input: "py-1 rounded text-center placeholder:text-cian-600 placeholder:font-semibold bg-cian-100 hover:border-2 hover:border-cian-300 focus:border-cian-200 ",
    title: "mb-2 text-cian-500 font-semibold",
    selectBox: "text-center bg-cian-600 font-semibold text-cian-200 rounded py-1 cursor-pointer hover:bg-cian-300 hover:text-cian-600",
    container: "grid gap-4 grid-cols-2 text-2xl",
    activeSelectBox: "bg-cian-300 text-cian-600",
}

const tipRates = [
    { 
        id: 0,
        rate: 5
    },
    {
        id: 1,
        rate: 10
    },
    {
        id: 2,
        rate: 15
    },
    {
        id: 3,
        rate: 25
    },
    {
        id: 4,
        rate: 50
    },
]

