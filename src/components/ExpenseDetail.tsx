import { useMemo } from "react"
import { formatDate } from "../helpers"
import type { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"

type ExpenseDetailProps = {
    expense: Expense
}

export const ExpenseDetail = ({expense}: ExpenseDetailProps) => {


    const categoryInfo = useMemo(() =>categories.filter(cat => cat.id === expense.category)[0],[expense])

  return (
    <div className="bg-white border-2 border-gray-200 p-10 shadow-lg w-full flex gap-5 items-center">
        
        <div>
            <img src={`/icono_${categoryInfo.icon}.svg`} alt="Imagen de Categoría" className="w-20"/>
        </div>
        
        <div className="flex-1 space-y-3">
            <p className="text-sm text-slate-500 uppercase font-bold">{categoryInfo.name}</p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
        </div>
        
        <AmountDisplay
            amount={expense.amount}
        />
    </div>
  )
}
