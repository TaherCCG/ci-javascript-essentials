/* We are passing the event here so we can
get its type and do everything with one function */

function handleEvent(event) {
    if (event.type === 'mousemove') {
        let position = '(' + event.clientX + ',' + event.clientY + ')';
        let positionHolder = document.getElementById('mouse-position');
        positionHolder.innerHTML = position;
    } else {
        console.log(
            event.type,
            event.target.attributes.id.value, 'happened!');
    }
    
}