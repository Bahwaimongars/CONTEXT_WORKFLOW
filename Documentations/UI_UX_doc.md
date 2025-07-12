# UI/UX Design Documentation

This document provides comprehensive guidelines, examples, and best practices for creating modern, accessible, and user-friendly interfaces.
You can add your OWN colors, design, variables... ALL !

## Design System Foundation

### Color Palette

```css
/* Primary Colors */
:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-900: #1e3a8a;

  /* Semantic Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #06b6d4;

  /* Neutral Colors */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-500: #6b7280;
  --gray-900: #111827;

  /* Dark Mode */
  --dark-bg: #0f172a;
  --dark-surface: #1e293b;
  --dark-text: #f1f5f9;
}
```

### Typography Scale

```css
/* Font Families */
--font-sans: ui-sans-serif, system-ui, sans-serif;
--font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", monospace;

/* Font Sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Spacing System

```css
/* Spacing Scale (rem) */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
```

## Component Design Patterns

### 1. Button Components

#### Primary Button

```tsx
// Primary Button Example
<button
  className="
  px-4 py-2 
  bg-blue-600 hover:bg-blue-700 
  text-white font-medium 
  rounded-lg 
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
"
>
  Create Task
</button>
```

#### Button Variants

```tsx
// Button Sizes
<button className="px-2 py-1 text-sm">Small</button>
<button className="px-4 py-2 text-base">Medium</button>
<button className="px-6 py-3 text-lg">Large</button>

// Button States
<button className="bg-blue-600 text-white">Default</button>
<button className="bg-blue-700 text-white">Hover</button>
<button className="bg-blue-800 text-white">Active</button>
<button className="bg-gray-300 text-gray-500 cursor-not-allowed">Disabled</button>

// Button Types
<button className="bg-blue-600 text-white">Primary</button>
<button className="border border-blue-600 text-blue-600 bg-transparent">Secondary</button>
<button className="text-blue-600 underline bg-transparent">Link</button>
<button className="bg-red-600 text-white">Destructive</button>
```

### 2. Form Components

#### Input Field

```tsx
// Input with Label and Error State
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Email Address
  </label>
  <input
    type="email"
    className="
      w-full px-3 py-2 
      border border-gray-300 rounded-md 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
      placeholder-gray-400
    "
    placeholder="Enter your email"
  />
  <p className="text-sm text-red-600">Please enter a valid email address</p>
</div>
```

#### Form Layout Example

```tsx
// Registration Form
<form className="space-y-6 max-w-md mx-auto">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Full Name
    </label>
    <input
      type="text"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="John Doe"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Email
    </label>
    <input
      type="email"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Password
    </label>
    <input
      type="password"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="••••••••"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
  >
    Create Account
  </button>
</form>
```

### 3. Card Components

#### Basic Card

```tsx
// Product Card Example
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img
    src="/product-image.jpg"
    alt="Product"
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Title</h3>
    <p className="text-gray-600 text-sm mb-4">
      Product description goes here with key features and benefits.
    </p>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-blue-600">$99.99</span>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  </div>
</div>
```

#### Task Card Example

```tsx
// Task Management Card
<div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
  <div className="flex items-start justify-between mb-3">
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
      />
      <h3 className="text-lg font-medium text-gray-900">
        Complete project documentation
      </h3>
    </div>
    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
      High Priority
    </span>
  </div>

  <p className="text-gray-600 text-sm mb-3">
    Finish writing the technical documentation for the new feature release.
  </p>

  <div className="flex items-center justify-between text-sm text-gray-500">
    <span>Due: March 15, 2024</span>
    <div className="flex items-center space-x-2">
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
        Development
      </span>
      <span>2 days left</span>
    </div>
  </div>
</div>
```

### 4. Navigation Components

#### Header Navigation

```tsx
// Main Navigation Header
<header className="bg-white shadow-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center">
        <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
        <span className="ml-2 text-xl font-bold text-gray-900">TaskApp</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <a
          href="/dashboard"
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Dashboard
        </a>
        <a
          href="/tasks"
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Tasks
        </a>
        <a
          href="/projects"
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </a>
      </nav>

      {/* User Menu */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <BellIcon className="h-6 w-6" />
        </button>
        <img className="h-8 w-8 rounded-full" src="/avatar.jpg" alt="User" />
      </div>
    </div>
  </div>
</header>
```

#### Sidebar Navigation

```tsx
// Sidebar Navigation
<aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen">
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu</h2>
    <nav className="space-y-2">
      <a
        href="/dashboard"
        className="flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
      >
        <HomeIcon className="h-5 w-5 mr-3" />
        Dashboard
      </a>
      <a
        href="/tasks"
        className="flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
      >
        <TaskIcon className="h-5 w-5 mr-3" />
        Tasks
      </a>
      <a
        href="/calendar"
        className="flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
      >
        <CalendarIcon className="h-5 w-5 mr-3" />
        Calendar
      </a>
      <a
        href="/settings"
        className="flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
      >
        <SettingsIcon className="h-5 w-5 mr-3" />
        Settings
      </a>
    </nav>
  </div>
</aside>
```

### 5. Modal Components

#### Modal Dialog

```tsx
// Modal Component Example
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
    {/* Modal Header */}
    <div className="flex items-center justify-between p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">Delete Task</h2>
      <button className="text-gray-400 hover:text-gray-600">
        <XIcon className="h-6 w-6" />
      </button>
    </div>

    {/* Modal Body */}
    <div className="p-6">
      <p className="text-gray-600 mb-4">
        Are you sure you want to delete this task? This action cannot be undone.
      </p>
    </div>

    {/* Modal Footer */}
    <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
      <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        Cancel
      </button>
      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Delete
      </button>
    </div>
  </div>
</div>
```

## Layout Patterns

### 1. Dashboard Layout

```tsx
// Dashboard Layout Structure
<div className="min-h-screen bg-gray-50">
  {/* Header */}
  <header className="bg-white shadow-sm">{/* Header content */}</header>

  <div className="flex">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-sm">{/* Sidebar content */}</aside>

    {/* Main Content */}
    <main className="flex-1 p-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat cards */}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Charts, tables, etc. */}
      </div>
    </main>
  </div>
</div>
```

### 2. Landing Page Layout

```tsx
// Landing Page Structure
<div className="min-h-screen">
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Manage Your Tasks Like a Pro
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Streamline your workflow with our intuitive task management platform.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started Free
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature cards */}
      </div>
    </div>
  </section>
</div>
```

## Responsive Design Guidelines

### Breakpoints

```css
/* Mobile First Approach */
/* xs: 0px */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

### Responsive Examples

```tsx
// Responsive Grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Items */}
</div>

// Responsive Typography
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

// Responsive Spacing
<div className="p-4 sm:p-6 lg:p-8">
  {/* Content */}
</div>

// Responsive Visibility
<div className="hidden sm:block">Desktop Only</div>
<div className="block sm:hidden">Mobile Only</div>
```

## Accessibility Guidelines

### 1. Keyboard Navigation

```tsx
// Focus Management
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Accessible Button
</button>

// Skip Links
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
  Skip to main content
</a>
```

### 2. ARIA Labels

```tsx
// Form Labels
<label htmlFor="email" className="block text-sm font-medium">
  Email Address
</label>
<input
  id="email"
  type="email"
  aria-describedby="email-error"
  className="w-full px-3 py-2 border rounded-md"
/>
<p id="email-error" className="text-red-600 text-sm">
  Please enter a valid email
</p>

// Button with Icon
<button aria-label="Close modal" className="p-2">
  <XIcon className="h-6 w-6" />
</button>
```

### 3. Color Contrast

```css
/* Ensure sufficient contrast ratios */
.text-high-contrast {
  color: #111827; /* Dark text on light background */
}

.bg-high-contrast {
  background-color: #f9fafb; /* Light background for dark text */
}

/* Error states with sufficient contrast */
.error-text {
  color: #dc2626; /* Red with good contrast */
}
```

## Animation Guidelines

### 1. Micro-interactions

```css
/* Smooth transitions */
.transition-smooth {
  transition: all 0.2s ease-in-out;
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Loading states */
.loading-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

### 2. Page Transitions

```tsx
// Fade in animation
<div className="animate-fade-in">
  {/* Content */}
</div>

// Slide in animation
<div className="animate-slide-in-from-bottom">
  {/* Content */}
</div>
```

## Dark Mode Implementation

### CSS Variables Approach

```css
/* Light theme (default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
}

/* Dark theme */
[data-theme="dark"] {
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --border-color: #374151;
}

/* Usage */
.card {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

### Tailwind Dark Mode

```tsx
// Dark mode classes
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 className="text-2xl font-bold">
    Content that adapts to theme
  </h1>
</div>

// Dark mode toggle
<button
  onClick={toggleDarkMode}
  className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
>
  {isDark ? <SunIcon /> : <MoonIcon />}
</button>
```

## Performance Optimization

### 1. Image Optimization

```tsx
// Next.js Image component
<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority
  className="rounded-lg"
/>

// Responsive images
<Image
  src="/product.jpg"
  alt="Product"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### 2. Loading States

```tsx
// Skeleton loading
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>

// Spinner loading
<div className="flex items-center justify-center">
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
</div>
```

## Testing Guidelines

### 1. Visual Testing

- Test across different screen sizes
- Verify color contrast ratios
- Check focus states and keyboard navigation
- Validate responsive behavior

### 2. Accessibility Testing

- Use screen readers
- Test keyboard-only navigation
- Verify ARIA labels and roles
- Check color contrast compliance

### 3. Performance Testing

- Measure Core Web Vitals
- Test loading performance
- Verify image optimization
- Check bundle sizes

## Common UI Patterns

### 1. Empty States

```tsx
// Empty state with action
<div className="text-center py-12">
  <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
    <EmptyIcon />
  </div>
  <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
  <p className="text-gray-600 mb-6">
    Create your first task to get started with organizing your work.
  </p>
  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
    Create Task
  </button>
</div>
```

### 2. Error States

```tsx
// Error message with retry
<div className="bg-red-50 border border-red-200 rounded-md p-4">
  <div className="flex items-center">
    <ExclamationIcon className="h-5 w-5 text-red-400 mr-2" />
    <h3 className="text-sm font-medium text-red-800">Something went wrong</h3>
  </div>
  <p className="text-sm text-red-700 mt-1">
    We couldn't load your tasks. Please try again.
  </p>
  <button className="mt-2 text-sm text-red-800 underline hover:text-red-900">
    Try again
  </button>
</div>
```

### 3. Success States

```tsx
// Success notification
<div className="bg-green-50 border border-green-200 rounded-md p-4">
  <div className="flex items-center">
    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
    <p className="text-sm font-medium text-green-800">
      Task created successfully!
    </p>
  </div>
</div>
```

This comprehensive UI/UX documentation provides practical examples and guidelines for creating modern, accessible, and user-friendly interfaces. Use these patterns as a foundation and adapt them to your specific project needs.
