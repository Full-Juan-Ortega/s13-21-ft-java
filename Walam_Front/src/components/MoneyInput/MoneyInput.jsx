import { useState } from 'react'

export default function MoneyInput() {    
    const [amount, setAmount] = useState('')

    const handleChange = (event) => {
        const inputAmount = event.target.value 
        let sanitizedAmount = inputAmount.replace(/\D/g, '')    
        setAmount(sanitizedAmount)   
    }   
 
  
 return (
    <div className="flex items-center">      
      <input
        type='text'
        value={amount === '' ? '' : '$' + amount}        
        onChange={handleChange}        
        placeholder="$000"
        className="text-end py-1 w-10 sm:w-20 max-w-48 focus:outline-none"        
      />
      <span>.00</span>       
    </div>
  ) 
}