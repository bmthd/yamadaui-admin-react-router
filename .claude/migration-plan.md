# ShadcnからYamada UIへの移行計画

## プロジェクト概要
ShadcnベースのAdmin Dashboard UIをYamada UIに完全移行する。既存の機能とデザインを維持しながら、Yamada UIの利点を最大化する。

## 現在の状況分析

### 使用中のShadcnコンポーネント（app/components/ui/）
- alert-dialog.tsx
- alert.tsx  
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- button.tsx ⭐ 最重要
- calendar.tsx
- card.tsx ⭐ 最重要
- checkbox.tsx
- collapsible.tsx
- command.tsx
- dialog.tsx ⭐ 最重要
- dropdown-menu.tsx ⭐ 最重要
- input-otp.tsx
- input.tsx ⭐ 最重要
- label.tsx
- popover.tsx
- radio-group.tsx
- scroll-area.tsx
- select.tsx ⭐ 最重要
- separator.tsx
- sheet.tsx
- sidebar.tsx ⭐ 最重要（カスタム実装）
- skeleton.tsx
- sonner.tsx（通知ライブラリ）
- stack.tsx（独自コンポーネント）
- switch.tsx
- table.tsx ⭐ 最重要
- tabs.tsx
- textarea.tsx
- tooltip.tsx

### 外部アイコンライブラリ
- @tabler/icons-react：メインアイコンライブラリ
- @radix-ui/react-icons：一部のアイコン
- lucide-react：一部のアイコン

### 主要依存関係
- @radix-ui/* パッケージ（Shadcnのベース）
- class-variance-authority（CVA）
- clsx + tailwind-merge
- cmdk（コマンドメニュー）
- input-otp
- react-day-picker
- sonner（通知）

## Yamada UIコンポーネント対応表

### フォームコンポーネント
| Shadcn | Yamada UI | 移行難易度 | 備考 |
|--------|-----------|------------|------|
| button.tsx | Button | Easy | 基本的なprops互換 |
| input.tsx | Input, FormControl | Easy | FormControlで拡張 |
| textarea.tsx | Textarea | Easy | 同様のAPI |
| checkbox.tsx | Checkbox | Easy | 基本機能同等 |
| radio-group.tsx | RadioGroup | Easy | 同様のAPI |
| select.tsx | Select, NativeSelect | Medium | APIの違いあり |
| switch.tsx | Switch | Easy | 基本機能同等 |
| label.tsx | FormLabel | Easy | FormControl内で使用 |

### レイアウト・ナビゲーション
| Shadcn | Yamada UI | 移行難易度 | 備考 |
|--------|-----------|------------|------|
| card.tsx | Card, CardHeader, CardBody | Easy | 構造類似 |
| separator.tsx | Divider | Easy | 名前の違いのみ |
| tabs.tsx | Tabs, TabList, Tab, TabPanels, TabPanel | Medium | 構造が異なる |
| breadcrumb.tsx | Breadcrumb | Easy | 同様のAPI |
| sidebar.tsx | Drawer, Box | Hard | カスタム実装必要 |

### フィードバック
| Shadcn | Yamada UI | 移行難易度 | 備考 |
|--------|-----------|------------|------|
| alert.tsx | Alert | Easy | 基本機能同等 |
| dialog.tsx | Modal | Medium | APIの違いあり |
| alert-dialog.tsx | AlertDialog | Easy | 同等機能 |
| sheet.tsx | Drawer | Easy | 同等機能 |
| tooltip.tsx | Tooltip | Easy | 同等機能 |
| skeleton.tsx | Skeleton | Easy | 同等機能 |

### データ表示
| Shadcn | Yamada UI | 移行難易度 | 備考 |
|--------|-----------|------------|------|
| table.tsx | Table | Medium | 構造調整必要 |
| badge.tsx | Badge | Easy | 基本機能同等 |
| avatar.tsx | Avatar | Easy | 同等機能 |
| calendar.tsx | Calendar | Medium | react-day-picker使用継続 |

### その他
| Shadcn | Yamada UI | 移行難易度 | 備考 |
|--------|-----------|------------|------|
| popover.tsx | Popover | Easy | 同等機能 |
| dropdown-menu.tsx | Menu | Medium | 構造が異なる |
| command.tsx | - | Hard | カスタム実装継続 |
| collapsible.tsx | Collapse | Easy | 同等機能 |
| scroll-area.tsx | ScrollArea | Easy | 同等機能 |
| input-otp.tsx | PinInput | Easy | 同等機能 |

## 移行戦略

### フェーズ1：基盤移行（1-2日）
**優先度：最高**
- [ ] Yamada UIのセットアップと基本設定
- [ ] カラーテーマの移行
- [ ] 基本コンポーネント（Button, Input, Card）の移行
- [ ] レイアウトコンポーネントの移行

**対象ファイル：**
- `app/components/ui/button.tsx`
- `app/components/ui/input.tsx`
- `app/components/ui/card.tsx`
- `app/components/ui/separator.tsx`
- `app/lib/utils.ts`

### フェーズ2：フォーム系移行（1-2日）
**優先度：高**
- [ ] Form関連コンポーネントの移行
- [ ] バリデーション周りの調整
- [ ] 認証フォームの動作確認

**対象ファイル：**
- `app/components/ui/label.tsx`
- `app/components/ui/textarea.tsx`
- `app/components/ui/checkbox.tsx`
- `app/components/ui/radio-group.tsx`
- `app/components/ui/select.tsx`
- `app/components/ui/switch.tsx`
- `app/components/password-input.tsx`

### フェーズ3：ナビゲーション・レイアウト移行（2-3日）
**優先度：高**
- [ ] サイドバーの再実装
- [ ] ナビゲーション系コンポーネント移行
- [ ] レスポンシブ対応の確認

**対象ファイル：**
- `app/components/ui/sidebar.tsx`
- `app/components/ui/dropdown-menu.tsx`
- `app/components/ui/tabs.tsx`
- `app/components/ui/breadcrumb.tsx`
- `app/components/layout/*`

### フェーズ4：フィードバック・モーダル移行（1-2日）
**優先度：中**
- [ ] モーダル・ダイアログ系移行
- [ ] 通知系の調整
- [ ] フィードバックコンポーネント移行

**対象ファイル：**
- `app/components/ui/dialog.tsx`
- `app/components/ui/alert-dialog.tsx`
- `app/components/ui/alert.tsx`
- `app/components/ui/sheet.tsx`
- `app/components/ui/tooltip.tsx`

### フェーズ5：データ表示・その他移行（2-3日）
**優先度：中**
- [ ] テーブルコンポーネント移行
- [ ] アバター・バッジ移行
- [ ] その他コンポーネント移行

**対象ファイル：**
- `app/components/ui/table.tsx`
- `app/components/ui/avatar.tsx`
- `app/components/ui/badge.tsx`
- `app/components/ui/skeleton.tsx`
- `app/components/ui/calendar.tsx`

### フェーズ6：最適化・クリーンアップ（1-2日）
**優先度：低**
- [ ] 不要依存関係の削除
- [ ] コードの最適化
- [ ] パフォーマンスチェック
- [ ] ドキュメント更新

## 技術的考慮事項

### スタイリングアプローチ
- Yamada UIの標準テーマシステムを採用
- カスタムCSSは最小限に抑制
- レスポンシブデザインをYamada UIの仕組みで実装

### 互換性維持
- 既存のAPIを可能な限り維持
- プロップス名の変更は最小限に
- 段階的移行でブレイクしないように注意

### パフォーマンス
- バンドルサイズの最適化
- 不要な依存関係の除去
- Tree-shakingの活用

## リスク分析

### 高リスク
- **サイドバーコンポーネント**: 大幅な再実装が必要
- **データテーブル**: @tanstack/react-tableとの統合
- **カスタムフック**: レイアウト制御の調整

### 中リスク
- **フォームバリデーション**: Conformとの互換性
- **テーマシステム**: カラー設定の移行
- **アニメーション**: トランジション効果の調整

### 低リスク
- **基本コンポーネント**: APIが類似している
- **アイコン**: 既存ライブラリ継続使用
- **ユーティリティ**: 最小限の変更

## 品質保証

### テスト戦略
1. **コンポーネント単位**: 移行後の動作確認
2. **ページ単位**: 各ルートの動作確認
3. **クロスブラウザ**: 主要ブラウザでの確認
4. **レスポンシブ**: 各デバイスサイズでの確認

### チェックリスト
- [ ] すべてのコンポーネントが正常に表示される
- [ ] フォームの送信・バリデーションが機能する
- [ ] ナビゲーションが正常に動作する
- [ ] テーマ切り替えが機能する
- [ ] レスポンシブデザインが適切に動作する
- [ ] アクセシビリティが維持される

## スケジュール
- **準備期間**: 1日（計画・セットアップ）
- **実装期間**: 8-12日（フェーズ1-6）
- **テスト期間**: 2-3日
- **バッファ**: 2-3日

**総期間**: 約2-3週間

## 成功指標
1. 全機能の維持
2. パフォーマンス向上（バンドルサイズ削減）
3. 開発体験の向上
4. 保守性の向上
5. アクセシビリティの向上