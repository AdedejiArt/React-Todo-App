import React, {useState} from "react"

import './NewComponent.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import './NewComponent.css'

function NewComponent(props){ 
  const [filteredYear,SetFilteredYear] = useState("2020")
 
    const filterChangeHandler = selectedYear =>{
       SetFilteredYear(selectedYear)
    }

  
    return(

    
     <div> 
     <Card className="expenses">
     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
 
        <ExpenseItem 
       title={props.expenses[0].title}
       amount={props.expenses[0].amount}
       date={props.expenses[0].date}>
        </ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} 
        amount={props.expenses[1].amount} 
        date={props.expenses[1].date}>
        </ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} 
        amount={props.expenses[2].amount} 
        date={props.expenses[2].date}>
       </ExpenseItem>
      <ExpenseItem title={props.expenses[3].title} 
      amount={props.expenses[3].amount} 
      date={props.expenses[3].date}>
      
      </ExpenseItem>

      

    </Card>
</div>)
    
 
    

}

export default NewComponent;