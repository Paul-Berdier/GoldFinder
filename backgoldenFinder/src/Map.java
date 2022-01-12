import java.util.Random;

public class Map {

    protected String name;
    protected int[][][] grille;
    protected int x;
    protected int y;
    protected int z;
    protected Price price;

    public Map(String name,int x,int y, int z){

        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
        this.grille = new int[x][y][z];

        for (int i = z; i > 0; i--){
            for (int j = 0; j < y; j++){
                for (int k = 0; k < x; k++){
                    this.grille[k][j][i - 1] = 1;
                }
            }
        }
    }

    public void showGrille() {
        for (int i = 0; i < z; i++){
            for (int j = 0; j < y; j++){
                for (int k = 0; k < x; k++){
                    System.out.print(grille[k][j][i] + " ");
                }System.out.println();
            }System.out.println();
        }
    }

    public void setGrillePrice(Price price) {
        this.price = price;
        Random random = new Random();
        int randX = random.nextInt(x);
        int randY = random.nextInt(y);

        grille[randX][randY][z - 1] = -1;
    }
}

//hacked by anatole