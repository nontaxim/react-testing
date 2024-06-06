import './App.css'
// import { Application } from './components/application/application';
// import { Counter } from './components/counter/counter';
import { AppProviders } from './providers/AppProviders'
import { MuiMode } from './components/mui/mui-mode'
// import { Users } from './components/users/users';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        {/* <Users /> */}
      </div>
    </AppProviders>
  )
}

export default App
