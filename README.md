# Dispensary Japan 2025 Digital Catalog

## プロジェクト概要
Dispensary Japanの2025年冬コレクション用デジタルカタログ（LP）。
モバイルファーストの縦型デザインで、Apple製品ページのような「Modern Organic」な高級感を志向しています。

## ディレクトリ構成
```
.
├── index.html        # 全てのHTML/CSS/JSを含むシングルファイル
├── main-logo.png     # ブランドロゴ
├── joyce.jpg         # インポートVAPEの商品画像
├── hamacco-logo.png  # クリエイターブランドロゴ
└── README.md         # 本ファイル
```

## 主な機能
- **レスポンシブLP**: スマホ・PC両対応の洗練されたデザイン。
- **PDF生成機能**: html2pdf.js を使用し、デザインを崩さずカタログとしてDL可能。
- **AIバドテンダー**: Gemini API（またはデモロジック）を使用した接客チャットウィジェット。
- **商品リスト**:
    - Raw Materials (HHBD, H4CBH, Isolates)
    - Import Vape (JOYCE)
    - Herb & Preroll (Temp Hamacco)
    - Liquid & Wax (Original Blends)

## 技術スタック
- **HTML5 / CSS3**: フレームワークなし。<style>タグ内にカスタムCSS（CSS変数活用）を記述。
- **JavaScript**: バニラJS。<script>タグ内にロジックを記述。

### Libraries (CDN)
- html2pdf.js: PDF化
- marked.js: チャットのMarkdownレンダリング
- FontAwesome: アイコン

## 開発ルール
- **シングルファイル維持**: 基本的に index.html 1枚で完結させること（画像を除く）。
- **デザインシステム**: :root で定義された色（--accent-green, --text-gold 等）とフォント（Noto Sans JP, Jost）を厳守すること。
- **画像パス**: 画像は相対パス（例: ./joyce.jpg）で参照すること。

## ToDo
- [ ] AIチャットの本番API連携
- [ ] 注文フォームやカート機能の追加
- [ ] 商品詳細モーダルの実装
