import React from "react"
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/common/Footer.jsx'
import backgroundImage from './styles/assets/background.png'
import Dashboard from "./components/App/Dashboard"


function App() {

  return (
    <>
        <BrowserRouter>
          <div className="backgroundcover">
          <img className="bgpng" src={backgroundImage} alt="" />
          </div>            
          <Switch>           
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </BrowserRouter>
        <Footer />
        <GlobalStyle />
    </>
  )
}

export default App;
