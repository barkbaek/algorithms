import java.util.*;
import java.io.*;

public class Main {
	public static void main(String[] args) throws IOException {
		MyScanner ms = new MyScanner();
		MyPrinter mp = new MyPrinter();
		
		ms.close();
		mp.close();
	}
	
	public static class MyScanner {
		private BufferedReader br;
		private StringTokenizer st;
		
		
		public MyScanner() {
			br = new BufferedReader(new InputStreamReader(System.in));
		}
		
		public String next() throws IOException {
			while (st == null || !st.hasMoreElements()) {
				st = new StringTokenizer(br.readLine());
			}
			return st.nextToken();
		}
		
		public int nextInt() throws IOException {
			return Integer.parseInt(next());
		}
		
		public long nextLong() throws IOException {
			return Long.parseLong(next());
		}
		
		public double nextDouble() throws IOException {
			return Double.parseDouble(next());
		}
		
		public String nextLine() throws IOException {
			String str = "";
			str = br.readLine();
			return str;
		}
		
		public void close() throws IOException {
			br.close();
		}
	}
	
	public static class MyPrinter {
		
		BufferedWriter bw;
		
		public MyPrinter() {
			bw = new BufferedWriter(new OutputStreamWriter(System.out));
		}
		
		public void print(Object obj) throws IOException {
			bw.append("" + obj);
		}
		
		public void println(Object obj) throws IOException {
			bw.append(obj + "\n");
		}
		
		public void close() throws IOException {
			bw.close();
		}
	}
}
