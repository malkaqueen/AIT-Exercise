const app = require('./app')

function eqSet(setA, setB) {
    if (setA.size !== setB.size) return false
    for (let a of setA) if (!setB.has(a)) return false
    return true
}

describe('Finding reachable points of graph', () => {
    it('should return [1,2,3,4] when starting on 1', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 1),
                new Set([1, 2, 3, 4])
            )
        ).toBe(true)
    })

    it('should return [1,2,3,4] when starting on 2', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 2),
                new Set([1, 2, 3, 4])
            )
        ).toBe(true)
    })

    it('should return [1,2,3,4] when starting on 3', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 3),
                new Set([1, 2, 3, 4])
            )
        ).toBe(true)
    })

    it('should return [1,2,3,4] when starting on 4', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 4),
                new Set([1, 2, 3, 4])
            )
        ).toBe(true)
    })

    it('should return empty list when starting on 5', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 5),
                new Set([])
            )
        ).toBe(true)
    })

    it('should return [1,2,3,4,5,7] when starting on 6', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 6),
                new Set([1, 2, 3, 4, 5, 7])
            )
        ).toBe(true)
    })

    it('should return [1,2,3,4] when starting on 7', () => {
        expect(
            eqSet(
                app.findReachable(app.graph, 7),
                new Set([1, 2, 3, 4])
            )
        ).toBe(true)
    })
})
