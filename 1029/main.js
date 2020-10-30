'use strict';

{
        // document.querySelector('h1').textContent = 'Changed!'
        // document.querySelector('#target').textContent = 'Changed!'
        // document.querySelector('p').textContent = 'Changed!'
        // document.querySelectorAll('p')[1].textContent = 'Changed!'
        // document.querySelectorAll('p').forEach((p, index) => {
            //     p.textContent = `${index}番目のpです`;
            // });
        
    document.querySelector('button'). addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        // targetNode.className = 'my-color';
        // targetNode.className = 'my-color my-border';
        // targetNode.classList.add ('my-color');
        // if (targetNode.classList.contains ('my-color') === true) {
        //     targetNode.classList.remove('my-color');
        // } else {
        //     targetNode.classList.add('my-color');
        // }
        // targetNode.textContent = 'Changed!';
        // targetNode.title = 'This is title!';
        // targetNode.style.color = 'red';
        // targetNode.style.backgroundColor = 'skyblue';

        targetNode.classList.toggle('my-color');
    });
}