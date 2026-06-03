# 📝 NoteHub

A modern note-taking web application built with Next.js and TypeScript. NoteHub allows users to create, manage, and organize their personal notes with a clean and responsive interface.

## 🌐 Live Demo

[https://09-auth-one-zeta.vercel.app](https://09-auth-one-zeta.vercel.app)

## ✨ Features

- 📋 Create, edit, and delete personal notes
- 🔍 Search notes with debounced input for optimal performance
- 📄 Paginated notes list
- 🔐 User authentication (login & registration)
- 💾 Persistent state management with Zustand
- ⚡ Server-state management with TanStack React Query
- ✅ Form validation with Formik & Yup
- 📱 Fully responsive interface

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript |
| **State Management** | Zustand |
| **Server State** | TanStack React Query |
| **HTTP Client** | Axios |
| **Forms & Validation** | Formik, Yup |
| **Styling** | CSS Modules |
| **Linting** | ESLint, Prettier |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/Archuk1/NoteHub.git
cd NoteHub
```

Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
NoteHub/
├── app/            # Next.js App Router — pages and layouts
├── components/     # Reusable UI components
├── lib/            # Utilities, API clients, helpers
├── types/          # TypeScript type definitions
├── public/         # Static assets
├── next.config.ts  # Next.js configuration
└── proxy.ts        # Proxy configuration
```

## 🚢 Deployment

The project is deployed on [Vercel](https://vercel.com). To deploy your own instance:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
