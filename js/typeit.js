import TypeIt from "typeit";

const thingsIAm = new TypeIt("#thingsIAm", {
    lifeLike: true,
    loop: true
})

thingsIAm
    .type("Web developer 👩🏻‍💻", { delay: 2000 })
    .delete()
    .type("🦄 Unicorn hunter", { delay: 2000 })
    .delete()
    .type("Spreadsheet superstar 💻", { delay: 2000 })
    .delete()
    .type("👩🏻‍🏫 Digital Tools Coach", { delay: 2000 })
    .delete()
    .type("Mediocre seamstress 🧵", { delay: 2000 })
    .delete()
    .type("Grammer warrior", { delay: 500 })
    .move(-9)
    .delete(1)
    .type("a")
    .move(9)
    .type(" 😅", { delay: 2000 })
    .break()
    .type("(and a Spelling")
    .break()
    .type("wizard! 🧙🏻‍♂️)", { delay: 2000 })
    .delete(60, { delay: 3000 })
    .type("Constant evolution")
    .pause(500)
    .type(".", { delay: 500 })
    .type(".", { delay: 500 })
    .type(".")
    .pause(2000)
    .go();