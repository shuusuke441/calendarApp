
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
# リポジトリのURLは各自の環境に合わせて変更してください
git clone git@github.com:shuusuke441/calendarApp.git
cd <プロジェクト名>