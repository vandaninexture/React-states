import './App.css';
import MovieTicket from './components/ClassBasedComponent';
import FunctionalBasedComponent from './components/FunctionalBasedComponent';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
      <TitleComponent title="State & Props Examples" />
      
      {/* Title Component for class component */}
      <TitleComponent title="Class Component Using Example" />
      {/* Class component using state & props */}
      <MovieTicket />      
      
      {/* Title Component for functional component */}
      <TitleComponent title="Functional Component Example" />
      {/* Functional component using state & props */}
      <FunctionalBasedComponent />
    </div>
  );
}

export default App;
