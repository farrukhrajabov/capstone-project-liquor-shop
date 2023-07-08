import { HashRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0.config';
import routes from "./config/routes";
import './App.css'
import { Footer } from "./components/Footer";



function App() {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <HashRouter>
        <ShoppingCartProvider>
  
          <Navbar />
            <Provider store={store}>
              <Container className="mb-4">
                <Routes>
                  { routes.map((route: any, index: any) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <route.component />
  
                      }
                   />
                ))  }
               </Routes>
              </Container>
              <Footer />
           </Provider>
        </ShoppingCartProvider>
      </HashRouter>
    </Auth0Provider>
    
  );
} 
  export default App
 

