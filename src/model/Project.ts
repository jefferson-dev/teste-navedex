export class Project {
    constructor(
        private id: string,
        private name: string,
    ) { }

    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
}





