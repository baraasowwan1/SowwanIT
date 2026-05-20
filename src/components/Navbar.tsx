'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="url(#g1)" />
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>
            <span className="gradient-text">Sowwan</span>
            <span className={styles.logoSub}>IT</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.links}>
          <a href="#features" className={styles.link}>Features</a>
          <a href="#pricing" className={styles.link}>Pricing</a>
          <a href="#how-it-works" className={styles.link}>How It Works</a>
          {session?.user && (
            <Link href="/dashboard" className={styles.link}>Dashboard</Link>
          )}
          {(session?.user as any)?.role === 'admin' && (
            <Link href="/admin" className={styles.link + ' ' + styles.adminLink}>Admin</Link>
          )}
        </div>

        {/* Auth Buttons */}
        <div className={styles.actions}>
          {session?.user ? (
            <>
              <span className={styles.userEmail}>{session.user.email}</span>
              <button className="btn btn-outline btn-sm" onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-sm">Sign In</Link>
              <Link href="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#pricing" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#how-it-works" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>How It Works</a>
            {session?.user ? (
              <>
                <Link href="/dashboard" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <button className="btn btn-outline btn-sm" onClick={() => { signOut({ callbackUrl: '/' }); setMenuOpen(false); }}>Sign Out</button>
              </>
            ) : (
              <>
                <Link href="/login" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Sign In</Link>
                <Link href="/register" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
