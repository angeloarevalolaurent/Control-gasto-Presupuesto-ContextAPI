import { useReducer,useMemo, createContext, type ReactNode } from "react";
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budgett-reducer";


type BudgetContextProps = {
    state: BudgetState
    dispatch:React.ActionDispatch<[action: BudgetActions]>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)


export const BudgetProvider = ({children}:BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo(()=>state.expenses.reduce((total, expense)=> Number(expense.amount) + total,0) ,[state.expenses])
    const remainingBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                remainingBudget,
                totalExpenses
            }}
         
        >
            {children}
        </BudgetContext.Provider>
    )
}