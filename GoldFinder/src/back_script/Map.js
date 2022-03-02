class Map{
    constructor(name, x, y, z){

        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
        this.grille  = [x][y][z];

        for (let i = z; i > 0; i--){
            for (let j = 0; j < y; j++){
                for (let k = 0; k < x; k++){
                    this.grille[k][j][i - 1] = 1;
                }
            }
        }
    }

     showGrille() {
        for (let i = 0; i < this.z; i++){
            for (let j = 0; j < this.y; j++){
                for (let k = 0; k < this.x; k++){
                    console.log(this.grille[k][j][i] + " ");
                }console.log("\n");
            }console.log("\n");
        }
    }

    setGrillePrice(price) {
        this.price = price;
        this.randX = Math.floor(Math.random() * this.x);
        this.randY = Math.floor(Math.random() * this.y);
        this.grille[this.randX][this.randY][this.z - 1] = -1;
    }
}