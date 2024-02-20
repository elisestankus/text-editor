const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // saves events to be triggered
    window.deferredPrompt = event;
    // toggles hidden class on install button element (shows button)
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
// shows prompt when install button is clicked
butInstall.addEventListener('click', async () => {
    const promptE = window.deferredPrompt;

    // checks for deferred prompt
    if(!promptE) {
        return;
    }
    // if there is a deferred prompt --> show prompt
    promptE.prompt();

    // reset variable
    window.deferredPrompt = null;

    // hides install button
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// once app is installed, clear the prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
