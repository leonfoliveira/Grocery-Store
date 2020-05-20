import React from 'react';
import { AppProps } from 'next/app';
import { Store, AnyAction } from 'redux';
import { ReactReduxContext } from 'react-redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '@/redux/store';

import '@/styles/colors.scss';
import '@/styles/metrics.scss';
import '@/styles/global.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface StoreWithPersistor extends Store<any, AnyAction> {
  persistor: Persistor;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ReactReduxContext.Consumer>
    {({ store }) => (
      <PersistGate persistor={(store as StoreWithPersistor).persistor}>
        <Component {...pageProps} />
      </PersistGate>
    )}
  </ReactReduxContext.Consumer>
);

export default wrapper.withRedux(App);
