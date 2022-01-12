public class Main {
    public static void main (String[] args){
        Map map1 = new Map("map1", 10,10, 3);
        map1.showGrille();
        GoldenNugget price1 = new GoldenNugget();
        map1.setGrillePrice(price1);
        map1.showGrille();
        Inventory inventory = new Inventory();
        inventory.showInventory();
    }
}