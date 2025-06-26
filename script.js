let timer = 60;
let score = 0;
let hit_rn = 0;
let panel_bottom = document.querySelector("#panel_bottom");

function make_bubble() {
    let clutter = "";
    for (let i = 1; i <= 102; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    panel_bottom.innerHTML = clutter;
}

function run_timer() {
    let timer_func = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer_value").textContent = timer;
        } else {
            clearInterval(timer_func);
            end_game();
        }
    }, 1000);
}

function get_new_hit() {
    hit_rn = Math.floor(Math.random() * 10);
    document.querySelector("#hit_value").textContent = hit_rn;
}

function update_score() {
    score += 10;
    document.querySelector("#score_value").textContent = score;
}

function end_game() {
    panel_bottom.innerHTML = `
        <div style="width: 100%; text-align: center;">
            <h1 style="color: red; font-size: 40px;">Game Over</h1>
            <p style="font-size: 20px;">Your score: ${score}</p>
            <button id="restart_btn" style="padding: 10px 20px; font-size: 18px; background-color: rgb(72,104,72); color: white; border: none; border-radius: 5px; cursor: pointer;">Play Again</button>
        </div>
    `;
    document.querySelector("#restart_btn").addEventListener("click", restart_game);
}

function restart_game() {
    timer = 60;
    score = 0;
    document.querySelector("#timer_value").textContent = timer;
    document.querySelector("#score_value").textContent = score;
    get_new_hit();
    make_bubble();
    run_timer();
}

panel_bottom.addEventListener("click", function (dets) {
    let clicked_num = Number(dets.target.textContent);
    if (clicked_num === hit_rn) {
        update_score();
        make_bubble();
        get_new_hit();
    }
});

run_timer();
make_bubble();
get_new_hit();
