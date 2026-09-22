import type { PropsWithChildren } from "react"



export const ErrorMessage = ({children}:PropsWithChildren) => {
  return (
    <p className="text-red-600 text-sm font-bold bg-red-100 text-center rounded-2xl">{children}</p>
  )
}
