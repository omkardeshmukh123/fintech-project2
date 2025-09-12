// src/App.jsx
import LoginForm from './components/LoginForm';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <hr /> {/* A horizontal line to separate the components */}
      <TransactionList />
    </div>
  );
}

export default App;