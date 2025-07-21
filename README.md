# Supabase Auth Layer for Nuxt

This is a plug-and-play Nuxt layer that adds **Supabase authentication** (sign up / sign in / sign out) to any Nuxt 3 or Nuxt 4 project.

It uses **Supabase’s server-side auth** via cookies for secure SSR session handling, and exposes a composable `useAuth()` with all basic auth methods.

---

## ✅ Features

- 🔐 Sign in, sign up, and sign out with Supabase
- 🍪 Server-side cookie-based session management
- ♻️ Reactive `user` state via `useAuth()`
- 🔁 Auto-refreshes user state on SSR navigation
- 🔌 Minimal: no layout or UI opinion

---

## 🧩 Usage in a Nuxt Project

1. **Add this layer to your Nuxt project**:

// nuxt.config.ts
export default defineNuxtConfig({
  extends: ['./layers/supabase-auth-layer'], // or path to wherever you put it
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-07-20'
})


2. **Add the correct packages**:
pnpm add @supabase/ssr cookie


3. **Add a .env file in the root**:
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key

3. **Using the Supabase composable**:
const { user, signIn, signUp, signOut } = useAuth()

await signIn('test@email.com', 'password123')
console.log(user.value?.email)


---

## 📦 What this layer provides

Composables
useAuth()

user: The current Supabase user (reactive)

signIn(email, password)

signUp(email, password)

signOut()

refreshUser()

Middleware
auth.global.ts – Automatically refreshes the user state on navigation or SSR render.

Plugins
supabase.client.ts – Sets up Supabase on the browser using @supabase/ssr

supabase.server.ts – Sets up Supabase on the server using secure cookies

---

## ✅ You're All Set
```
