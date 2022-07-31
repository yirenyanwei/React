import {BrowserRouter,HashRouter} from 'react-router-dom'
import Tabbar from './components/Tabbar';
import MRouter from './router';

function App() {
  return (
    <div>
      <HashRouter>
        <MRouter></MRouter>
        {/* 选项卡 */}
        <Tabbar></Tabbar>
      </HashRouter>
    </div>
  );
}

export default App;
