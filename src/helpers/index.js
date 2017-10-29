import { replaceTodo } from '../actions/index';

function allowDrop(ev) {
    ev.preventDefault()
}

let drag = (todo) => {
    return ev => {
        ev.dataTransfer.setData("text", todo)
    }
};

let drop = (status, onMove) => {
    return ev => {
        ev.preventDefault();
        onMove(replaceTodo(ev.dataTransfer.getData('text'), status))
    }
};

export { allowDrop, drag, drop }
