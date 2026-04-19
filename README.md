# 粽夏夜 ZONG DREAM — Landing Page

端午節最夢幻的夜市活動網站，專為高轉換率設計。

## 快速開始

```bash
# 1. 安裝依賴
npm install

# 2. 本地開發
npm start

# 3. 打包
npm run build
```

## 部署到 Vercel（推薦）

### 方法一：Vercel CLI
```bash
npm i -g vercel
vercel
```

### 方法二：GitHub + Vercel 自動部署
1. 將此資料夾推上 GitHub
2. 前往 [vercel.com](https://vercel.com) 並連結 GitHub repo
3. Vercel 會自動偵測 Create React App 並部署

## 檔案結構

```
zong-dream/
├── public/
│   ├── index.html          # HTML 模板
│   └── logo.png            # 活動 Logo（請替換為實際 logo）
├── src/
│   ├── components/
│   │   ├── Navbar.js/.css  # 固定導覽列
│   │   ├── Hero.js/.css    # 主視覺區
│   │   ├── About.js/.css   # 活動介紹
│   │   ├── Zongzi.js/.css  # 粽子展示
│   │   ├── Recruit.js/.css # 招募夥伴（主轉換區）
│   │   ├── Process.js/.css # 參與流程
│   │   ├── Gallery.js/.css # 活動氛圍
│   │   ├── FAQ.js/.css     # 常見問題
│   │   └── Footer.js/.css  # 頁尾 + 最終 CTA
│   ├── hooks/
│   │   └── useScrollAnimation.js  # 滾動動畫 hook
│   ├── App.js/.css         # 主應用程式
│   ├── index.js            # 入口點
│   └── index.css           # 全域樣式 & CSS 變數
├── vercel.json             # Vercel 部署設定
└── package.json
```

## 替換圖片

目前 Gallery 區塊使用 emoji 佔位，正式上線前替換步驟：

1. 將活動照片放入 `public/images/` 資料夾
2. 在 `src/components/Gallery.js` 中，將 `.gi-placeholder` 改為 `<img>` 標籤

## 報名連結

所有 CTA 按鈕連向：`https://www.surveycake.com/s/K9BoY`

若需更換，搜尋 `FORM_URL` 常數修改即可。

## 設計規格

- 主色：深黑 `#05050a` + 金黃 `#f5c842` + 橘琥珀 `#e8941a`
- 字型：Noto Serif TC（標題）+ Cinzel Decorative（英文顯示）+ Noto Sans TC（內文）
- 動畫：Intersection Observer scroll reveal + CSS keyframe 氛圍動畫
- 響應式：Mobile-first，支援 320px 以上所有螢幕
