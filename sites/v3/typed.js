document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 125,
    loop: true,
    deleteSpeed: 150,
    cursor: false,
    })
    .type('Я <span class="name">motionarium</span>!')
    .pause(750)
    .delete(".name")
    .type('hackerpepe!')
    .pause(750)
    .go();
})

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type2", {
        speed: 125,
        loop: true,
        deleteSpeed: 150,
        cursor: false,
        })
        .type('Страница не найдена!')
        .pause(750)
        .delete()
        .type('o_O')
        .pause(750)
        .go();
    })

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type3", {
        speed: 125,
        loop: true,
        deleteSpeed: 150,
        cursor: false,
        })
        .type('donate.')
        .pause(750)
        .delete()
        .type('back.')
        .pause(750)
        .go();
        })
