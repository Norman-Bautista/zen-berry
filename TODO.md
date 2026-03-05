# 🍓 Zen Berry – Project TODO

This document tracks the full development lifecycle of Zen Berry  
from initial setup to production-ready release.

---

# 🧱 PHASE 1 — Project Foundation

## 📁 Repository Setup
- [x] Configure branch strategy (main / dev / feature/*)
- [x] Setup commit conventions (Conventional Commits)
- [x] Add README.md
- [x] Add TODO.md
- [ ] Add LICENSE (before public release)
- [ ] Configure .gitignore (Node, logs, env, build, etc.)

---

## ⚙️ Frontend Setup (React + TypeScript)

- [ ] Initialize React + Vite + TypeScript
- [ ] Install Tailwind CSS
- [ ] Configure Tailwind theme
- [ ] Setup TanStack Router
- [ ] Setup Zustand store structure
- [ ] Setup TanStack Query provider
- [ ] Install UI dependencies:
  - [ ] Lucide
  - [ ] Framer Motion
  - [ ] React Hot Toast
  - [ ] Recharts / Chart.js
  - [ ] React Markdown
  - [ ] React Syntax Highlighter
- [ ] Setup folder structure (feature-based architecture)
- [ ] Create layout shell (Navbar / Sidebar / Layout)
- [ ] Setup environment config (.env)

---

## 🖥 Backend Setup (Node + Express)

- [ ] Initialize Node.js project
- [ ] Setup Express server structure
- [ ] Setup TypeScript (if using TS backend)
- [ ] Configure:
  - [ ] Helmet
  - [ ] CORS
  - [ ] express-validator
  - [ ] Winston logger
  - [ ] express-rate-limit
- [ ] Setup global error handler
- [ ] Create health check endpoint `/health`
- [ ] Setup environment variables

---

## 🗄 Database & Infrastructure Setup

- [ ] Setup MongoDB connection
- [ ] Design task schema
- [ ] Design session schema
- [ ] Setup Supabase project (auth + relational data)
- [ ] Setup Redis
- [ ] Configure Redis session management
- [ ] Setup MongoDB indexes
- [ ] Setup backup scripts
- [ ] Setup change streams for sync

---

# 🍅 PHASE 2 — Core Features Implementation

## ⏱ Pomodoro Timer

- [ ] Create Timer UI
- [ ] Implement custom duration input
- [ ] Add start / pause / reset logic
- [ ] Add break timer integration
- [ ] Add audio notification
- [ ] Persist sessions in IndexedDB
- [ ] Sync sessions to backend
- [ ] Add timer session history view

---

## ⭐ MIT (Most Important Tasks)

- [ ] Create Top 3 MIT section
- [ ] Restrict to max 3 tasks
- [ ] Prevent accidental removal
- [ ] Add drag-and-drop promotion
- [ ] Sync MIT updates to backend
- [ ] Add optimistic updates

---

## 📋 Smart Task List

- [ ] Task CRUD (create/read/update/delete)
- [ ] Task categorization
- [ ] Filtering system
- [ ] Drag-and-drop reordering
- [ ] Brain dump section
- [ ] Offline persistence via Dexie
- [ ] Background sync logic
- [ ] Conflict resolution strategy

---

## 📱 Offline-First Architecture

- [ ] Setup Dexie schema
- [ ] Implement offline queue
- [ ] Add background sync via Workbox
- [ ] Implement retry logic
- [ ] Handle concurrent updates
- [ ] Test airplane mode scenarios

---

# 🔐 PHASE 3 — Authentication & Security

- [ ] Implement user registration
- [ ] Implement login endpoint
- [ ] JWT with HTTP-only cookies
- [ ] Password hashing (bcrypt)
- [ ] Implement logout
- [ ] Setup refresh tokens (optional)
- [ ] OAuth (Google)
- [ ] OAuth (GitHub)
- [ ] Add route protection middleware
- [ ] Rate limiting rules
- [ ] Input sanitization
- [ ] XSS & CSRF protection

---

# 🤖 PHASE 4 — AI Integration

## AI Infrastructure

- [ ] Create AI service abstraction layer
- [ ] Setup DeepSeek or Gemini API integration
- [ ] Secure API keys
- [ ] Add AI rate limiting
- [ ] Add logging for AI usage

## AI Features

- [ ] Productivity analytics endpoint
- [ ] Smart task prioritization suggestions
- [ ] Work pattern recognition
- [ ] Insight generation endpoint
- [ ] AI suggestions UI integration
- [ ] Add fallback logic if AI fails

## Documentation

- [ ] Define AI request/response schemas
- [ ] Implement OpenAPI spec for AI endpoints
- [ ] Setup Swagger UI

---

# 📊 PHASE 5 — Analytics & Monitoring

- [ ] Install Prometheus client
- [ ] Add system metrics (CPU, memory)
- [ ] Add custom metrics:
  - [ ] Timer sessions count
  - [ ] Task completion rate
  - [ ] Daily active users
- [ ] Setup Grafana dashboards
- [ ] Configure Grafana alerts
- [ ] Log rotation strategy
- [ ] Add error tracking

---

# 🎉 PHASE 6 — Motivational System

- [ ] Productivity streak tracking
- [ ] Achievement milestone logic
- [ ] Notification system
- [ ] Visual celebration animations
- [ ] Achievement history storage

---

# 🧪 PHASE 7 — Testing

## Frontend
- [ ] Unit tests (Vitest)
- [ ] Component testing
- [ ] E2E tests (Playwright / Cypress)
- [ ] Offline scenario testing

## Backend
- [ ] Unit tests
- [ ] Integration tests
- [ ] Auth tests
- [ ] AI endpoint tests
- [ ] Load testing (AI endpoints especially)

---

# 🚀 PHASE 8 — DevOps & Deployment

## Docker
- [ ] Create frontend Dockerfile
- [ ] Create backend Dockerfile
- [ ] Create docker-compose for local dev
- [ ] Setup environment configs

## CI/CD
- [ ] Setup GitHub Actions
- [ ] Add lint checks
- [ ] Add type checks
- [ ] Add test pipeline
- [ ] Add build pipeline
- [ ] Add Docker image build
- [ ] Setup staging deployment
- [ ] Setup production deployment

## Hosting
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render
- [ ] Configure environment variables
- [ ] Configure domain
- [ ] Setup HTTPS

---

# 💾 PHASE 9 — Production Hardening

- [ ] Enable production logging config
- [ ] Enable strict rate limiting
- [ ] Setup daily automated backups
- [ ] Verify restore procedure
- [ ] Setup disaster recovery runbook
- [ ] Load testing before launch
- [ ] Security audit
- [ ] Performance audit
- [ ] Lighthouse optimization
- [ ] Accessibility audit

---

# 🌍 PHASE 10 — Public Release

- [ ] Finalize README
- [ ] Finalize License
- [ ] Create demo video
- [ ] Prepare landing page
- [ ] Beta user onboarding flow
- [ ] Collect feedback
- [ ] Patch critical issues
- [ ] Announce release

---

# 🔮 FUTURE IMPROVEMENTS (Post v1.0)

- [ ] Mobile app version
- [ ] Desktop app (Electron)
- [ ] Team collaboration features
- [ ] Shared task boards
- [ ] AI habit coaching
- [ ] Advanced productivity reports
- [ ] Public API for integrations

---

# 🏁 Definition of Done (Production Ready)

- [ ] All core features stable
- [ ] No critical bugs
- [ ] AI endpoints documented
- [ ] Monitoring dashboards active
- [ ] Backups verified
- [ ] CI/CD fully automated
- [ ] Security best practices applied
- [ ] Performance optimized
- [ ] Beta-tested by real users

---

Built intentionally.  
Built sustainably.  
Built for focus. 🍓
