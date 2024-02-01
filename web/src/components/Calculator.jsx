import Tips from "./Tips"
import Summary from './Summary'
import  IconPerson from '../assets/images/icon-person.svg'
import  IconDollar from '../assets/images/icon-dollar.svg'
import Input from "./Input"
import { useState } from "react"

function Calculator(){
    
    return (
        <div className="bg-white shadow rounded-t-2xl p-4 grid gap-3 grid-rows-[1fr_3fr_1fr_3fr]">
            <Input Icon={IconDollar}  title="Bill"/>
            <Tips />
            <Input Icon={IconPerson} title="Number of people"/>
            <Summary total={9.00} tip={8.00}/>
        </div>
    )
}

export default Calculator