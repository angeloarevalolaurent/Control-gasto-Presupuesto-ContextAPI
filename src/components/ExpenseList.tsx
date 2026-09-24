import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"


export const ExpenseList = () => {

    const {state} = useBudget()

    const filterCategory = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() =>filterCategory.length === 0 ,[state.expenses])
  return (
    
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">

        {isEmpty ?
          <p>No hay gasto</p>  
         :
           <>
           
           <p className="text-center text-2xl font-bold my-5 text-gray-500">Listado de Gastos</p>

           {filterCategory.map(expense => (
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
