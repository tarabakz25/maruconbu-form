/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // プロジェクトに合わせて content パスを設定してください
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}", // src ディレクトリがある場合
  ],
  theme: {
    extend: {
      fontFamily: {
        // デフォルトの sans-serif フォントを "ab-don" に設定
        // Adobe Fonts で指定された正確なフォント名を引用符で囲んでください
        // フォールバックとして一般的なサンセリフフォントを指定します
        sans: ['ab-don', 'Helvetica', 'Arial', 'sans-serif'],
        // 必要であれば Geist フォント用の変数も残しておきます
        geist: ['var(--font-geist-sans)'],
        geistmono: ['var(--font-geist-mono)'],
      },
      // 他の extend 設定があればここに追加
      //例: backgroundImage: { ... }, colors: { ... },
    },
  },
  plugins: [],
}; 