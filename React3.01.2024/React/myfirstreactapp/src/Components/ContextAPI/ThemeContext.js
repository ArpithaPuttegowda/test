import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
const useTheme = () => {
  return useContext(ThemeContext);
};

// Step 4: Use the context in your components
const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
};

const ThemedComponent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee' }}>
      Themed Component ({theme})
    </div>
  );
};

// Step 5: Wrap your components with the provider
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggler />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
