export default function loadState(){
    return{
        preload : function(){
            this.stage.backgroundColor = "#000";
            this.preloadtext = this.add.text(this.game.world.centerX,this.game.world.centerY,"Loading..."+this.load.progress+"%",{ font: "20px Arial", fill: "#ff0044", align: "center" });
            this.preloadtext.anchor.setTo(0.5,0.5);
    
            this.load.spritesheet('play','img/play.png',100,80);
            this.load.image('pause','img/Pause.png');
            this.load.image('reset','img/refresh.png');
            this.load.image('lose','img/lose.png');
            this.load.image('arrow','img/arrow.png');
            this.load.image('title','img/Title.png');
            this.load.image('logo','img/logo2.png');
            this.load.image('win','img/win.png');
            this.load.spritesheet('blocks','img/blocks.png',30,30);
            this.load.image('bck','img/Bck.png');
        },
        create : function(){
            this.game.state.start('menu');
        }
    }
}