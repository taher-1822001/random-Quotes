import React, { createElement } from "react";
import 'bootstrap/dist/css/bootstrap.css';
const Hello = () => {

    return createElement('div', null,
    createElement('h1', {className:'text-primary', id: 'wish'}, 'This is the new content')
    )
}


export default Hello