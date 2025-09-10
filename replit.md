# Nousu SaaS Landing Page

## Overview

This is a modern SaaS landing page for Nousu, an outbound sales solutions company. The application is built as a full-stack TypeScript project with a React frontend and Express backend, featuring a professional landing page design inspired by modern SaaS platforms like TryChirp. The site showcases Nousu's services including lead generation, appointment setting, sales development, and campaign management with sections for hero content, services, features, pricing, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, professional design
- **UI Components**: Comprehensive component system using Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth scroll-triggered animations and micro-interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Database Driver**: Neon Database serverless driver for cloud-native database connections
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Session Storage**: PostgreSQL-backed session store for user state persistence
- **Development Storage**: In-memory storage interface for local development and testing

### Authentication and Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL storage backend
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Security**: Password hashing and secure session configuration

### External Dependencies
- **Email Service**: EmailJS integration for contact form submissions and client communication
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Animation Library**: Framer Motion for professional page transitions and scroll animations
- **Form Validation**: Zod schema validation integrated with React Hook Form
- **Date Handling**: date-fns for reliable date manipulation and formatting
- **Development Tools**: ESBuild for production bundling and TypeScript compilation