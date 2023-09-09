public class TrafficLightSimulation {
    public static void main(String[] args) {
        int time = 0;
        String color = "red";

        while (time < 60) { // loop for 60 seconds
            System.out.println("Time: " + time + "s, Color: " + color);
            time++;

            if (time < 30) {
                color = "green";
            } else if (time < 40) {
                color = "yellow";
            } else {
                color = "red";
            }
        }
    }
}
