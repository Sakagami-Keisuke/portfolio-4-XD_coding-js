mkdir _gulp/

cd _gulp/

npm init -y
 package.json

 npm i gulp gulp-dart-sass gulp-plumber gulp-notify browser-sync
  node_modules
  package-lock.json

  touch gulpfile.js
  　https://tips-web.net/gulp4-mac/ コピペ

  const watchFiles = () => {
  gulp.watch(srcPath.scss, gulp.series(cssSass, browserSyncReload))　追加

cd

mkdir _assets/scss/modules

mkdir _static/src

cd _gulp/
 npx gulp


要件
開発要件
・ヘッダーは固定（追随する）

・SP版はPC版を参考に作成

・よくある質問のアコーディオンはデフォルトは１つ目のみ
　開いている状態で（js利用）

・制作実績部分はスライダーになるので、swiperを利用　5秒おきに自動スワイプするようにしてください。
　また、スマホで指でも左右にスワイプできる

・AOS.jsなどで各々の要素をふわっと表示

・「お問い合わせ」ボタンを押すと、お問い合わせフォームに　　スムーススクロールする

・フォントは
Google Fontsの「Noto sans jp」

・フォームの部分は全入力欄および「プライバシーポリシーに同意します」に
チェックがないとsubmitできないようにする
参考記事：https://shogo-log.com/submit-disabled/

・余裕があれば、以下いずれか使用し、お問い合わせフォームを　動作するようにしてみる
　①Googleフォームとの紐づけ↓
　https://shogo-log.com/google-form-ajax/
　②Responsive Mailform
　③WordPress化してフォーム設置

・faviconについては、ロゴ画像を使用

・パーフェクトピクセル