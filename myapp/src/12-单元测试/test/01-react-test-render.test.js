import ShallowRender from 'react-test-renderer/shallow'; // ES6
import React from 'react';
import ReactTestUtil,{act} from 'react-dom/test-utils'
import ReactDOM from 'react-dom/client';
import App from '../App'
globalThis.IS_REACT_ACT_ENVIRONMENT = true
describe("react-test-render", function(){
    //测试点
    //标题 Test Renderer
    it('app-title-todo',function(){
        const render = new ShallowRender()
        //渲染虚拟dom
        render.render(<App></App>)
        const out = render.getRenderOutput()
        console.log(out)
        //断言  期望值
        expect(out.props.children[0].type).toBe('h1')
    })

    //Test Utilities
    let container;//Element

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });
    //删除功能
    it('delete-function', function () {
        //渲染真实dom
        act(() => {
            ReactDOM.createRoot(container).render(<App />);
        });
        let todoItems = container.querySelectorAll('li')
        console.log('beforenum',todoItems.length)
        let button = todoItems[0].querySelector('button')
        //模拟点击
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        todoItems = container.querySelectorAll('li')
        console.log('after',todoItems.length)
    })
})