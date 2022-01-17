import TypeIt from "typeit";

const thingsIAm = new TypeIt("#thingsIAm", {
    lifeLike: true,
    loop: true
})

thingsIAm
    .type("I am a:", { delay: 500 })
    .break()
    .type("Web developer", { delay: 2000 })
    .delete(13)
    .type("Unicorn hunter", { delay: 2000 })
    .delete(16)
    .type("n:")
    .break()
    .type("Excel fan girl", { delay: 2000 })
    .delete(17)
    .type(":")
    .break()
    .type("Technomaniac", { delay: 2000 })
    .delete(12)
    .type("Mediocre seamstress", { delay: 2000 })
    .delete(19)
    .type("Grammer warrior", { delay: 500 })
    .move(-9)
    .delete(1)
    .type("a")
    .move(9, { delay: 2000 })
    .delete(15)
    .type("Spelling wizard!", { delay: 2000 })
    .delete(16, { delay: 3000 })
    .type("Constant evolution")
    .pause(1000)
    .type(".", { delay: 1000 })
    .type(".", { delay: 1000 })
    .type(".")
    .pause(5000)
    .go();