import Tips from "./Tips"
import Summary from './Summary'
import  IconPerson from '../assets/images/icon-person.svg'
import  IconDollar from '../assets/images/icon-dollar.svg'
import Input from "./Input"
import { useState } from "react"

function Calculator(){
    const [data, setData] = useState({
        bill: 0,
        people: 0,
        tipRate: 0.0,
    })

    const avgBillPaid = (data.bill > 0 && data.people > 0 ) && data.bill / data.people 
    const avgTipPaid = avgBillPaid * data.tipRate/100
    const avgTotalPaid = avgBillPaid + avgTipPaid
    
    function handleRate(rate){
        setData({...data, tipRate: rate})
    }

    function onInputChanged(event){
        const {value, name} = event.target
        setData({...data, [name]: value })
    }

    function reset(){
        setData({
            bill: 0,
            people: 0,
            tipRate: 0.0,
        })
    }

    return (
        <div className="bg-white shadow rounded-t-2xl p-4 grid gap-3 grid-rows-[1fr_3fr_1fr_3fr]">
            <Input name='bill' Icon={IconDollar}  title="Bill" numberValue={data.bill} handleChange={onInputChanged} />
            <Tips handleTipSelected={handleRate}  rate={data.tipRate}/>
            <Input name='people' Icon={IconPerson} title="Number of people" numberValue={data.people} handleChange={onInputChanged}/>
            <Summary total={avgTotalPaid} tip={avgTipPaid} handleClick={reset}/>
        </div>
    )
}

export default Calculator