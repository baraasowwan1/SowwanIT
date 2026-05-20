'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

const features = [
  { icon: '🌐', title: 'Instant Website Builder', desc: 'Form-based site customizer. Choose a template, fill in your content, and go live in minutes.' },
  { icon: '🔗', title: 'Free Subdomain', desc: 'Every site gets a free yourname.sowwan-it.com subdomain from day one.' },
  { icon: '🌍', title: 'Custom Domain', desc: 'Connect your own domain name. Full DNS guide included for a seamless transition.' },
  { icon: '💳', title: 'Stripe Payments', desc: 'Secure subscription billing. Pay with any card or PayPal — cancel anytime.' },
  { icon: '🔒', title: 'SSL & Security', desc: 'Every site is secured with HTTPS automatically. No technical knowledge required.' },
  { icon: '📊', title: 'Client Dashboard', desc: 'Manage your site, track your subscription, and update content from one place.' },
];

const steps = [
  { num: '01', title: 'Create Account', desc: 'Register with your email and set up your business profile in 60 seconds.' },
  { num: '02', title: 'Choose a Plan', desc: 'Pick monthly or annual. Pay securely with your card or PayPal via Stripe.' },
  { num: '03', title: 'Build Your Site', desc: 'Select a template and customize it — logo, colors, content, contact info.' },
  { num: '04', title: 'Go Live', desc: 'Publish on your free subdomain instantly. Add your custom domain anytime.' },
];

const plans = [
  {
    name: 'Monthly',
    price: '$29',
    period: '/month',
    description: 'Perfect for getting started',
    features: ['1 Professional Website', 'Free Sowwan Subdomain', 'Custom Domain Support', 'SSL Certificate', 'Email Support', '10 GB Storage'],
    cta: 'Start Monthly',
    highlight: false,
  },
  {
    name: 'Annual',
    price: '$249',
    period: '/year',
    description: 'Best value — 2 months free',
    features: ['1 Professional Website', 'Free Sowwan Subdomain', 'Custom Domain Support', 'SSL Certificate', 'Priority Support', '50 GB Storage', 'Advanced Analytics', '2 Months Free 🎉'],
    cta: 'Start Annual',
    highlight: true,
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroCanvas}>
          <HeroScene />
        </div>
        <div className={styles.heroOverlay} />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className={styles.heroBadge}>
              <span className="badge badge-primary">🚀 Professional Website Builder</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Build Your Online Presence{' '}
              <span className="gradient-text">in Minutes</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Sowwan for Information Technology gives you a complete website, custom domain, and subscription management — all in one powerful platform.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroCta}>
              <Link href="/register" className="btn btn-primary btn-lg">
                Start Building Free →
              </Link>
              <a href="#how-it-works" className="btn btn-outline btn-lg">
                See How It Works
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className={styles.heroStats}>
              <div className={styles.stat}><strong>500+</strong><span>Active Sites</span></div>
              <div className={styles.statDivider} />
              <div className={styles.stat}><strong>99.9%</strong><span>Uptime</span></div>
              <div className={styles.statDivider} />
              <div className={styles.stat}><strong>24/7</strong><span>Support</span></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className={`${styles.section} section`}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="badge badge-primary">Features</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Everything You Need to <span className="gradient-text">Succeed Online</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              From website creation to custom domains and secure payments — Sowwan IT handles it all.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.featuresGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className={`glass-card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.gridBg} />
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="badge badge-info">Process</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Live in <span className="gradient-text">4 Simple Steps</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.stepsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {steps.map((s, i) => (
              <motion.div key={s.num} variants={fadeUp} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepArrow}>→</div>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className={`${styles.section} section`}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="badge badge-success">Pricing</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              Pay with credit card, debit card, or PayPal — all processed securely through Stripe.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.pricingGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`${styles.pricingCard} ${plan.highlight ? styles.pricingHighlight : ''}`}
              >
                {plan.highlight && (
                  <div className={styles.popularBadge}>⭐ Most Popular</div>
                )}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.planPrice}>
                  <span className={styles.planAmount}>{plan.price}</span>
                  <span className={styles.planPeriod}>{plan.period}</span>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.planFeature}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`btn btn-lg w-full ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
                  style={{ justifyContent: 'center' }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className={styles.pricingNote}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            🔒 Payments secured by <strong>Stripe</strong>. Accept cards & PayPal. Cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>
              Ready to Launch Your <span className="gradient-text">Professional Website?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Join hundreds of businesses already growing with Sowwan IT.
            </p>
            <Link href="/register" className="btn btn-primary btn-lg">
              Get Started Today — It's Fast & Easy
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
