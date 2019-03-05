(function () {
    'use strict';

    function createElement(tagName, properties) {
        const element = document.createElement(tagName);
        for (let key in properties) {
            if (properties.hasOwnProperty(key)) {
                element[key] = properties[key];
            }
        }
        return element;
    }

    document.querySelectorAll('.button-red').forEach(element => {
        element.parentNode.removeChild(element);
    });

    const a = createElement('a', {
        href: `https://www.wowhead.com/${window.location.search}`,
        id: 'wowhead',
        innerHTML: '<span><img src="https://wow.zamimg.com/images/logos/favicon.png">&nbsp;Wowhead</span>',
        rel: 'wowhead',
        target: '_blank',
    });

    document.getElementsByClassName('text')[0].prepend(a);
})();
