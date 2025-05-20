# 🚀 MVP Feature Tracker – Ideal Enigma

This document tracks the core MVP features for the contractor job management app.

---

## ✅ GLOBAL FEATURES
- [ ] Tailwind + NativeWind styling
- [ ] Light/Dark theme support
- [ ] Firebase env-config + init
- [ ] Global error handler
- [ ] Network disconnection overlay
- [ ] Zustand global state (user, jobs)
- [ ] Folder structure + base services/hooks

---

## 👤 AUTH FLOW
### /login (Email/Password)
- [ ] Login form (with validation)
- [ ] Error display (invalid login)
- [ ] "Forgot password?" flow (Firebase)
- [ ] Redirect to dashboard on success

### /register
- [ ] Create account form
- [ ] Show errors (duplicate email)
- [ ] Auto-login after signup
- [ ] Redirect to dashboard

---

## 🏠 DASHBOARD
### / (Home)
- [ ] Welcome message
- [ ] Summary of upcoming jobs (limit 5)
- [ ] “+ Add Job” CTA

---

## 📆 JOBS
### /jobs
- [ ] Job list (title, date, status)
- [ ] Filter by status (upcoming, complete)
- [ ] Search by title

### /jobs/new
- [ ] Add job form (title, date, address, notes)
- [ ] Zod validation
- [ ] Save to Firestore
- [ ] Show success + return to list

### /jobs/[id]
- [ ] Job detail view
- [ ] Edit mode
- [ ] Delete job

---

## 🧑‍💼 CLIENTS
### /clients
- [ ] List of clients (name, phone, total jobs)
- [ ] Add new client
- [ ] View client details

---

## ⚙️ SETTINGS
### /profile
- [ ] View user profile
- [ ] Change password
- [ ] Logout

---

## 📦 Future Enhancements
- [ ] Push notifications
- [ ] Offline mode
- [ ] Image upload (job photos)
- [ ] Google Calendar sync
- [ ] Invoicing module
- [ ] Crew assignments

---
