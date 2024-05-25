const MATRIX_SIZE = 8

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.parent = null
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
    let stage = 0

    while (frontier.length) {
        console.log(frontier)
        const current = frontier.pop(0)
        matrix[current.x][current.y] = 1

        if (isEqual(current, target)) {
            let temp = current
            while (temp) {
                temp = temp.parent
            }
            return stage
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
                frontier.push(p)
            }

        stage++
    }
}

const matrix = createMatrix()

function knightMoves(current, target) {
    if (isOutOfBounds(current) || isOutOfBounds(target)) {
        console.log('Invalid positions specified')
        return
    }

    const result = bfs(current, target)

    return result
}

console.log(knightMoves({ x: 0, y: 0 }, { x: 1, y: 2 }))
