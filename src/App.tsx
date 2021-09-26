import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <p>Test</p>
        <br />
        <Button buttonName="Generate" />
      </div>
      
    </div>
  );
}

export default App;
