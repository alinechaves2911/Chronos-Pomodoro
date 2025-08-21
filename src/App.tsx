
import './styles/App.css'
import './styles/index.css'


import { Logo } from './components/Logo/Logo';
import { Container } from './components/Container/Container';
import { Heading } from './components/Heading/Heading';
import { Menu } from './components/Menu/Menu';


function App() {


  return (
    <>
    <Container>
      <Heading>
        <Logo />
      </Heading>
    </Container>
       <Container>
      <Heading>
        <Menu/>
      </Heading>

    </Container>
    </>
  )
}

export default App
