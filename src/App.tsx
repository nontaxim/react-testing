import './App.css';
// import { Application } from './components/application/application';
// import { Counter } from './components/counter/counter';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './components/mui/mui-mode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
