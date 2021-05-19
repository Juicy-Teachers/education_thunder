import './App.css';
import React, {useState} from 'react';
// import { createGlobalStyle } from 'styled-components';
import MainPage from './components/MainPage/MainPage';
import IntroPage from './components/IntroPage/IntroPage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TheContext from './context/index';
import CreateQuiz from './components/CreateQuiz/CreateQuiz';
// import backgroundImage from '../src/resources/QuisbeeBackground.png';

// const GlobalStyle = createGlobalStyle`
// body {
//   margin: 0;
// 	box-sizing: border-box;
//   background-image: url(${backgroundImage});
//   width: 100vw;
// }
// `;

const routes = [
  {
    Component: MainPage,
    key: 'MainPage',
    path: '/main'
  },
  {
    Component: CategoryPage,
    key: 'CategoryPage',
    path: '/category'
  },
  {
    Component: CreateQuiz,
    key: 'CreateQuiz',
    path: '/create'
  },
  {
    Component: IntroPage,
    key: 'IntroPage',
    path: '/'
  }
]

function App() {
  const [category, setCategory] = useState()

  return (
    <TheContext.Provider value={{
      category: category,
      setCategory: setCategory
    }}>
      <Router>
        {/* <GlobalStyle /> */}
        
        <Switch>
          {
            routes.map(({Component, key, path}) => {
              return(
                <Route 
                    key={key}
                    path={path}
                    component={() => <Component page={key} />}
                />
              )
            })
          }
        </Switch>
      </Router>
    </TheContext.Provider>
  );
}

export default App;
