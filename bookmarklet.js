javascript:(function(){
    var s = document.createElement('style');
    s.innerHTML = `
        .🦜 {
            animation: party 0.7s infinite, tint 0.7s infinite;
            transform-origin: bottom center;
        }

        @keyframes party {
        0% {
            transform: skewX(0deg) scaleY(1);
        }
        50% {
            transform: skewX(10deg) scaleY(1.1);
        }
        100% {
            transform: skewX(0deg) scaleY(1);
        }
    }

    @keyframes tint {
        0% {
            filter: hue-rotate(0deg);
        }
        25% {
            filter: hue-rotate(90deg);
        }
        50% {
            filter: hue-rotate(180deg);
        }
        75% {
            filter: hue-rotate(270deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
    `;
    document.head.appendChild(s);
})();
