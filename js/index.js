import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import swal from 'sweetalert';

// loads the Icon plugin
UIkit.use(Icons);

const readMoreButtons = document.querySelectorAll('p.card-link > a');

readMoreButtons.forEach(button =>
    button.addEventListener('click', async e => {
        e.preventDefault();
        await swal("Good job!", "You're welcome 🎬", "success")
    })
);