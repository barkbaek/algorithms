/*
- URL : https://www.acmicpc.net/problem/10844
- Language : Java

제목 : 쉬운 계단 수

-------------------------------------------------------------------------------
문제
45656이란 수를 보자.

이 수는 인접한 모든 자리수의 차이가 1이 난다. 이런 수를 계단 수라고 한다.

세준이는 수의 길이가 N인 계단 수가 몇 개 있는지 궁금해졌다.

N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구하는 프로그램을 작성하시오. (0으로 시작하는 수는 없다.)

-------------------------------------------------------------------------------
입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 100보다 작거나 같은 자연수이다.

-------------------------------------------------------------------------------
출력
첫째 줄에 정답을 1,000,000,000으로 나눈 나머지를 출력한다.

-------------------------------------------------------------------------------
예제 입력
1

-------------------------------------------------------------------------------
예제 출력
9

-------------------------------------------------------------------------------
예제 입력
2

-------------------------------------------------------------------------------
예제 출력
17

-------------------------------------------------------------------------------
*/

import java.util.*;

public class Main10844 {

        public static long[][] d;

        public static int go(int n) {
                long res = 0;
                long mod = 1000000000L;

                for (int i=1; i<=9; i++) d[1][i] = 1;
                for (int i=2; i<=n; i++) {
                        for (int j=0; j<=9; j++) {
                                d[i][j] = 0;
                                if (j == 0) d[i][0] = d[i-1][1];
                                else if (j == 9) d[i][9] = d[i-1][8];
                                else {
                                        d[i][j] = d[i-1][j-1] + d[i-1][j+1];
                                }
                                d[i][j] %= mod;
                        }
                }

                for (int i=0; i<=9; i++) {
                        res += d[n][i];
                }
                res %= mod;

                return (int)res;
        }

        public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                int inp = sc.nextInt();

                d = new long[inp + 1][10];

                System.out.println(go(inp));
        }
}
