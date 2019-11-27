import React from 'react';
import './styles.css'

import Menu from './Menu.js'
import {Image} from './Image.js'
import Content from './Content.js'
import Alert from './Alert.js'
import Counter from './Counter.js'

function App() {
  return (
    <div>
      <Menu/>
      <div>
        <h1>ACME Hardware Pte. Ltd</h1>
        <Alert message="We are closed on 26th Nov for annual stock take"
         color='blue'/>
       <Image/>
        <Content/>
        <Counter number={3}/>
      
      </div>
    </div>
  );
}

export default App;
