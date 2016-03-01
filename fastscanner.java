public static class MyScanner {
		BufferedReader br;
		StringTokenizer st;
		
		// 초기화
		public MyScanner() {
			br = new BufferedReader(new InputStreamReader(System.in));
		}
		
		// next 입력 읽고 반환하기
		String next() {
			while(st == null || !st.hasMoreElements()) {
				try {
					st = new StringTokenizer(br.readLine());
				}catch (IOException e) {
					e.printStackTrace();
				}
			}
			return st.nextToken();
		}
		
		// int
		int nextInt() {
			return Integer.parseInt(next());
		}
		
		// long
		long nextLong() {
			return Long.parseLong(next());
		}
		
		// double
		double nextDouble() {
			return Double.parseDouble(next());
		}
		
		// nextLine
		String nextLine() {
			String str = "";
			try {
				str = br.readLine();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			return str;
		}
		
		void close() throws IOException {
			br.close();
		}
	}
	
	public static class MyPrint {
		BufferedWriter bw;
		
		public MyPrint() {
			bw = new BufferedWriter(new OutputStreamWriter(System.out));
		}
		
		void print(Object object) throws IOException {
			bw.append("" + object);
		}
		
		void println(Object object) throws IOException {
			print(object);
			bw.append("\n");
		}
		void close() throws IOException {
			bw.close();
		}
	}
