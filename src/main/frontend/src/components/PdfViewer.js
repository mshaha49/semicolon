import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument'

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default App;
