import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

import { useBudget } from '../hooks/useBudget';
import { AmountDisplay } from './AmountDisplay';



export const BudgetTracker = () => {
    const {state, totalExpenses, remainingBudget} = useBudget()
    
    const procentage = +((totalExpenses / state.budget)*100).toFixed(2)
   
    return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-5">

        <div className="flex justify-center">
            <CircularProgressbar
                value={procentage}
                styles={buildStyles({

                    pathColor: procentage === 100 ? 'BC2626' : '#3b82f6',
                    trailColor: '#F5F5F5',
                    textSize: 8,
                    textColor: procentage === 100 ? 'BC2626' : '#3b82f6'
                })}  
                text={`${procentage}% Gastado`}         
            />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
            >
                Resetear App
            </button>

            <AmountDisplay
                label='Presupuesto'
                amount={state.budget}
            />

            <AmountDisplay
                label='Disponible'
                amount={remainingBudget}
            />

            <AmountDisplay
                label='Gastado'
                amount={totalExpenses}
            />

        </div>


    </div>
  )
}
