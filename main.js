
let dvd = document.getElementById('dvd');
let x_incr = 1;
let y_incr = 1;

function init() {
    update_color();
    dvd.style.postion = 'absolute';
    document.body.style.background = '#4d4d4d';
    setInterval(frame, 5);
    
}

function update_color() {
    let color = Math.round(Math.random() * 100);
    dvd.style.fill = `hsl(${color},100%,50%)`;
}

function handle_collision() {
    let dvd_height = dvd.offsetHeight;
    let dvd_width = dvd.offsetWidth;
    let dvd_top = dvd.offsetTop;
    let dvd_left = dvd.offsetLeft;
    let win_height = window.innerHeight;
    let win_width = window.innerWidth;

    if (dvd_left <= 0 || dvd_left + dvd_width >= win_width) {
        // reverse x_incr
        x_incr = ~x_incr + 1;
        update_color();
    }

    if (dvd_top <= 0 || dvd_top + dvd_height >= win_height) {
        // reverse y_incr
        y_incr = ~y_incr + 1;
        update_color();
    }
}

function frame() {
    handle_collision();
    dvd.style.top = dvd.offsetTop + y_incr;
    dvd.style.left = dvd.offsetLeft + x_incr;
    
}

init();
