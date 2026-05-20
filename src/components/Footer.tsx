import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="url(#fg1)" />
                <defs>
                  <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoName}><span className="gradient-text">Sowwan</span> IT</span>
            </div>
            <p className={styles.tagline}>
              Build, launch, and grow your professional website with Sowwan for Information Technology.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>𝕏</a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>in</a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>📸</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Platform</h4>
            <a href="#features" className={styles.footLink}>Features</a>
            <a href="#pricing" className={styles.footLink}>Pricing</a>
            <a href="#how-it-works" className={styles.footLink}>How It Works</a>
            <Link href="/register" className={styles.footLink}>Get Started</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Account</h4>
            <Link href="/login" className={styles.footLink}>Sign In</Link>
            <Link href="/register" className={styles.footLink}>Register</Link>
            <Link href="/dashboard" className={styles.footLink}>Dashboard</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <a href="#" className={styles.footLink}>Privacy Policy</a>
            <a href="#" className={styles.footLink}>Terms of Service</a>
            <a href="#" className={styles.footLink}>Cookie Policy</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Sowwan for Information Technology. All rights reserved.</p>
          <div className={styles.badges}>
            <span className="badge badge-info">Powered by Stripe</span>
            <span className="badge badge-primary">Next.js 14</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
