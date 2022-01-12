public class Bomb {
    public void explosion() {
    }
    public static void simpleExplosion(Inventory inventory, Map map, int x, int y) {
        for (int i = 0; i < map.z; i++ ) {
            if (map.grille[x][y][i] == -1) {
                inventory.addPrice(map.price);
                break;
            }
            else if (map.grille[x][y][i] == 1){
                map.grille[x][y][i] = 0;
                break;
            }
        }
    }
}

class Simple extends Bomb {
    public void explosion(Inventory inventory, Map map, int x, int y) {
        simpleExplosion(inventory, map, x, y);
        super.explosion();
    }
}

class Vertical extends Bomb {
    public void explosion(Inventory inventory, Map map, int x, int y) {
        for (int j = 0; j < map.y; j++) {
            simpleExplosion(inventory, map, x, j);
        }
        super.explosion();
    }
}

class Horizontal extends Bomb {
    public void explosion(Inventory inventory, Map map, int x, int y) {
        for (int j = 0; j < map.x; j++) {
            simpleExplosion(inventory, map, j, y);
        }
        super.explosion();
   }
}

class Cross extends Bomb {
    public void explosion(Inventory inventory, Map map, int x, int y) {
        for (int j = 0; j < map.y; j++) {
            simpleExplosion(inventory, map, j, y);
            simpleExplosion(inventory, map, x, j);
        }
        super.explosion();
    }
}

class Magnet extends Bomb {
    public void explosion(int[][] map, int x, int y) {
        super.explosion();
    }
}
