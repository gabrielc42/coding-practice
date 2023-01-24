package twoDmArray;

import java.util.Arrays;

public class Rotating {
    public static void main(String[] args) {
        // NOTE: The following input values will be used for testing your solution.
        int a1[][] = {{1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}};
        System.out.println(Arrays.deepToString(rotate(a1, 3)) + "\n");
        System.out.println(Arrays.deepToString(rotateInPlace(a1,3))+ "\n");
        // should return:
        // [[7, 4, 1],
        //  [8, 5, 2],
        //  [9, 6, 3]]

        int a2[][] = {{1, 2, 3, 4},
                {5, 6, 7, 8},
                {9, 10, 11, 12},
                {13, 14, 15, 16}};
        System.out.println(Arrays.deepToString(rotate(a2, 4)) + "\n");
        System.out.println(Arrays.deepToString(rotateInPlace(a2,4))+ "\n");
        // rotate(a2, 4) should return:
        // [[13, 9, 5, 1],
        //  [14, 10, 6, 2],
        //  [15, 11, 7, 3],
        //  [16, 12, 8, 4]]
    }

    public static int[][] rotate(int[][] a, int n) {
        int[][] rotated = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                rotated[j][n - 1 - i] = a[i][j];
            }
        }
        return rotated;
    }

    public static int[][] rotateInPlace(int[][] a, int n) {
        for (int i = 0; i < n / 2 + n % 2; i++) {
            for (int j = 0; j < n / 2; j++) {
                int[] tmp = new int[4];
                int currentI = i;
                int currentJ = j;
                for (int k = 0; k < 4; k++) {
                    tmp[k] = a[currentI][currentJ];
                    int[] newCoordinates = rotateSub(currentI, currentJ, n);
                    currentI = newCoordinates[0];
                    currentJ = newCoordinates[1];
                }
                for (int k = 0; k < 4; k++) {
                    a[currentI][currentJ] = tmp[(k + 3) % 4];
                    int[] newCoordinates = rotateSub(currentI, currentJ, n);
                    currentI = newCoordinates[0];
                    currentJ = newCoordinates[1];
                }
            }
        }
        return a;
    }

    private static int[] rotateSub(int i, int j, int n) {
        int[] newCoordinates = new int[2];
        newCoordinates[0] = j;
        newCoordinates[1] = n - 1 - i;
        return newCoordinates;
    }
}
