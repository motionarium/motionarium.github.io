document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 125,
    loop: true,
    nextStringDelay: 750,
    deleteSpeed: 150,
    cursor: false,
    })
    .type('Я <span class="name">motionarium</span>!')
    .delete(".name")
    .type('hackerpepe!')
    .go();
})

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type2", {
        speed: 125,
        loop: true,
        nextStringDelay: 750,
        deleteSpeed: 150,
        cursor: false,
        })
        .type('Страница не найдена!')
        .delete()
        .type('o_O')
        .go();
    })

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type3", {
        speed: 125,
        loop: true,
        nextStringDelay: 750,
        deleteSpeed: 150,
        cursor: false,
        })
        .type('donate.')
        .delete()
        .type('back.')
        .go();
        })
        