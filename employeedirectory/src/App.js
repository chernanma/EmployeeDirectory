import React from "react";

import Employees from "./pages/Employees";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (    
      <div>       
        <Wrapper>
          <Employees></Employees>  
          <Footer></Footer>
        </Wrapper>
      </div>   
  );
}

export default App;
