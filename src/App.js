import React from 'react';
import styles from './App.module.css';
import {  OSList,Manufacture} from './components/list';


function App() {
  return (
    <div className={styles.header} >
      
      <h1> Mobile Operating System</h1>
    
      <OSList/>

      <h1> Mobile Manufacturers</h1>
      <Manufacture/>
    </div>
  );
}

export default App;
