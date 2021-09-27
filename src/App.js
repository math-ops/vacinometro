import React from "react"
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/common/Footer.jsx'
import Vacineflex from './components/Dashboard/index.jsx'
import backgroundImage from './styles/assets/background.png'


function App() {

  return (
    <>
        <BrowserRouter>
          <div className="backgroundcover">
          <img className="bgpng" src={backgroundImage} alt="" />
          </div>            
          <Switch>
            <Route path="/" exact component={Vacineflex} />
          </Switch>
        </BrowserRouter>
        <Footer />
        <GlobalStyle />
    </>
  )
}

export default App;
