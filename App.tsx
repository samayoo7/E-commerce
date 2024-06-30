import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import toastConfig from './src/utils/toastConfig';
import Router from './src/navigation';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Router />
					<Toast
						position='bottom'
						config={toastConfig}
						bottomOffset={0}
					/>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;