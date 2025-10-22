# Yamada UI移行チェックリスト

## 準備フェーズ ✅

### プロジェクト分析
- [x] 現在のShadcnコンポーネント使用状況調査
- [x] Yamada UIコンポーネント対応表作成  
- [x] 移行計画ドキュメント作成
- [x] 依存関係分析

### 環境セットアップ
- [ ] Yamada UIパッケージインストール
- [ ] 基本設定ファイル作成
- [ ] テーマ設定
- [ ] TypeScript型定義確認

## フェーズ1: 基盤移行 🚀

### 基本セットアップ
- [ ] `@yamada-ui/react`インストール
- [ ] `UIProvider`のセットアップ
- [ ] カスタムテーマ設定
- [ ] 基本スタイル調整

### 最重要コンポーネント移行
- [ ] **Button** (`app/components/ui/button.tsx`)
  - [ ] コンポーネント実装
  - [ ] variant props調整
  - [ ] 使用箇所の動作確認
  - [ ] TypeScript型エラー解決

- [ ] **Input** (`app/components/ui/input.tsx`)  
  - [ ] コンポーネント実装
  - [ ] FormControl統合
  - [ ] 使用箇所の動作確認
  - [ ] バリデーション動作確認

- [ ] **Card** (`app/components/ui/card.tsx`)
  - [ ] CardHeader, CardBody, CardFooter実装
  - [ ] 既存のCardTitle, CardDescription移行
  - [ ] 使用箇所の動作確認
  - [ ] レイアウト調整

- [ ] **Separator** (`app/components/ui/separator.tsx`)
  - [ ] Dividerコンポーネント実装
  - [ ] 使用箇所の動作確認

### ユーティリティ更新
- [ ] `app/lib/utils.ts`の調整
- [ ] 不要なユーティリティ関数削除
- [ ] Yamada UI用ヘルパー関数追加

### 動作確認
- [ ] 基本ページの表示確認
- [ ] 認証ページの動作確認
- [ ] レスポンシブデザイン確認

## フェーズ2: フォーム系移行 📝

### フォーム基盤
- [ ] **Label** (`app/components/ui/label.tsx`)
  - [ ] FormLabelコンポーネント実装
  - [ ] FormControl統合

- [ ] **Textarea** (`app/components/ui/textarea.tsx`)
  - [ ] コンポーネント実装
  - [ ] 使用箇所の動作確認

### チェック・選択系
- [ ] **Checkbox** (`app/components/ui/checkbox.tsx`)
  - [ ] コンポーネント実装
  - [ ] 使用箇所の動作確認
  - [ ] フォーム統合確認

- [ ] **RadioGroup** (`app/components/ui/radio-group.tsx`)
  - [ ] RadioGroup, Radioコンポーネント実装
  - [ ] 使用箇所の動作確認

- [ ] **Switch** (`app/components/ui/switch.tsx`)
  - [ ] コンポーネント実装
  - [ ] 使用箇所の動作確認

- [ ] **Select** (`app/components/ui/select.tsx`)
  - [ ] Selectコンポーネント実装
  - [ ] Optionコンポーネント実装
  - [ ] 使用箇所の動作確認
  - [ ] フォーム統合確認

### カスタムコンポーネント
- [ ] **PasswordInput** (`app/components/password-input.tsx`)
  - [ ] Yamada UI Input使用に変更
  - [ ] アイコン表示調整
  - [ ] 動作確認

### フォーム動作確認
- [ ] 認証フォーム（ログイン・サインアップ）
- [ ] 設定フォーム
- [ ] ユーザー作成・編集フォーム
- [ ] タスク作成・編集フォーム
- [ ] バリデーション動作確認
- [ ] エラー表示確認

## フェーズ3: ナビゲーション・レイアウト移行 🧭

### ナビゲーション基盤
- [ ] **Tabs** (`app/components/ui/tabs.tsx`)
  - [ ] Tabs, TabList, Tab, TabPanels, TabPanel実装
  - [ ] 使用箇所の動作確認

- [ ] **Breadcrumb** (`app/components/ui/breadcrumb.tsx`)
  - [ ] Breadcrumb, BreadcrumbItem, BreadcrumbLink実装
  - [ ] 使用箇所の動作確認

### ドロップダウン・メニュー
- [ ] **DropdownMenu** (`app/components/ui/dropdown-menu.tsx`)
  - [ ] Menu, MenuButton, MenuList, MenuItem実装
  - [ ] 既存のDropdownMenu系コンポーネント移行
  - [ ] 使用箇所の動作確認
  - [ ] キーボードナビゲーション確認

### サイドバー（最重要・最難関）
- [ ] **Sidebar** (`app/components/ui/sidebar.tsx`)
  - [ ] 現在の実装分析
  - [ ] Drawer + カスタム実装設計
  - [ ] モバイル対応実装
  - [ ] デスクトップ対応実装
  - [ ] コラプス機能実装
  - [ ] 状態管理調整

### レイアウトコンポーネント更新
- [ ] **AppSidebar** (`app/components/layout/app-sidebar.tsx`)
  - [ ] 新しいSidebarコンポーネント使用
  - [ ] 動作確認

- [ ] **NavUser** (`app/components/layout/nav-user.tsx`)
  - [ ] DropdownMenu移行対応
  - [ ] 動作確認

- [ ] **TeamSwitcher** (`app/components/layout/team-switcher.tsx`)
  - [ ] DropdownMenu移行対応
  - [ ] 動作確認

- [ ] **NavGroup** (`app/components/layout/nav-group.tsx`)
  - [ ] 各種コンポーネント移行対応
  - [ ] 動作確認

### 動作確認
- [ ] サイドバーの開閉動作
- [ ] モバイル・デスクトップ切り替え
- [ ] ナビゲーション機能
- [ ] ユーザーメニュー
- [ ] テーマ切り替え機能

## フェーズ4: フィードバック・モーダル移行 💬

### モーダル・ダイアログ
- [ ] **Dialog** (`app/components/ui/dialog.tsx`)
  - [ ] Modal, ModalOverlay, ModalContent実装
  - [ ] ModalHeader, ModalBody, ModalFooter実装
  - [ ] 使用箇所の動作確認

- [ ] **AlertDialog** (`app/components/ui/alert-dialog.tsx`)
  - [ ] AlertDialog系コンポーネント実装
  - [ ] 使用箇所の動作確認

- [ ] **Sheet** (`app/components/ui/sheet.tsx`)
  - [ ] Drawer系コンポーネント実装
  - [ ] 使用箇所の動作確認

### フィードバック
- [ ] **Alert** (`app/components/ui/alert.tsx`)
  - [ ] Alert, AlertIcon, AlertTitle, AlertDescription実装
  - [ ] 使用箇所の動作確認

- [ ] **Tooltip** (`app/components/ui/tooltip.tsx`)
  - [ ] Tooltipコンポーネント実装
  - [ ] 使用箇所の動作確認

### その他インタラクション
- [ ] **Popover** (`app/components/ui/popover.tsx`)
  - [ ] Popover系コンポーネント実装
  - [ ] 使用箇所の動作確認

- [ ] **Collapsible** (`app/components/ui/collapsible.tsx`)
  - [ ] Collapseコンポーネント実装
  - [ ] 使用箇所の動作確認

### カスタムコンポーネント更新
- [ ] **ConfirmDialog** (`app/components/confirm-dialog.tsx`)
  - [ ] 新しいAlertDialog使用に変更
  - [ ] 動作確認

### 動作確認
- [ ] 各種モーダルの表示・非表示
- [ ] 削除確認ダイアログ
- [ ] エラー・成功通知
- [ ] ツールチップ表示
- [ ] ポップオーバー機能

## フェーズ5: データ表示・その他移行 📊

### データ表示
- [ ] **Table** (`app/components/ui/table.tsx`)
  - [ ] Table, Thead, Tbody, Tr, Th, Td実装
  - [ ] 使用箇所の動作確認
  - [ ] @tanstack/react-table統合確認

- [ ] **Avatar** (`app/components/ui/avatar.tsx`)
  - [ ] Avatar, AvatarImage, AvatarFallback実装
  - [ ] 使用箇所の動作確認

- [ ] **Badge** (`app/components/ui/badge.tsx`)
  - [ ] Badgeコンポーネント実装
  - [ ] variant調整
  - [ ] 使用箇所の動作確認

- [ ] **Skeleton** (`app/components/ui/skeleton.tsx`)
  - [ ] Skeletonコンポーネント実装
  - [ ] 使用箇所の動作確認

### 特殊コンポーネント
- [ ] **Calendar** (`app/components/ui/calendar.tsx`)
  - [ ] react-day-picker統合継続
  - [ ] Yamada UIスタイル適用
  - [ ] 動作確認

- [ ] **InputOTP** (`app/components/ui/input-otp.tsx`)
  - [ ] PinInputコンポーネント実装
  - [ ] または既存ライブラリ継続使用
  - [ ] 動作確認

- [ ] **ScrollArea** (`app/components/ui/scroll-area.tsx`)
  - [ ] ScrollAreaコンポーネント実装
  - [ ] 使用箇所の動作確認

### レイアウト
- [ ] **Stack** (`app/components/ui/stack.tsx`)
  - [ ] HStack, VStack, Stackコンポーネント実装
  - [ ] 使用箇所の動作確認

### カスタムコンポーネント
- [ ] **LongText** (`app/components/long-text.tsx`)
  - [ ] 新しいPopover使用に変更
  - [ ] 動作確認

### データテーブル機能確認
- [ ] タスク一覧テーブル
- [ ] ユーザー一覧テーブル
- [ ] ソート機能
- [ ] フィルタ機能
- [ ] ページネーション
- [ ] 行選択機能

## フェーズ6: 最適化・クリーンアップ 🧹

### 通知システム
- [ ] **Sonner** → **useNotice**移行
  - [ ] `app/components/ui/sonner.tsx`の移行検討
  - [ ] 通知表示の動作確認
  - [ ] または既存システム継続使用

### Command Menu
- [ ] **Command** (`app/components/ui/command.tsx`)
  - [ ] 既存実装の維持またはYamada UI統合
  - [ ] `app/components/command-menu.tsx`の動作確認

### 依存関係クリーンアップ
- [ ] 不要パッケージの特定
  - [ ] `@radix-ui/*`パッケージ
  - [ ] `class-variance-authority`
  - [ ] `tailwind-merge`
  - [ ] 使われていない`clsx`

- [ ] package.json更新
- [ ] pnpm-lock.yaml更新
- [ ] バンドルサイズ確認

### コード最適化
- [ ] 不要なimport削除
- [ ] 型定義の整理
- [ ] ESLintエラー解決
- [ ] TypeScriptエラー解決

### パフォーマンス確認
- [ ] ビルド時間測定
- [ ] バンドルサイズ測定
- [ ] ランタイムパフォーマンス確認
- [ ] メモリ使用量確認

## 最終確認 ✅

### 機能テスト
- [ ] **認証フロー**
  - [ ] ログイン
  - [ ] サインアップ
  - [ ] パスワードリセット
  - [ ] OTP認証

- [ ] **ダッシュボード**
  - [ ] 概要表示
  - [ ] チャート表示
  - [ ] 統計表示

- [ ] **タスク管理**
  - [ ] 一覧表示
  - [ ] 作成・編集・削除
  - [ ] フィルタ・ソート
  - [ ] インポート機能

- [ ] **ユーザー管理**
  - [ ] 一覧表示
  - [ ] 作成・編集・削除
  - [ ] 招待機能

- [ ] **設定**
  - [ ] プロフィール設定
  - [ ] 外観設定
  - [ ] 通知設定
  - [ ] アカウント設定

### UI/UXテスト
- [ ] **レスポンシブデザイン**
  - [ ] モバイル（320px-768px）
  - [ ] タブレット（768px-1024px）
  - [ ] デスクトップ（1024px+）

- [ ] **テーマ切り替え**
  - [ ] ライトモード
  - [ ] ダークモード
  - [ ] システム設定連動

- [ ] **アクセシビリティ**
  - [ ] キーボードナビゲーション
  - [ ] スクリーンリーダー対応
  - [ ] フォーカス管理
  - [ ] カラーコントラスト

### ブラウザ互換性
- [ ] Chrome（最新）
- [ ] Firefox（最新）
- [ ] Safari（最新）
- [ ] Edge（最新）

### 品質チェック
- [ ] ESLint警告・エラーゼロ
- [ ] TypeScript型エラーゼロ
- [ ] ビルドエラーゼロ
- [ ] コンソールエラーゼロ

### ドキュメント更新
- [ ] README.md更新
- [ ] コンポーネント使用例更新
- [ ] 開発環境セットアップ手順更新
- [ ] 移行手順ドキュメント作成

## 完了後の作業 🎉

### リリース準備
- [ ] CHANGELOG.md更新
- [ ] バージョン番号更新
- [ ] リリースノート作成

### 監視・メンテナンス
- [ ] パフォーマンス監視設定
- [ ] エラー監視設定
- [ ] 継続的改善計画作成

---

## 注意事項

⚠️ **重要**: 各フェーズ完了後は必ず全体的な動作確認を行う

⚠️ **ブランチ戦略**: フェーズごとにブランチを切って段階的に進める

⚠️ **バックアップ**: 移行前の状態をブランチまたはタグで保存

⚠️ **テスト**: 移行後は必ず手動テストを実施

⚠️ **パフォーマンス**: 移行後のパフォーマンス劣化に注意