import { replaceTodo } from '../actions/index';

let drag = (id) => {
    return ev => {
        ev.dataTransfer.setData("text", id)
    }
};

let drop = (status, onMove) => {
    return ev => {
        ev.preventDefault();
        onMove(replaceTodo(ev.dataTransfer.getData('text'), status))
    }
};

export {  drag, drop }
