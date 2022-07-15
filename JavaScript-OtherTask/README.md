# Implement Some Function
___
implementation of the some function using the reduce function.

[My solution - Click me and check the whole solution + comments ](link here)

```javascript
function some(array, fn) {
    return array.reduce(function (previousValue, element) {
        if (fn(element)) {
            return true;
        } else {
            return previousValue;
        }
    }, false);
}
```