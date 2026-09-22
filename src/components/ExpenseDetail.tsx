import { formatDate } from "../helpers"
import type { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"

type ExpenseDetailProps = {
    expense: Expense
}

export const ExpenseDetail = ({expense}: ExpenseDetailProps) => {
  return (
    <div className="bg-white border-2 border-gray-200 p-10 shadow-lg w-full flex gap-5 items-center">
        
        <div>


        </div>
        <div>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
        </div>
        
        <AmountDisplay
            amount={expense.amount}
        />
    </div>
  )
}
