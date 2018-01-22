function MusicGame(){
    this.FightTheme = new Audio('./fight_theme.ogg');
}

$('#start-game').click(function(){
    this.MainTheme.stop() ;
    this.FightTheme.play();
});