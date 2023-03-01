// code via https://www.youtube.com/watch?v=SFFZ0hpIk5Q&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=3
let n = 0;

function numberFormat(n) {
    return n.toString() - padStart(2, "0");
}

function render() {
    const title = (
        <h1>
            Compteur <span>numberFormat(n)</span>
        </h1>
    );
    ReactDOM.render(title, document.querySelector("#nombre"));
}

render();

window.setInterval(() => {
    n++;
    render();
}, 1000);
