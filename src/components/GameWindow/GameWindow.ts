import { Component, Vue } from 'vue-property-decorator';
import Player from '@/models/Player';
import Food from '@/models/Food';

@Component({
    name: 'GameView',
})
export default class GameWindow extends Vue {
    private readonly game = {
        width: 800,
        height: 800,
        gridColumns: 15,
        gridRows: 15,
        backgroundColor: '#ADADAD',
        tickRate: 100
    }

    private food: Food = new Food(this.game.gridRows, this.game.gridColumns);
    private players: Array<Player> = [
        new Player([1, 0], [0, 0], 1),
        new Player([5, 5], [4, 5], 1),
    ]
    private canvas: any;
    private ctx: CanvasRenderingContext2D;

    mounted() {
        this.canvas = document.getElementById('snake-game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.clearCanvas();
        this.fillBackground();
        this.addEventListeners();
        setInterval(() => this.loop(), this.game.tickRate);
    }

    private loop() {
        this.clearCanvas();
        this.fillBackground();
        this.updatePlayers();
        this.drawFood();
        this.drawPlayers();
        this.checkPlayersWithFood();
        this.checkPlayersCollision();
    }

    private setPlayerHeading(playerIndex: number, heading: number) {
        this.players[playerIndex].setHeading(heading);
    }

    private clearCanvas() {
        this.ctx.clearRect(0, 0, this.game.width, this.game.height);
    }

    private fillBackground() {
        this.ctx.fillStyle = this.game.backgroundColor;
        this.ctx.fillRect(0, 0, this.game.width, this.game.height);
    }

    private fillTile(x: number, y: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.game.width / this.game.gridColumns, y * this.game.height / this.game.gridRows, this.game.width / this.game.gridColumns, this.game.height / this.game.gridRows);
    }

    private drawPlayers() {
        this.players.forEach(player => player.draw(this.fillTile));
    }

    private updatePlayers() {
        this.players.forEach(player => player.update());
    }

    private checkPlayersCollision() {
        for (let entry of this.flatmap(this.players, this.players)) {
            if (entry.val1.collides(entry.val2)) {
                this.deletePlayer(entry.val1.x.length > entry.val2.x.length ? this.players.indexOf(entry.val1) : this.players.indexOf(entry.val2));
            }
        }
        this.players.forEach((player, index) => {
            if (player.collidesSelf()) this.deletePlayer(index);
        })
    }

    private addEventListeners() {
        window.addEventListener('keypress', e => {
            const heading: number = {
                w: 0,
                d: 1,
                s: 2,
                a: 3
            }[e.key];
            if (heading === undefined) return;
            for (let i = 0; i < this.players.length; i++) this.setPlayerHeading(i, heading);
        });
    }

    private deletePlayer(index: number) {
        this.players.splice(index, 1);
    }

    private drawFood() {
        this.food.draw(this.fillTile);
    }

    private checkPlayersWithFood() {
        this.players.forEach((player, index) => {
            if (player.x[index] === this.food.x && player.y[index] === this.food.y) this.playerEatsFood(player);
        });
    }

    private playerEatsFood(player: Player) {
        player.incrementLength();
        this.food.update();
    }

}