export type ProjectCategory = 'mobile' | 'fullstack'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  image: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'stress-monitor',
    title: 'StressMonitor',
    description: 'Health monitoring app with stress tracking and biometric data visualization',
    category: 'mobile',
    image: '/assets/projects/stress-monitor.jpg',
    tech: ['SwiftUI', 'HealthKit', 'CloudKit', 'CoreML'],
  },
  {
    id: 'trending-movies',
    title: 'Trending Movies',
    description: 'Movie discovery app with trending lists and detailed movie information',
    category: 'mobile',
    image: '/assets/projects/trending-movies.jpg',
    tech: ['SwiftUI', 'MVVM', 'TMDB API', 'Combine'],
  },
  {
    id: 'livescore-app',
    title: 'LiveScore App',
    description: 'Real-time sports scores and statistics with push notifications',
    category: 'mobile',
    image: '/assets/projects/livescore.jpg',
    tech: ['React Native', 'Expo', 'Firebase', 'Push Notifications'],
  },
  {
    id: 'sports-app',
    title: 'Sports App',
    description: 'Comprehensive sports tracking with live updates and social features',
    category: 'mobile',
    image: '/assets/projects/sports-app.jpg',
    tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
  },
  {
    id: 'faxer-ios',
    title: 'Faxer iOS',
    description: 'Document scanning and faxing app with OCR capabilities',
    category: 'mobile',
    image: '/assets/projects/faxer.jpg',
    tech: ['SwiftUI', 'VisionKit', 'PDFKit', 'CloudKit'],
  },
  {
    id: 'sports-backend',
    title: 'Sports Backend',
    description: 'Scalable backend API for sports data management and real-time updates',
    category: 'fullstack',
    image: '/assets/projects/sports-backend.jpg',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'WebSocket'],
  },
]
