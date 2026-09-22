import { useMemo } from "react"
import { formatDate } from "../helpers"
import type { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"


import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'

import 'react-swipeable-list/dist/styles.css'

type ExpenseDetailProps = {
    expense: Expense
}

export const ExpenseDetail = ({expense}: ExpenseDetailProps) => {

    const categoryInfo = useMemo(() =>categories.filter(cat => cat.id === expense.category)[0],[expense])


const leadingActions = () => (
    <LeadingActions>
        <SwipeAction
            onClick={() => {
                // Aquí irá la lógica para abrir el modal con los datos para editar
            }}
        >
            Actualizar
        </SwipeAction>
    </LeadingActions>
)

const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
            onClick={() => {
                // Aquí irá la función para dispatch({ type: 'delete-expense', payload: { id: expense.id } })
            }}
            destructive={true}
        >
            Eliminar
        </SwipeAction>
    </TrailingActions>
)

  return (

    <SwipeableList>
        <SwipeableListItem
            maxSwipe={30}
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            
        >

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

        </SwipeableListItem>

    </SwipeableList>
  )
}
