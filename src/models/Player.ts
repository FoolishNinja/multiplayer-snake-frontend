export default class Player {
    private readonly headColor = '#1D1D1D';
    private readonly bodyColor = '#5D5D5D';

    public x: Array<number>;
    public y: Array<number>;
    public heading: number;
    public canChangeHeading: boolean = false;
    public hasEaten: boolean = false;

    constructor(x: Array<number>, y: Array<number>, heading: number) {
        this.x = x;
        this.y = y;
        this.heading = heading;
    }

    public update() {
        for (let i = this.x.length - (this.hasEaten ? 2 : 1); i > 0; i--) {
            this.x[i] = this.x[i - 1];
            this.y[i] = this.y[i - 1];
        }
        this.x[0] = this.x[0] + (this.heading === 1 ? 1 : (this.heading === 3 ? -1 : 0));
        this.y[0] = this.y[0] + (this.heading === 0 ? -1 : (this.heading === 2 ? 1 : 0));
        this.canChangeHeading = true;
        this.hasEaten = false;
    }

    public setHeading(heading: number) {
        if (!this.canChangeHeading) return;
        const opposite: number = {
            0: 2,
            1: 3,
            2: 0,
            3: 1
        }[heading];
        if (opposite === this.heading) return;
        this.heading = heading;
        this.canChangeHeading = false;
    }

    public draw(fillTile: Function) {
        fillTile(this.x[0], this.y[0], this.headColor);
        for (let i = 1; i < this.x.length; i++) fillTile(this.x[i], this.y[i], this.bodyColor);
    }

    public incrementLength() {
        this.hasEaten = true;
        this.x.push(this.x[this.x.length - 1]);
        this.y.push(this.y[this.y.length - 1]);
    }

    public collidesSelf(): boolean {
        if (this.hasEaten) return false;
        for (let entry of this.flatmap(this.x, this.x)) {
            for (let entry2 of this.flatmap(this.y, this.y)) {
                if (entry.val1 === entry.val2 && entry2.val1 === entry2.val2) return true;
            }
        }
        return false;
    }

    public collides(player: Player): boolean {
        for (let entry of this.flatmap(this.x, player.x)) {
            for (let entry2 of this.flatmap(this.y, player.y)) {
                if (entry.val1 === entry.val2 && entry2.val1 === entry2.val2) return true;
            }
        }

        return false;
    }

    private flatmap(array: Array<any>, array2: Array<any>): Array<{ val1: any, val2: any }> {
        return array.flatMap(d => array2.map(v => ({ val1: d, val2: v })));
    }
}