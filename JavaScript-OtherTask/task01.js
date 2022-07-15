'use strict';
function greet(name, ...types) {
    for(const type of types) {
        switch (type) {
            case 'informal':
                console.log('Yo, ' + name + '!');
                break;
            case 'formal':
                console.log('Good morning, ' + name + '!');
                break;
            default:
                console.log('hello');
        }
    }
}
greet('Anna', 'formal', 'hello', 'informal');