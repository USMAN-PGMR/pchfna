import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Routes from './pages/Routes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    </>
  );
}

export default App;
