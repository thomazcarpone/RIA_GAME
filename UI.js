export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
    }
    draw(ctx) {
        ctx.save();
        //to fix Firefox bug displays
        // context.shadowOffsetX = 2;
        // context.shadowOffsetY = 2;
        // context.shadowColor = 'white';
        // context.shadowBlur = 0;

        // ctx.font = this.fontSize +'px ' + this.fontFamily;
        ctx.textAlign = 'left';
        ctx.fillStyle = "rgb(250, 250, 250)";

        //score
        // ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Health: " + hero.health + " HP \t BOSS: " + boss.hp + " HP", 32, 32);

        //timer
        ctx.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        ctx.fillText('Time: ' + (this.game.time * 0.001), 20, 80);

        //game over messages
        if(this.hero.health <= 0){
            ctx.textAlign = 'cneter';
            ctx.font = this.fontSize * 2 + 'px ' + this.fontFamily;

            ctx.fillText(' Game Over - Keep improving yourself to defeat your inner demons', this.canvas.with * 0.5, this.canvas.height * 0.5 + 20);
        }

        ctx.restore();
    }
}