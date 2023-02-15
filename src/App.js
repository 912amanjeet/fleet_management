import './App.css';
import './assets/font-family/Poppins-Black.ttf'
import './assets/font-family/Poppins-BlackItalic.ttf'
import './assets/font-family/Poppins-Regular.ttf'
import './assets/font-family/Poppins-ExtraBold.ttf'
import './assets/font-family/Poppins-Bold.ttf'
import './assets/font-family/Poppins-Medium.ttf'
import Routing from './routing/routing';
import CustomModal from './components/customModal/customModal';

function App() {
  return ( 
    <Routing />
    
    // <CustomModal/>
  );
}

export default App;
