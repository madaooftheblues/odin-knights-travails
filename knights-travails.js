const MATRIX_SIZE = 8

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
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

const matrix = createMatrix()
