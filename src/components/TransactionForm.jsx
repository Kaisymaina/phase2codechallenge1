// import React, { useState } from "react";
// import './App.css';
// import Table from "./Table";

// function Form() {
//   const [transactions, setTransactions] = useState([]);
//   const [date, setDate] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTransaction = {
//       date,
//       description,
//       category,
//       amount
//     };
//     setTransactions([...transactions, newTransaction]);
//     setDate('');
//     setDescription('');
//     setCategory('');
//     setAmount('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="dateInput">Date</label>
//         <input type="date" id="dateInput" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />

//         <label htmlFor="descriptionInput">Description</label>
//         <input type="text" id="descriptionInput" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

//         <label htmlFor="categoryInput">Category</label>
//         <input type="text" id="categoryInput" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />

//         <label htmlFor="amountInput">Amount</label>
//         <input type="number" id="amountInput" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />

//         <button type="submit" className="submit-button">Add Transaction</button>
//       </form>

//       <div>
//         <Table transactions={transactions} />
//       </div>
//     </div>
//   );
// }

// export default Form;

import React, { useState } from "react"

import Table from "./TransactionTable";
function Form(){
const handleSubmit=(e)=>{
    e.preventDefault();
    const newTransaction={
      date,
        description,
        category,
        amount
    };
    setTransactions([...transactions,newTransaction]);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }
  const [transactions,setTransactions]=useState([]);
    const [date,setDate]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [amount,setAmount]=useState('');
    return(
        <div>
            <form onSubmit={handleSubmit}>
    <label>Date</label>
    <input type="date" placeholder='Date'value={date} onChange={(e)=>setDate(e.target.value)}/>
    <label></label>
    <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
  <label></label>
  <input type="text" placeholder='Category'value={category} onChange={(e)=>setCategory(e.target.value)} />
  <label ></label>
  <input type="number" placeholder='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
  <button type="submit" class="button">Add Transaction</button>
  </form>
  <div>
  <Table transactions={transactions}/>
  </div>
  </div>
    );}
  export default Form;
