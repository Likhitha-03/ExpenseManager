import React, { useContext, useState } from "react"
import {v4 as uuidV4 } from "uuid"

const ExpenseContext = React.createContext()

export function useExpenses(){
    return useContext(ExpenseContext)
}

export const ExpenseProvider = ({children}) =>{
    const [expenses,setExpenses] = useState([])

    function addExpense({name,category,dateofexpense,amount,createdby}){
        setExpenses(prevExpenses =>{
            if(prevExpenses.find(expense =>expense.name === name)){
                return prevExpenses
            }
            return[...prevExpenses, {id:uuidV4() , name , category , dateofexpense ,amount ,createdby }]
        })
    }
    function deleteExpense( id ){
        setExpenses(prevExpenses =>{
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

    return (
        <ExpenseContext.Provider value={{
            expenses,
            addExpense,
            deleteExpense,
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}