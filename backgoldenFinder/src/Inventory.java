import java.util.ArrayList;
import java.util.Collections;

public class Inventory {
    private ArrayList<Price> inventoryPrice = new ArrayList<>();
    private ArrayList<Bomb> inventoryBomb = new ArrayList<>();

    public void showInventory() {
        System.out.println("========INVENTORY========");
        System.out.println("Prices :");
        System.out.println("Number of green tickets : " + Collections.frequency(inventoryPrice, new GreenTicket()));
        System.out.println("Number of blue tickets : " + Collections.frequency(inventoryPrice, new BlueTicket()));
        System.out.println("Number of purple tickets : " + Collections.frequency(inventoryPrice, new PurpleTicket()));
        System.out.println("Number of gold tickets : " + Collections.frequency(inventoryPrice, new GoldTicket()));
        System.out.println("Number of gold nuggets : " + Collections.frequency(inventoryPrice, new GoldenNugget()));
        System.out.println("Bombs :");
        System.out.println("Number of vertical bombs : " + Collections.frequency(inventoryBomb, new Vertical()));
        System.out.println("Number of horizontal bombs : " + Collections.frequency(inventoryBomb, new Horizontal()));
        System.out.println("Number of simple bombs : " + Collections.frequency(inventoryBomb, new Simple()));
        System.out.println("Number of cross bombs : " + Collections.frequency(inventoryBomb, new Cross()));
        System.out.println("Number of magnet bombs : " + Collections.frequency(inventoryBomb, new Magnet()));
    }

    public void addPrice(Price price) {
        inventoryPrice.add(price);
    }

    public void addBomb(Bomb bomb) {
        inventoryBomb.add(bomb);
    }


}
