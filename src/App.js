import './styles/App.scss';
import LoginPage from './components/LoginPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginPage/>
    </div>
  );
}

export default App;
