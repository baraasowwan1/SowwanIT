import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
});

export const PLANS = {
  monthly: {
    name: 'Monthly',
    price: 29,
    priceId: process.env.STRIPE_MONTHLY_PRICE_ID!,
    features: [
      '1 Professional Website',
      'Free Sowwan Subdomain',
      'Custom Domain Support',
      'SSL Certificate',
      'Email Support',
      '10 GB Storage',
    ],
  },
  annual: {
    name: 'Annual',
    price: 249,
    priceId: process.env.STRIPE_ANNUAL_PRICE_ID!,
    features: [
      '1 Professional Website',
      'Free Sowwan Subdomain',
      'Custom Domain Support',
      'SSL Certificate',
      'Priority Support',
      '50 GB Storage',
      'Advanced Analytics',
      '2 Months Free',
    ],
  },
};
