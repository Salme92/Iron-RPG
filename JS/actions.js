var main = new MainCharacter;

$("#btn_at").click(function(action){
    main.doAction("attack");
    });


$('#btn_def').click(function(action){
    main.doAction("defense");
});

$('#btn_mag').click(function(action){
    main.doAction("magic");

})