import styled from "styled-components";



function App() {
  return (
    <div>
      <NavBar>
    
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

      </NavBar>

  


    </div>
  );
}

export default App;

const NavBar = styled.nav`
  width: 100vw;
  background-color: aliceblue;
  box-sizing: border-box;
  color: aliceblue;
  padding: 20px;
  display:flex;
  justify-content: space-around;
`

