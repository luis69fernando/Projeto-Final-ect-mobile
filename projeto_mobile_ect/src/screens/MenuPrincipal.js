import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import CadastrarLivros from './Cadastro'
import Perfil from './Perfil'

const drawerNavigation = createDrawerNavigator({
    Home,
    CadastrarLivros,
    Perfil
});

export default createAppContainer(drawerNavigation);