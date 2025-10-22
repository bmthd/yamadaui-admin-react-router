# ShadcnからYamada UIコンポーネント対応表

## 使用頻度別優先度

### 🔴 最重要（高頻度使用）
これらのコンポーネントは多くのページで使用されており、最優先で移行する必要があります。

| Shadcn Component | Yamada UI Component | Import Path | 変更点 |
|------------------|---------------------|-------------|--------|
| `Button` | `Button` | `@yamada-ui/react` | variant propsが一部異なる |
| `Input` | `Input` | `@yamada-ui/react` | FormControlとの組み合わせ推奨 |
| `Card` | `Card`, `CardHeader`, `CardBody`, `CardFooter` | `@yamada-ui/react` | 構造化されたコンポーネント |
| `Dialog` | `Modal`, `ModalOverlay`, `ModalContent` | `@yamada-ui/react` | より詳細な制御が可能 |
| `DropdownMenu` | `Menu`, `MenuItem`, `MenuList` | `@yamada-ui/react` | 構造が大きく異なる |
| `Select` | `Select`, `Option` | `@yamada-ui/react` | シンプルなAPI |
| `Table` | `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td` | `@yamada-ui/react` | より詳細な制御 |

### 🟡 重要（中頻度使用）

| Shadcn Component | Yamada UI Component | Import Path | 変更点 |
|------------------|---------------------|-------------|--------|
| `Alert` | `Alert`, `AlertIcon`, `AlertTitle`, `AlertDescription` | `@yamada-ui/react` | 構造化されたコンポーネント |
| `Avatar` | `Avatar`, `AvatarImage`, `AvatarFallback` | `@yamada-ui/react` | 類似のAPI |
| `Badge` | `Badge` | `@yamada-ui/react` | variant propsが一部異なる |
| `Checkbox` | `Checkbox` | `@yamada-ui/react` | 基本的に同じAPI |
| `Label` | `FormLabel` | `@yamada-ui/react` | FormControlとの組み合わせ |
| `Separator` | `Divider` | `@yamada-ui/react` | 名前の違いのみ |
| `Tabs` | `Tabs`, `TabList`, `Tab`, `TabPanels`, `TabPanel` | `@yamada-ui/react` | より構造化された実装 |
| `Textarea` | `Textarea` | `@yamada-ui/react` | 基本的に同じAPI |

### 🟢 標準（低〜中頻度使用）

| Shadcn Component | Yamada UI Component | Import Path | 変更点 |
|------------------|---------------------|-------------|--------|
| `AlertDialog` | `AlertDialog`, `AlertDialogOverlay`, `AlertDialogContent` | `@yamada-ui/react` | 類似の構造 |
| `Breadcrumb` | `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbLink` | `@yamada-ui/react` | 類似のAPI |
| `Calendar` | カスタム実装 + `react-day-picker` | - | Yamada UIに標準カレンダーなし |
| `Collapsible` | `Collapse` | `@yamada-ui/react` | 基本的に同じ機能 |
| `Popover` | `Popover`, `PopoverTrigger`, `PopoverContent` | `@yamada-ui/react` | 類似のAPI |
| `RadioGroup` | `RadioGroup`, `Radio` | `@yamada-ui/react` | 基本的に同じAPI |
| `ScrollArea` | `ScrollArea` | `@yamada-ui/react` | 同等機能 |
| `Sheet` | `Drawer`, `DrawerOverlay`, `DrawerContent` | `@yamada-ui/react` | 類似の機能 |
| `Skeleton` | `Skeleton` | `@yamada-ui/react` | 基本的に同じAPI |
| `Switch` | `Switch` | `@yamada-ui/react` | 基本的に同じAPI |
| `Tooltip` | `Tooltip` | `@yamada-ui/react` | 基本的に同じAPI |

### 🔵 特殊（カスタム実装必要）

| Shadcn Component | Yamada UI代替案 | Import Path | 対応方法 |
|------------------|----------------|-------------|---------|
| `Command` | カスタム実装 | - | cmdkライブラリ継続使用 |
| `InputOTP` | `PinInput` | `@yamada-ui/react` | 類似機能で代替可能 |
| `Sidebar` | `Drawer` + カスタム実装 | `@yamada-ui/react` | 既存ロジック移植 |
| `Sonner` | `useNotice` | `@yamada-ui/react` | 通知システムを変更 |
| `Stack` | `HStack`, `VStack`, `Stack` | `@yamada-ui/react` | より豊富なレイアウトオプション |

## API変更詳細

### Button
```tsx
// Shadcn
<Button variant="outline" size="sm">Click me</Button>

// Yamada UI
<Button variant="outline" size="sm">Click me</Button>
// ほぼ同じだが、variantオプションが一部異なる
```

### Card
```tsx
// Shadcn
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Yamada UI
<Card>
  <CardHeader>
    <Heading size="md">Title</Heading>
    <Text color="gray.500">Description</Text>
  </CardHeader>
  <CardBody>Content</CardBody>
</Card>
```

### Dialog
```tsx
// Shadcn
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    Content
  </DialogContent>
</Dialog>

// Yamada UI
<Modal isOpen={open} onClose={() => setOpen(false)}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Title</ModalHeader>
    <ModalBody>Content</ModalBody>
  </ModalContent>
</Modal>
```

### DropdownMenu
```tsx
// Shadcn
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// Yamada UI
<Menu>
  <MenuButton as={Button}>Menu</MenuButton>
  <MenuList>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
  </MenuList>
</Menu>
```

### Select
```tsx
// Shadcn
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Yamada UI
<Select value={value} onChange={setValue} placeholder="Select...">
  <Option value="option1">Option 1</Option>
  <Option value="option2">Option 2</Option>
</Select>
```

## スタイリング変更

### Yamada UIテーマシステム
- `class-variance-authority`から`Yamada UI`のバリアントシステムへ
- `cn()`ユーティリティは不要（Yamada UIが内部で処理）
- カスタムCSSの代わりにテーマトークンを使用

### カラーシステム
```tsx
// Shadcn (Tailwind)
className="bg-red-500 text-white"

// Yamada UI
bg="red.500" color="white"
```

### レスポンシブデザイン
```tsx
// Shadcn (Tailwind)
className="w-full md:w-1/2 lg:w-1/3"

// Yamada UI
w={{ base: "full", md: "50%", lg: "33%" }}
```

## 移行時の注意点

1. **段階的移行**: 一度にすべてを変更せず、コンポーネント単位で移行
2. **TypeScript型**: Yamada UIの型定義に合わせて調整
3. **アクセシビリティ**: Yamada UIの標準的なa11y機能を活用
4. **テーマ**: カスタムテーマの設定が必要
5. **パフォーマンス**: バンドルサイズとレンダリング性能の確認

## 削除予定の依存関係

移行完了後に削除できるパッケージ：
- `@radix-ui/*` (すべて)
- `class-variance-authority`
- `tailwind-merge`
- `clsx` (一部は残す可能性)
- `react-day-picker` (カレンダー機能をYamada UIで実装する場合)

## 継続使用する依存関係

- `@tabler/icons-react` (アイコンライブラリ)
- `lucide-react` (必要に応じて)
- `cmdk` (コマンドメニュー用)
- `input-otp` (PinInputで代替できない場合)
- `sonner` (通知システムを変更しない場合)