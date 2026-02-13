export interface Service {
  id: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'mobile',
    icon: 'smartphone',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
  },
  {
    id: 'fullstack',
    icon: 'code',
    features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Cloud Deployment'],
  },
  {
    id: 'e2e',
    icon: 'layers',
    features: ['Product Strategy', 'UX/UI Design', 'Development', 'Maintenance & Support'],
  },
  {
    id: 'consulting',
    icon: 'lightbulb',
    features: ['Architecture Review', 'Code Audit', 'Team Training', 'Technology Strategy'],
  },
]
