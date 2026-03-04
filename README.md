# 🍓 Zen Berry v0.1.0

A personalized productivity app designed to help users make consistent progress on their tasks and projects while preventing burnout through customizable Pomodoro timers and focused task management.

![Zen Berry Preview](https://via.placeholder.com/800x400.png?text=Zen+Berry+Productivity+App)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Why Zen Berry?](#-why-zen-berry)
- [Target Audience](#-target-audience)
- [Core Features](#-core-features)
- [Upcoming Features](#-upcoming-features)
- [Technical Stack](#-technical-stack)
- [Project Structure](#-project-structure)
- [Development Roadmap](#-development-roadmap)
- [Monitoring & Observability](#-monitoring--observability)
- [DevOps & Infrastructure](#-devops--infrastructure)
- [License](#-license)

---

## 🎯 Overview

Zen Berry is a thoughtfully crafted productivity application born from personal experience with focus challenges and burnout.

It combines:

- A fully customizable Pomodoro timer  
- An intelligent task management system  
- A Most Important Tasks (MIT) focus system  

The goal is simple:  
**Help you focus on what truly matters each day — without burning out.**

---

## 💡 Why Zen Berry?

I built Zen Berry to solve my own productivity struggles, and I'm sharing it to help others facing similar challenges.

The app is designed to be:

- Flexible (not rigid like traditional systems)
- Offline-first
- Built for real-world workflows
- Continuously evolving based on user feedback

---

## 👥 Target Audience

- Busy professionals juggling multiple responsibilities  
- Creative individuals struggling with focus  
- Students managing academic workloads  
- Anyone who wants to be productive without burnout  
- People who found traditional productivity systems too rigid  

---

## ✨ Core Features

### 🍅 Customizable Pomodoro Timer

- Set any duration (minutes or hours)
- Visual and audio notifications
- Integrated break timer
- Session tracking with offline persistence
- Automatic synchronization when online

---

### ⭐ Top 3 MIT (Most Important Tasks)

- Prominently displayed priority tasks
- Tasks remain highlighted until completed
- Cannot be accidentally removed or replaced
- Visually distinct from regular tasks
- Syncs across devices when connected

---

### 📋 Smart Task List

- Brain dump area for non-urgent tasks
- Drag-and-drop to promote tasks to MIT
- Task categorization and filtering
- Persistent storage across sessions
- Offline-first with background sync

---

### 📱 Offline-First Architecture

- Fully functional without internet
- IndexedDB storage on client
- Background synchronization
- Conflict resolution handling
- Offline queue for pending operations

---

## 🚀 Upcoming Features

### 🤖 AI Integration (DeepSeek API / Gemini)

- Productivity analytics
- Personalized insights
- Smart task prioritization suggestions
- Work pattern recognition
- AI API documentation (pending endpoint implementation)

---

### 🎉 Motivational System

- Achievement notifications
- Productivity streak tracking
- Encouraging milestone messages
- Visual celebrations

---

### 📊 Advanced Analytics

- Work session analysis
- Productivity trends over time
- Personalized improvement recommendations
- Prometheus + Grafana dashboards

---

## 🛠 Technical Stack

### Frontend

- **Framework:** React + TypeScript
- **Routing:** TanStack Router
- **State Management:** Zustand
- **Data Fetching:** TanStack Query
- **Styling:** Tailwind CSS
- **Icons:** Lucide
- **Animations:** Framer Motion
- **Charts:** Recharts / Chart.js
- **Offline Support:** Dexie.js, Workbox
- **Notifications:** React Hot Toast
- **Markdown Rendering:** React Markdown
- **Code Highlighting:** React Syntax Highlighter

---

### Backend

- **Runtime:** Node.js + Express
- **Validation:** express-validator
- **Security:** Helmet.js
- **Logging:** Winston
- **Rate Limiting:** express-rate-limit
- **Real-time:** Socket.io
- **Monitoring:** Prometheus client

---

### Database & Caching

- **Primary DB:** MongoDB
- **User Data:** Supabase (SQL)
- **Caching:** Redis
- **Offline Sync:** IndexedDB + MongoDB change streams
- **Backups:** Automated daily backups with point-in-time recovery

---

### Authentication & Security

- JWT in HTTP-only cookies
- bcrypt password hashing
- OAuth (Google, GitHub)
- CORS configuration
- Rate limiting
- Input sanitization
- Redis session management

---

## 🚀 DevOps & Infrastructure

- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Background Jobs:** BullMQ + Redis
- **Cron Jobs:** Automated maintenance
- **Monitoring Stack:** Prometheus + Grafana
- **Backup Strategy:** Daily automated backups + disaster recovery runbooks

---

## 📊 Monitoring & Observability

- System metrics via Prometheus
- Grafana dashboards
- Winston logging with rotation
- Grafana alerting
- Custom business metrics:
  - Daily Active Users
  - Task completion rate
  - Timer usage trends
  - Retention tracking

---

## 🗺 Development Roadmap

- [x] Core Pomodoro Timer
- [x] MIT Task System
- [x] Offline-first architecture
- [ ] AI endpoints implementation
- [ ] OpenAPI/Swagger documentation
- [ ] Advanced analytics dashboard
- [ ] Motivational reward system
- [ ] Public beta release

---

## 📄 License

This project is currently private and under active development.

License details will be added prior to public release.

---

Built with focus, intention, and a commitment to sustainable productivity. 🍓
