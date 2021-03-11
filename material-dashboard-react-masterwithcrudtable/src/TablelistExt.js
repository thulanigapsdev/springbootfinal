import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import TableList from './views/TableList/TableList';

import { App } from './app/Index';import { App } from './app/Index';

import './styles.less';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();


class TablelistExt extends React.Component {
    render() {
      return (

      <div className="country-names">
        
      </div>
  
      )
    }
  }

  export default TablelistExt