import React from 'react';
import { useAppSelector } from '../hooks/common';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Router: React.FC = () => {
	const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

	return isLoggedIn ? <AppStack /> : <AuthStack />;
};

export default Router;