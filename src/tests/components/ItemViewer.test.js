import React from 'react';
import ReactDOM from 'react-dom';
import ItemsViewer from '../../components/ItemsViewer';
import { Provider } from 'react-redux';
import { store, actions } from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ItemsViewer/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
