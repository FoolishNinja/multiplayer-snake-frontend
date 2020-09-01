export default class Food {
    private readonly color = '#FF0000';

    public x: number;
    public y: number;
    private gridRows: number;
    private gridColumns: number;

    constructor(gridRows: number, gridColumns: number) {
        this.gridRows = gridRows;
        this.gridColumns = gridColumns;
        this.x = this.getRandomInt(0, gridRows - 1);
        this.y = this.getRandomInt(0, gridColumns - 1);
    }

    public update() {
        this.x = this.getRandomInt(0, this.gridRows - 1);
        this.y = this.getRandomInt(0, this.gridColumns - 1);
    }

    public draw(fillTile: Function) {
        fillTile(this.x, this.y, this.color);
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}