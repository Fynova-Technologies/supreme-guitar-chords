import path from "path";

export interface Artist {
  name: string;
  songs: Song[];
}

export interface Song {
  title: string;
  chords: string;
  key: string;
  type: 'chords' | 'tabs';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  favorite?: boolean;
}

export const routes = [
  {
    path: '/privacy-policy',
    component: 'PrivacyPolicy',
    title: 'Privacy Policy',
    description: 'Learn about how we handle your data and privacy.',
  },
  {
    path: '/terms-of-service',
    component: 'TermsOfService',
    title: 'Terms of Service',
    description: 'Understand the terms and conditions of using our service.',
  },
  {
    path: '/about-us',
    component: 'AboutUs',
    title: 'About Us',
    description: 'Get to know the team behind Supreme Guitar Chords.',
  },
  {
    path: '/contact-us',
    component: 'ContactUs',
    title: 'Contact Us',
    description: 'Have questions or feedback? Reach out to us!',
  }
]
