ion.sound({
    sounds: [
        {name: "main_theme"},
        {name: "fight_theme"},
        {name: "magic_sound"},
        {name: "attack_sound"}
    ],

    // main config
    path: "/sounds",
    preload: true,
    multiplay: true,
    volume: 0.9
});

// play sound
ion.sound.play("main_theme");