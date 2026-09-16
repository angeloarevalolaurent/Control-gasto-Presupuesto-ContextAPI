
import { useMemo, useState } from "react"

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)


    const handleChange = ( e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)  => {
        setBudget(e.target.valueAsNumber)
    }

    console.log(budget);
    

    const isValid = useMemo(() =>{
        return isNaN(budget) || budget <= 0
      }, [budget])
  return (
    <>
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl  text-blue-600 font-bold text-center">
                    Definir Presupuesto
                </label>

                <input 
                    id="budget"
                    type="number" 
                    className="w-full bg-white border border-gray-200 p-2 hover:border-blue-700"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                    />
            </div>

            <input 
                value='Definir Presupuesto'
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer w-full p-2 font-bold uppercase disabled:opacity-40"
                disabled= {isValid}
                
                />
        </form>
    </>
  )
}
