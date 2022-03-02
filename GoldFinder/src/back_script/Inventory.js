class Inventory {
    inventoryPrice = [];
    inventoryBomb = [];

    showInventory() {
        console.log("========INVENTORY========\n");
        console.log("Prices :\n");
        console.log("Number of green tickets : \n" + this.inventoryPrice.filter(x => x===new GreenTicket).length);
        console.log("Number of blue tickets : \n" + this.inventoryPrice.filter(x => x===new BlueTicket()).length);
        console.log("Number of purple tickets : \n" + this.inventoryPrice.filter(x => x===new PurpleTicket()).length);
        console.log("Number of gold tickets : \n" + this.inventoryPrice.filter(x => x===new GoldTicket()).length);
        console.log("Number of gold nuggets : \n" + this.inventoryPrice.filter(x => x===new GoldenNugget()).length);
        console.log("Bombs :\n");
        console.log("Number of vertical bombs : \n" + this.inventoryBomb.filter(x => x===new Vertical()).length);
        console.log("Number of horizontal bombs : \n" + this.inventoryBomb.filter(x => x===new Horizontal()).length);
        console.log("Number of simple bombs : \n" + this.inventoryBomb.filter(x => x===new Simple()).length);
        console.log("Number of cross bombs : \n" + this.inventoryBomb.filter(x => x===new Cross()).length);
        // console.log("Number of magnet bombs : \n" + this.inventoryBomb.filter(x => x===new GoldenNugget()).length);
    }

    addPrice(price) {
        this.inventoryPrice.push(price);
}

    delPrice(price) {
        for (let i = 0; i < this.inventoryPrice.length; i++) {
            if (this.inventoryPrice[i] === price) {
                this.inventoryPrice.slice(i, 1);
                break;
            }
        }
    }

    addBomb(bomb) {
        this.inventoryBomb.push(bomb);
    }

    delBomb(bomb) {
        for (let i = 0; i < this.inventoryBomb.length; i++) {
            if (this.inventoryBomb[i] === bomb) {
                this.inventoryBomb.slice(i, 1);
                break;
            }
        }
    }
}