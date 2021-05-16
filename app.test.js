const app = require('./app')

function eqSet(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let a of setA) if (!setB.has(a)) return false;
    return true;
}

test('Finding distinct reachable graph points', () => {
    expect(
        eqSet(
            app.findReachable(app.graph, 1),
            new Set([1, 2, 3, 4])
        )
    ).toBe(true);

    expect(
        eqSet(
            app.findReachable(app.graph, 2),
            new Set([1, 2, 3, 4])
        )
    ).toBe(true);

    expect(
        eqSet(
            app.findReachable(app.graph, 3),
            new Set([1, 2, 3, 4])
        )
    ).toBe(true);

    expect(
        eqSet(
            app.findReachable(app.graph, 4),
            new Set([1, 2, 3, 4])
        )
    ).toBe(true);

    expect(
        eqSet(
            app.findReachable(app.graph, 5),
            new Set([])
        )
    ).toBe(true);

    expect(
        eqSet(
            app.findReachable(app.graph, 6),
            new Set([1, 2, 3, 4, 5, 7])
        )
    ).toBe(true);

    expect(
        eqSet(
            app.findReachable(app.graph, 7),
            new Set([1, 2, 3, 4])
        )
    ).toBe(true);
})
