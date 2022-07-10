//定义action
function hide() {
    return {
        type: 'hide-tabbar'
    }
}

function show() {
    return {
        type: 'show-tabbar'
    }
}
export {hide,show}