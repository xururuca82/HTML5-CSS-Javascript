var data = 'global data';
function scope() {
    data = 'local data';
    alert('Inside of scope: ' + data);
}
scope();
alert('Outside of Scope: ' + data);