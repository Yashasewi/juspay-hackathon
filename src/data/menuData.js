import {
  Home,
  Package,
  Building2,
  Users,
  BookOpen,
  HelpCircle,
  Beaker,
  Leaf,
  TrendingUp,
  Mail,
  ArrowLeft,
  Code,
  Cloud,
  UserCheck,
  MapPin,
  Shield,
  Database,
  Settings,
  Wrench,
  Monitor,
  Smartphone,
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
  MessageSquare,
  Phone,
  MapPin as Location,
} from "lucide-react";

export const menuData = [
  {
    icon: Home,
    title: "Home",
    subtitle: "Welcome to our comprehensive platform",
  },
  {
    icon: Package,
    title: "Products & Services",
    subtitle: "Explore our comprehensive offerings",
    children: [
      {
        icon: Code,
        title: "Software Solutions",
        subtitle: "Custom software development and deployment",
        children: [
          {
            icon: Monitor,
            title: "Web Development",
            subtitle: "Modern web applications and websites",
            children: [
              {
                icon: Globe,
                title: "Frontend Technologies",
                subtitle: "Modern frontend frameworks and tools",
                children: [
                  {
                    icon: Code,
                    title: "React Ecosystem",
                    subtitle: "React, Next.js, and related tools",
                    children: [
                      {
                        icon: Monitor,
                        title: "React.js",
                        subtitle: "Core React development",
                      },
                      {
                        icon: Globe,
                        title: "Next.js",
                        subtitle: "Full-stack React framework",
                      },
                      {
                        icon: Code,
                        title: "React Native",
                        subtitle: "Mobile apps with React",
                      },
                    ],
                  },
                  {
                    icon: Code,
                    title: "Vue.js",
                    subtitle: "Progressive JavaScript framework",
                  },
                  {
                    icon: Code,
                    title: "Angular",
                    subtitle: "TypeScript-based web framework",
                  },
                ],
              },
              {
                icon: Database,
                title: "Backend Technologies",
                subtitle: "Server-side development solutions",
                children: [
                  {
                    icon: Code,
                    title: "Node.js",
                    subtitle: "JavaScript runtime environment",
                  },
                  {
                    icon: Code,
                    title: "Python",
                    subtitle: "Django, FastAPI, Flask",
                  },
                  {
                    icon: Code,
                    title: "Java",
                    subtitle: "Spring Boot, Microservices",
                  },
                ],
              },
              {
                icon: Database,
                title: "Databases",
                subtitle: "Data storage and management",
                children: [
                  {
                    icon: Database,
                    title: "SQL Databases",
                    subtitle: "PostgreSQL, MySQL, SQL Server",
                  },
                  {
                    icon: Database,
                    title: "NoSQL Databases",
                    subtitle: "MongoDB, Redis, DynamoDB",
                  },
                ],
              },
            ],
          },
          {
            icon: Smartphone,
            title: "Mobile Apps",
            subtitle: "iOS and Android applications",
            children: [
              {
                icon: Smartphone,
                title: "Native Development",
                subtitle: "Platform-specific mobile apps",
                children: [
                  {
                    icon: Smartphone,
                    title: "iOS Development",
                    subtitle: "Swift and SwiftUI apps",
                  },
                  {
                    icon: Smartphone,
                    title: "Android Development",
                    subtitle: "Kotlin and Java apps",
                  },
                ],
              },
              {
                icon: Code,
                title: "Cross-Platform",
                subtitle: "Write once, run everywhere",
                children: [
                  {
                    icon: Code,
                    title: "React Native",
                    subtitle: "Facebook's mobile framework",
                  },
                  {
                    icon: Code,
                    title: "Flutter",
                    subtitle: "Google's UI toolkit",
                  },
                ],
              },
            ],
          },
          {
            icon: Database,
            title: "Database Solutions",
            subtitle: "Data management and analytics",
          },
        ],
      },
      {
        icon: Cloud,
        title: "Cloud & Infrastructure",
        subtitle: "Scalable cloud solutions and infrastructure",
        children: [
          {
            icon: Globe,
            title: "Cloud Migration",
            subtitle: "Move your infrastructure to the cloud",
          },
          {
            icon: Shield,
            title: "Security Services",
            subtitle: "Comprehensive security solutions",
          },
          {
            icon: Settings,
            title: "DevOps Services",
            subtitle: "Automation and deployment pipelines",
          },
        ],
      },
      {
        icon: UserCheck,
        title: "Consulting Services",
        subtitle: "Expert guidance and strategic support",
      },
    ],
  },
  {
    icon: Building2,
    title: "Industry Solutions",
    subtitle: "Specialized solutions for different industries",
    children: [
      {
        icon: MapPin,
        title: "Digital Transformation",
        subtitle: "Comprehensive digital transformation strategies",
      },
      {
        icon: Shield,
        title: "Cybersecurity Consulting",
        subtitle: "Comprehensive cybersecurity services and solutions",
      },
      {
        icon: Database,
        title: "Data & Analytics Consulting",
        subtitle: "Data strategy, analytics, and business intelligence",
      },
      {
        icon: Settings,
        title: "DevOps & Platform Engineering",
        subtitle: "DevOps transformation and platform engineering",
      },
      {
        icon: Wrench,
        title: "Support & Maintenance",
        subtitle: "Ongoing maintenance and support services",
      },
    ],
  },
  {
    icon: Users,
    title: "Company",
    subtitle: "Learn about our organization and culture",
    children: [
      {
        icon: Briefcase,
        title: "About Us",
        subtitle: "Our story, mission, and values",
      },
      {
        icon: Users,
        title: "Our Team",
        subtitle: "Meet the people behind our success",
      },
      {
        icon: GraduationCap,
        title: "Careers",
        subtitle: "Join our growing team",
      },
    ],
  },
  {
    icon: BookOpen,
    title: "Resources",
    subtitle: "Knowledge base, tools, and learning materials",
    children: [
      {
        icon: FileText,
        title: "Documentation",
        subtitle: "Technical guides and documentation",
      },
      {
        icon: BookOpen,
        title: "Blog",
        subtitle: "Latest insights and industry trends",
      },
      {
        icon: GraduationCap,
        title: "Tutorials",
        subtitle: "Step-by-step learning resources",
      },
    ],
  },
  {
    icon: HelpCircle,
    title: "Support",
    subtitle: "Get help and support when you need it",
    children: [
      {
        icon: MessageSquare,
        title: "Help Center",
        subtitle: "Find answers to common questions",
      },
      {
        icon: Phone,
        title: "Contact Support",
        subtitle: "Get in touch with our support team",
      },
    ],
  },
  {
    icon: Beaker,
    title: "Research & Innovation",
    subtitle: "Cutting-edge research and innovation initiatives",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    subtitle: "Environmental responsibility and sustainable technology",
  },
  {
    icon: TrendingUp,
    title: "Investor Relations",
    subtitle: "Financial information and investor resources",
  },
  {
    icon: Mail,
    title: "Contact",
    subtitle: "Get in touch with our team",
    children: [
      {
        icon: Location,
        title: "Office Locations",
        subtitle: "Find our offices worldwide",
      },
      {
        icon: Phone,
        title: "Phone & Email",
        subtitle: "Direct contact information",
      },
      {
        icon: MessageSquare,
        title: "Live Chat",
        subtitle: "Chat with our team in real-time",
      },
    ],
  },
];