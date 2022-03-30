class Bomb {
    explosion() {}
    simpleExplosion(inventory, map, x, y) {
        for (let i = 0; i < map.z; i++) {
            if (map.grille[x][y][i] === -1) {
                inventory.addPrice(map.price);
                break;
            }
            else if (map.grille[x][y][i] === 1){
                map.grille[x][y][i] = 0;
                break;
            }
        }
    }
}

class Simple extends Bomb {
    explosion(inventory, map, x, y) {
        super.simpleExplosion(inventory, map, x, y);
        super.explosion();
    }
}

class Vertical extends Bomb {
    explosion(inventory, map, x, y) {
        for (let j = 0; j < map.y; j++) {
            super.simpleExplosion(inventory, map, x, j);
        }
        super.explosion();
    }
}

class Horizontal extends Bomb {
    explosion(inventory, map, x, y) {
        for (let j = 0; j < map.x; j++) {
            super.simpleExplosion(inventory, map, j, y);
        }
        super.explosion();
    }
}

class Cross extends Bomb {
    explosion(inventory, map, x, y) {
        for (let j = 0; j < map.y; j++) {
            super.simpleExplosion(inventory, map, j, y);
            super.simpleExplosion(inventory, map, x, j);
        }
        super.explosion();
    }
}

// class Magnet extends Bomb {
//     explosion(int[][] map, int x, int y) {
//     super.explosion();
// }
// }