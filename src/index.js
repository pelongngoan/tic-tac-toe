import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TicTacToe from './TicTacToe';
import FilterTable from './FilterTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:'flex', columnGap:'100px'}}>

        <TicTacToe />

        <FilterTable />
        
    </div>
  </React.StrictMode>
  //dkjfskjfsdkj
);

