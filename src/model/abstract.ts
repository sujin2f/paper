interface IA {
    new (): A
}

abstract class A {}

class B extends A {
    constructor() {
        super()
    }
}

class C extends A {
    constructor() {
        super()
    }
}

const c = (cls: IA) => {
    return new cls()
}

const cls = B
const e = c(cls)

console.log(e.constructor.name, cls.name)
