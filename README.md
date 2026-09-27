# 龙城·誉峰天境 | 置业顾问线上推广实操手册

静态网站版本，可直接部署到任意静态托管服务。

## 文件结构

```
yufeng-promotion-site/
├── index.html      # 主页（手册完整内容）
├── css/
│   └── style.css   # 样式文件
├── js/
│   └── main.js     # 交互脚本（平滑滚动、返回顶部）
└── README.md       # 本说明文件
```

## 本地预览

直接双击 `index.html` 即可在浏览器中打开。

## 部署方式

### 方式一：GitHub Pages（免费）
1. 在 GitHub 新建仓库
2. 把本文件夹所有文件上传到仓库根目录
3. 仓库 Settings → Pages → Source 选 main 分支 → Save
4. 等待1分钟，访问 `https://你的用户名.github.io/仓库名/`

### 方式二：Netlify / Vercel（免费，推荐）
1. 注册 Netlify (netlify.com) 或 Vercel (vercel.com)
2. 把本文件夹拖入部署页面，或关联 GitHub 仓库
3. 自动分配域名，可绑定自定义域名

### 方式三：阿里云 OSS / 腾讯云 COS
1. 创建存储桶，开启"静态网站托管"
2. 把本文件夹所有文件上传到存储桶根目录
3. 默认首页设为 index.html
4. 绑定自定义域名（可选）

### 方式四：公司内网/服务器
1. 把文件夹上传到服务器 Web 根目录（如 /var/www/html/）
2. 配置 Nginx/Apache 指向该目录
3. 访问服务器IP或域名即可

## 注意事项

- 本手册为内部培训资料，部署到公网前请确认是否包含不宜公开的内部信息
- 页面为纯静态，无需后端、无需数据库，加载速度快
- 支持手机、平板、电脑自适应浏览
- 如需修改内容，编辑 index.html 即可；修改样式编辑 css/style.css