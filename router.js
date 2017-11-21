import { StackNavigator} from 'react-navigation';

import Login from './src/pages/Login/login';
import Register from './src/pages/Login/register';
import Update from './src/pages/Login/updateInfo';

const App=StackNavigator({
    Login :{ screen: Login
    },
    Register:{screen:Register},
    Update:{screen:Update}
},{
    initialRouteName: 'Login'
})


export default App;