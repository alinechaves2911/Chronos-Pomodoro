
import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'


import { Logo } from './components/Logo/Logo';
import { Container } from './components/Container/Container';
import { Heading } from './components/Heading/Heading';
import { Menu } from './components/Menu/Menu';
import { CountDown } from './components/CountDown/CountDown';
import { InputDefault } from './components/DefaultInput/InputDefault';
import { Cycles } from './components/Cycles/Cycles';


import { DefaultButton } from './components/DefaultButton/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer/Footer';


function App() {


  return (
    <>


      <Container>
        <Logo />
      </Container>

      <Container>
          <Menu/>
      </Container>

      <Container>
          <CountDown/>
      </Container>

      <Container>
          <form className='form'>
            <div className="formRow">
              <InputDefault type="text" id="myInput"  placeholder='Digite sua tarefa:' labelText="Task"  />
            </div>
            <div className="formRow">
              <p>algum texto...</p>
            </div>

            <div className="formRow">
              <Cycles />
            </div>

            <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green"/>
            {/* <DefaultButton icon={<StopCircleIcon />} color="green"/> */}
            </div>
          </form>
          
      </Container>
      
      <Container>
            <Footer />
      </Container>
    </>
  )
}

export default App
