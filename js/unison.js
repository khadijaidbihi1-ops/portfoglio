const launchLinks = document.querySelectorAll('[data-future-link]');
launchLinks.forEach(link => link.addEventListener('click', event => event.preventDefault()));
