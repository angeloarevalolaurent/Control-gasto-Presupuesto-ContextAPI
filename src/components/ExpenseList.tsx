import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"


export const ExpenseList = () => {

    const {state} = useBudget()

    const isEmpty = useMemo(() =>state.expenses.length === 0 ,[state.expenses])
  return (
    
    <div className="mt-10">

        {isEmpty ?
          <p>No hay gasto</p>  
         :
           <>
           
           <p className="text-center text-2xl font-bold my-5 text-gray-500">Listado de Gastos</p>

           {state.expenses.map(expense => (
                <ExpenseDetail
                    key={expense.id}
                    expense={expense}
                />
           ))}
           
           </>
        }

    </div>    

  )
}
