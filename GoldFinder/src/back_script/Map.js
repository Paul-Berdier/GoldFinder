import { Price } from "./Price.js";

export class Map{
    // x: Number
 
    constructor(name,x, y, z){

        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
        this.grille  = new Array();;//z[x[y]]

        // for(let i = z; i > 0; i--){
        //     for (let j = 0; j < x; j++){
        //         for (let k = 0; k < y; k++){
        //             this.grille[i-1[j+"-"+k]] = 1;
        //         }
        //         //this.grille[i-1[j]] = 1;
        //     }
        //     //this.grille[i-1] = 1;
        // }
        for (let index = 0; index < this.z; index++) {
            for (var i=0; i < this.x; i++) {
              if (!this.grille[index]) this.grille[index] = new Array();
              for (var j=0; j < this.y; j++) {
                if (!this.grille[index][i]) this.grille[index][i] = new Array(); 
                this.grille[index][i][j] = 1;
              }
            }
          }

        // for (let i = z; i > 0; i--){
        //     for (let j = 0; j < y; j++){
        //         for (let k = 0; k < x; k++){
        //             this.grille[k][j][i - 1] = 1;
        //         }
        //     }
        // }
    }

     showGrille() {
        for(let i = 0; i > this.z; i++){
            for (let j = 0; j < this.x; j++){
                for (let k = 0; k < this.y; k++){
                    console.log(this.grille[i-1[j[k]]] + " ");
                }console.log("\n");
            }console.log("\n");
        }
        // for (let i = 0; i < this.z; i++){
        //     for (let j = 0; j < this.y; j++){
        //         for (let k = 0; k < this.x; k++){
        //             console.log(this.grille[k][j][i] + " ");
        //         }console.log("\n");
        //     }console.log("\n");
        // }
    }

    setGrillePrice(price) {
        this.price = price;
        this.randX = Math.floor(Math.random() * this.x);
        this.randY = Math.floor(Math.random() * this.y);
        console.log(this.z);
        console.log(this.randX);
        console.log(this.randY);
        this.grille[this.z-1][this.randX][this.randY] = -1;
    }

    cutImageUp(image, numColsToCut, numRowsToCut, widthOfOnePiece, heightOfOnePiece) {
        // faire dossier dépot pour images avec différentes images: image_1, image_2,..
        var imagePieces = [];
        var tabImagesPieces = [[]];

        for (let z = 0;  z < this.z; z++){
            for(var x = 0; x < numColsToCut; ++x) {
                for(var y = 0; y < numRowsToCut; ++y) {
                    var canvas = document.createElement('canvas');
                    canvas.width = widthOfOnePiece;
                    canvas.height = heightOfOnePiece;
                    var context = canvas.getContext('2d');
                    context.drawImage("image_"+ z+x+y +".jpg", x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
                    imagePieces.push(canvas.toDataURL());
                }
            }
            // @ts-ignore
            tabImagesPieces.push(tabImagesPieces);
        }
        this.tabImagesPieces = tabImagesPieces;
    }
}