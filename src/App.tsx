import './App.css';
import { AppThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './routes';

function App() {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  )
}

export default App;
