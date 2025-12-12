
# 📅 カレンダーアプリケーション

このドキュメントは、カレンダーアプリケーションのプロジェクトメンバー向けセットアップガイドです。ローカル環境を構築し、開発を開始するために必要な手順がすべて記載されています。

---
## 💪 0-5.前置き技術

使用技術
<img src="https://img.shields.io/badge/-Kotlin-0095D5.svg?logo=kotlin&style=plastic">
<img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=plastic">
<img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=plastic">

## 🚀 1. 開発環境のセットアップ

### 1-1. 必要なツールの準備

開発を開始する前に、以下のツールがローカルマシンにインストールされていることを確認してください。

| ツール名 | バージョン/要件 | 備考 |
| :--- | :--- | :--- |
| **Git** | 最新版を推奨 | ソースコード管理に使用します。 |
| **Java Development Kit (JDK)** | **21** | `build.gradle.kts` の設定に基づきます。 |
| **IDE** | IntelliJ IDEA (Ultimate/Community) | Kotlin/Spring開発に最適です。 |

### 1-2. プロジェクトのクローン

以下のコマンドを実行して、リポジトリをローカルに複製し、プロジェクトディレクトリへ移動します。

```bash
git clone git@github.com:shuusuke441/calendarApp.git
cd calendarApp

```

### 1-3. 依存関係の解決とビルド

Gradleラッパーを使用してプロジェクトをビルドし、必要な依存ライブラリをダウンロードします。

Bash
### macOS / Linux の場合
```
./gradlew build
```

### Windows の場合
```
.\gradlew build
```

## 2. 🗃️ データベースの設定
本プロジェクトでは、開発初期には組み込みのH2データベースを使用し、連携・本番環境ではPostgreSQLを使用します。

### 2-1. H2 (ローカル開発用)

特別な設定は不要です。アプリケーションを起動すれば自動的にH2データベースがメモリ上に構築されます。

H2 Consoleアクセス:

起動後、ブラウザで http://localhost:8080/h2-console にアクセスするとDB内容を確認できます。<br>
（接続情報は application.properties を参照してください）

### 2-2. PostgreSQL (連携/本番環境用)

PostgreSQLに接続する場合、src/main/resources/application.properties または application.yml に以下の設定を追記または編集する必要があります。

Properties
### application.properties (PostgreSQL 設定例)
```
spring.datasource.url=jdbc:postgresql://<ホスト名>:<ポート>/<データベース名>
spring.datasource.username=<ユーザー名>
spring.datasource.password=<パスワード>
```
### DBスキーマの自動更新を有効にする設定 (開発時に推奨)
```
spring.jpa.hibernate.ddl-auto=update
```
## 3. ▶️ アプリケーションの実行
ビルドが成功し、データベース設定が完了したら、以下のコマンドでアプリケーションを起動します。

Bash
### macOS / Linux の場合
```
./gradlew bootRun
```
### Windows の場合
```
.\gradlew bootRun
```

アプリケーションが起動したら、http://localhost:8080 からアクセスできます。

