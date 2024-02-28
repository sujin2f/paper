/*
 * Abstract class that makes a class iterable
 */
export abstract class Iterator<T> {
    constructor(protected items: T[]) {}

    public get length(): number {
        return this.items.length
    }

    public forEach(callback: (item: T, index: number) => undefined | void) {
        this.items.forEach(callback)
    }

    public map<U>(callback: (item: T, index: number) => U) {
        return this.items.map(callback)
    }

    public filter(callback: (item: T, index: number) => boolean) {
        return this.items.filter(callback)
    }

    public sort(callback?: (a: T, b: T) => number) {
        return this.items.sort(callback)
    }

    public slice(from: number, to?: number) {
        return this.items.slice(from, to)
    }

    public get(index: number): T {
        return this.items[index]
    }

    public set(index: number, item: T) {
        this.items[index] = item
    }

    public push(item: T) {
        this.items.push(item)
    }

    public pop() {
        return this.items.pop()
    }

    public toArray() {
        return this.items
    }
}
