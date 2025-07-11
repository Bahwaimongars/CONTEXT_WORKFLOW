# Product Requirements Document (PRD)

## Project Title

**Prompt2Video** – AI-Powered Video Generator from Prompt

## Objective

Develop a Minimum Viable Product (MVP) SaaS application that enables users to generate short videos (e.g. explainer, animation, avatar-based) from a simple text prompt using AI and video generation APIs.

## Problem Statement

Video creation is time-consuming, requires technical skills, and can be expensive. Users need a fast, simple, and affordable way to create engaging video content directly from an idea or text prompt.

## Target Audience

- Content creators
- Educators
- Marketers and small businesses
- Social media managers

## Core Features

### 1. Authentication (Supabase)

- Email-based sign-up/login with Magic Link
- JWT-secured authentication

### 2. Prompt Input Interface

- Text input field for prompt
- (Optional) Style selection dropdown _(MVP: one default style)_
- Generate button to trigger video creation

### 3. Video Generation Pipeline

- Convert prompt into script using GPT-4 API
- Generate assets (images, scenes, narration)
- Call external video generation API (e.g. RunwayML, Pika Labs)
- Assemble final video

### 4. Video Viewer & Download

- Embedded video player
- Download button for .mp4 file

### 5. User Dashboard

- List of generated videos
- Options to replay or re-prompt

## Tech Stack

| Layer       | Technology                                   |
| ----------- | -------------------------------------------- |
| Frontend    | Next.js, TailwindCSS, TypeScript             |
| Backend/API | Supabase (Auth, DB, storage), Edge Functions |
| Database    | PostgreSQL (via Supabase)                    |
| AI/Video    | OpenAI GPT-4, RunwayML API, Pika Labs        |
| Hosting     | Vercel, Supabase                             |

<!-- ## Security & Permissions

- Supabase auth enforces video access per user
- Middleware on API routes to protect private data

## AI Engineering (Next Steps)

- Prompt tuning for better video generation
- Context memory for improving results over time
- Feedback loop for iterative enhancement

## MVP Deliverables

- Working web app with deployed frontend/backend
- Integration with at least one AI video pipeline
- Clean and simple UI for testing
- Feedback system to collect user input for v2 -->
