import React, { useState } from 'react';
import './App.css';
import Form from './components/TransactionForm';
import SearchBar from './components/SearchBar'; 


function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container"> {/* Container to span the whole width of the page */}
      <h1 className="App">The Royal Bank of Flatiron</h1>
      <SearchBar value={searchTerm} onChange={(value) => setSearchTerm(value)} /> {/* Pass onChange prop */}
      <Form addTransaction={addTransaction} />
      
    </div>
  );
}

export default App;















































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
