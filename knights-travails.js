const MATRIX_SIZE = 8

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.parent = null
        this.stage = 0
    }
}

function createMatrix() {
    const matrix = []
    for (let i = 0; i < MATRIX_SIZE; i++) {
        matrix[i] = []
        for (let j = 0; j < MATRIX_SIZE; j++) {
            matrix[i].push(0)
        }
    }
    return matrix
}

function isOutOfBounds(p) {
    return p.x > MATRIX_SIZE - 1 || p.y > MATRIX_SIZE - 1 || p.x < 0 || p.y < 0
}

function isEqual(a, b) {
    return a.x === b.x && a.y === b.y
}

function bfs(start, target) {
    const frontier = [start]

    while (frontier.length) {
        const current = frontier.shift()
        matrix[current.x][current.y] = 1

        if (isEqual(current, target)) {
            const path = []
            let temp = current
            while (temp) {
                path.push([temp.x, temp.y])
                temp = temp.parent
            }
            return { steps: current.stage, path: path.reverse() }
        }

        const i = current.x
        const j = current.y

        const possiblePoses = [
            new Position(i - 2, j - 1),
            new Position(i - 2, j + 1),
            new Position(i - 1, j - 2),
            new Position(i - 1, j + 2),
            new Position(i + 2, j - 1),
            new Position(i + 2, j + 1),
            new Position(i + 1, j - 2),
            new Position(i + 1, j + 2),
        ]

        for (p of possiblePoses)
            if (!isOutOfBounds(p) && !matrix[p.x][p.y]) {
                p.parent = current
                p.stage = current.stage + 1 || 1
                frontier.push(p)
            }
    }
}

const matrix = createMatrix()

function knightMoves(current, target) {
    if (isOutOfBounds(current) || isOutOfBounds(target)) {
        console.log('Invalid positions specified')
        return
    }

    const result = bfs(current, target)
    console.log(`You made it in ${result.steps} moves!  Here's your path:`)
    result.path.forEach((p) => console.log(p))
}

knightMoves(new Position(0, 0), new Position(7, 7))
