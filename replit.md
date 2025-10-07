# Grupo Empresarial INTEGRAR S.A.S. - Corporate Website

## Overview

This is a corporate website for Grupo Empresarial INTEGRAR S.A.S., a Colombian consulting company specializing in business process automation, public bidding advisory services, institutional consulting, and AI integration. The website is built as a modern single-page application showcasing the company's services, team, portfolio, and capabilities through an interactive interface.

The application serves as a digital presence for the company, providing information about their modular solutions approach and featuring their AI chatbot INTEGRABOT. It includes comprehensive sections for services, team profiles, case studies, blog content, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with structured error handling and request validation
- **Development**: Hot module replacement and development middleware integration

### Design System
- **Component Library**: shadcn/ui with Radix UI primitives for accessible components
- **Typography**: Montserrat font family for brand consistency
- **Color Scheme**: CSS custom properties with dark/light theme support
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Icons**: Lucide React icons with FontAwesome for social media

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Cloud Provider**: Neon Database for serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection Pooling**: Built-in connection management through @neondatabase/serverless

### Form Handling and Validation
- **Form Management**: React Hook Form for efficient form state management
- **Validation**: Zod schema validation for both client and server-side validation
- **Input Sanitization**: Basic XSS protection through input sanitization
- **User Feedback**: Toast notifications for form submission feedback

### Development Workflow
- **Package Management**: npm with lockfile for dependency management
- **Code Quality**: TypeScript strict mode for type safety
- **Development Server**: Integrated Vite development server with Express backend
- **Build Process**: Separate frontend and backend build processes with esbuild for server bundling

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives for React
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **class-variance-authority**: Utility for creating variant-based component APIs
- **Lucide React**: Icon library with consistent design system

### Development Tools
- **Vite**: Next-generation frontend build tool with HMR support
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tool integration for Replit

### Form and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **Zod**: TypeScript-first schema validation library

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for conditionally joining classNames
- **nanoid**: URL-friendly unique string ID generator

### Communication Features
- **WhatsApp Integration**: Direct messaging through WhatsApp Business API
- **Contact Form**: Server-side form processing with email notifications
- **Newsletter**: Email subscription functionality for blog updates

### Content Management
- **Static Assets**: Image hosting through Unsplash and Pixabay for demo content
- **Blog System**: Static blog implementation with category filtering
- **Portfolio Showcase**: Project gallery with filtering and modal views