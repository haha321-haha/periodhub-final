# Period Hub Platform 🌸

> 专业的女性月经健康管理平台 | Professional Women's Menstrual Health Management Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/haha321-haha/periodhub-final)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.29-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC)](https://tailwindcss.com/)

## 🎯 项目概述 | Project Overview

Period Hub Platform 是一个现代化的女性月经健康管理平台，提供专业的健康指导、互动工具和个性化建议。

Period Hub Platform is a modern women's menstrual health management platform providing professional health guidance, interactive tools, and personalized recommendations.

### ✨ 核心功能 | Core Features

- 🔍 **症状评估工具** - 专业的疼痛评估和个性化建议
- 📊 **疼痛追踪器** - 智能的疼痛记录和趋势分析
- 🧘 **中医体质测试** - 传统中医体质评估
- 📚 **健康指南** - 全面的月经健康知识库
- 🌍 **多语言支持** - 中英文双语界面
- 📱 **响应式设计** - 完美适配移动端和桌面端

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- Node.js 20.15.0+
- npm 或 yarn
- Git

### 安装步骤 | Installation

```bash
# 克隆仓库 | Clone repository
git clone https://github.com/haha321-haha/periodhub-final.git
cd periodhub-final

# 安装依赖 | Install dependencies
npm install

# 启动开发服务器 | Start development server
npm run dev

# 构建生产版本 | Build for production
npm run build

# 启动生产服务器 | Start production server
npm start
```

### 🌐 访问应用 | Access Application

- **开发环境**: http://localhost:3000
- **生产环境**: 部署后的域名

## 📁 项目结构 | Project Structure

```
periodhub-final/
├── app/                    # Next.js 13+ App Router
│   ├── [locale]/          # 国际化路由
│   │   ├── articles/      # 文章页面
│   │   ├── health-guide/  # 健康指南
│   │   ├── interactive-tools/ # 互动工具
│   │   └── ...
│   └── globals.css        # 全局样式
├── components/            # 可复用组件
├── lib/                   # 工具库和配置
├── messages/              # 国际化翻译文件
├── public/                # 静态资源
├── types/                 # TypeScript 类型定义
└── hooks/                 # 自定义 React Hooks
```

## 🛠️ 技术栈 | Tech Stack

### 前端框架 | Frontend Framework
- **Next.js 14.2.29** - React 全栈框架
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript

### 样式和UI | Styling & UI
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide React** - 现代图标库
- **响应式设计** - 移动端优先

### 国际化 | Internationalization
- **next-intl** - Next.js 国际化解决方案
- **中英文双语** - 完整的双语支持

### 状态管理 | State Management
- **Zustand** - 轻量级状态管理
- **React Hooks** - 本地状态管理

### 开发工具 | Development Tools
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Jest** - 单元测试框架

## 🔧 配置说明 | Configuration

### 环境变量 | Environment Variables

创建 `.env.local` 文件：

```env
# 应用配置
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=zh

# 分析工具（可选）
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
```

### 部署配置 | Deployment Configuration

项目已配置用于 Vercel 部署：

- `vercel.json` - Vercel 部署配置
- `next.config.js` - Next.js 优化配置
- 自动静态优化和图片优化

## 📱 功能模块 | Feature Modules

### 🔍 互动工具 | Interactive Tools
- **症状评估工具** - 12个专业问题的疼痛评估
- **疼痛追踪器** - 日常疼痛记录和分析
- **中医体质测试** - 传统中医体质评估

### 📚 内容模块 | Content Modules
- **健康指南** - 专业的月经健康知识
- **场景解决方案** - 不同场景下的应对方案
- **青少年专区** - 针对青少年的健康指导

### 🌐 多语言支持 | Multi-language Support
- **中文** - 简体中文界面
- **English** - 完整英文界面
- **自动检测** - 基于浏览器语言自动切换

## 🚀 部署指南 | Deployment Guide

### Vercel 部署 | Vercel Deployment

1. Fork 此仓库到您的 GitHub 账户
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 点击部署

### 自定义域名 | Custom Domain

在 Vercel 项目设置中添加自定义域名，并更新 `public/CNAME` 文件。

## 🤝 贡献指南 | Contributing

我们欢迎社区贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证 | License

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👥 团队 | Team

- **开发者**: [@haha321-haha](https://github.com/haha321-haha)
- **项目地址**: https://github.com/haha321-haha/periodhub-final

## 📞 联系我们 | Contact

如有问题或建议，请通过以下方式联系：

- GitHub Issues: [提交问题](https://github.com/haha321-haha/periodhub-final/issues)
- GitHub: [@haha321-haha](https://github.com/haha321-haha)

---

<div align="center">
  <p>💝 为女性健康而构建 | Built for Women's Health 💝</p>
  <p>Made with ❤️ by Period Hub Team</p>
</div>
