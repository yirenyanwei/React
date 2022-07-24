import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    //开启browser模式
    // history:require('history').createBrowserHistory(),
    //hash模式 默认
    history:require('history').createHashHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/maizuo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
