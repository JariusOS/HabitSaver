import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Landing: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const [currentSentence, setCurrentSentence] = useState(0);
  const sentences = ['Build Habits.', 'Stay Accountable.', 'Never Break Your Streak.'];

  useEffect(() => {
    const typeWriter = (text: string, i: number) => {
      if (i < text.length) {
        setHeaderText(text.substring(0, i + 1));
        setTimeout(() => typeWriter(text, i + 1), 100);
      } else {
        setTimeout(() => {
          setHeaderText('');
          setCurrentSentence((prev) => (prev + 1) % sentences.length);
        }, 1500);
      }
    };

    typeWriter(sentences[currentSentence], 0);
  }, [currentSentence]);

  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="logo">
          <img src="/habit-saver-logo.svg" alt="HabitSaver" />
          <span>HabitSaver</span>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/app/dashboard" className="nav-cta">Get Started</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1>{headerText}</h1>
          <p className="hero-subtitle">
            Your habits shape your future. HabitSaver keeps you on track with a simple, social-powered system designed to help you stay consistent and motivated every day.
          </p>
          <div className="hero-cta">
            <Link to="/app/dashboard" className="btn-primary animate-bounce">Start Your Streak Today</Link>
            <a href="#how-it-works" className="btn-secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat-card animate-slide-up">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="stat-number">50K+</span>
              <span className="stat-label">Habits Tracked</span>
            </div>
            <div className="stat-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <span className="stat-number">1M+</span>
              <span className="stat-label">Streaks Saved</span>
            </div>
          </div>
        </div>
      </section>

      <section className="why-habits-fail">
        <h2 className="section-title">Why Habits Fail</h2>
        <div className="reasons-grid">
          <div className="reason-card animate-slide-up">
            <p>You start with excitement, but distractions take over.</p>
          </div>
          <div className="reason-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p>You miss a day, then another, and soon give up.</p>
          </div>
          <div className="reason-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p>No one holds you accountable, so quitting feels easy.</p>
          </div>
          <div className="reason-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p>You lack motivation, making it hard to stick to your goals.</p>
          </div>
        </div>
        <div className="section-transition">
          <h3 className="transition-text animate-fade-in">HabitSaver is Here to Change That</h3>
          <p className="transition-description animate-fade-in">A minimalist yet powerful tool that helps you build habits and stay committed with the power of streaks, accountability, and community.</p>
        </div>
      </section>

      <section id="how-it-works" className="features">
        <h2 className="section-title">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card animate-slide-up">
            <div className="feature-icon">🎯</div>
            <h3>Pick Your Habit</h3>
            <p>Choose one daily habit to focus on.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon">👥</div>
            <h3>Join a Streak Pool</h3>
            <p>See others striving for the same goal.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="feature-icon">🎯</div>
            <h3>Earn Points</h3>
            <p>Log your habit daily to maintain your streak.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="feature-icon">🤝</div>
            <h3>Get Saved by Friends</h3>
            <p>Miss a day? A friend can vouch for you once a month.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="feature-icon">🏆</div>
            <h3>Compete & Cooperate</h3>
            <p>Climb leaderboards and help others stay on track.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="feature-icon">🎉</div>
            <h3>Celebrate Milestones</h3>
            <p>Share your streak wins and shout out friends who saved you.</p>
          </div>
        </div>
      </section>

      <section className="features-highlight">
        <h2 className="section-title">What Makes HabitSaver Work?</h2>
        <div className="highlights-grid">
          <div className="highlight-card animate-slide-up">
            <h3>💡 Loss Aversion</h3>
            <p>Fear of breaking a streak keeps you accountable.</p>
          </div>
          <div className="highlight-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3>👥 Social Support</h3>
            <p>Friends can help you stay on track when life gets in the way.</p>
          </div>
          <div className="highlight-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3>💪 Built-in Motivation</h3>
            <p>Leaderboards, rewards, and progress tracking drive consistency.</p>
          </div>
        </div>
      </section>

      <section className="more-than-tracker">
        <h2 className="section-title">More Than Just a Habit Tracker</h2>
        <div className="more-grid">
          <div className="more-card animate-fade-in">
            <h3>🎯 A Community-Powered System</h3>
            <p>Support and be supported.</p>
          </div>
          <div className="more-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3>🔥 Competitive Edge</h3>
            <p>Push yourself to reach new heights.</p>
          </div>
          <div className="more-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3>🚀 Share Your Success</h3>
            <p>Brag about your longest streaks and recognize those who help you.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2 className="section-title">Plans & Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card animate-slide-up">
            <div className="pricing-header">
              <h3>Free Plan</h3>
              <p className="price">$0</p>
            </div>
            <div className="pricing-features">
              <p>Track one habit</p>
              <p>Join streak pools</p>
              <p>Access leaderboards</p>
            </div>
            <Link to="/app/dashboard" className="btn-secondary">Get Started</Link>
          </div>
          <div className="pricing-card featured animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="pricing-header">
              <h3>Pro Plan</h3>
              <p className="price">$7.99<span>/month</span></p>
            </div>
            <div className="pricing-features">
              <p>Unlock advanced insights</p>
              <p>Extra saves</p>
              <p>Multiple habit tracking</p>
            </div>
            <Link to="/app/dashboard" className="btn-primary">Get Started</Link>
          </div>
          <div className="pricing-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="pricing-header">
              <h3>Elite Plan</h3>
              <p className="price">$14.99<span>/month</span></p>
            </div>
            <div className="pricing-features">
              <p>Everything in Pro</p>
              <p>Exclusive challenges</p>
              <p>Premium analytics</p>
            </div>
            <Link to="/app/dashboard" className="btn-secondary">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content animate-fade-in">
          <h2>Start Your Streak Today!</h2>
          <p>Every big change starts with a single habit. Stay accountable, stay consistent, and build the future you want.</p>
          <Link to="/app/dashboard" className="btn-primary animate-bounce">Get Started Now</Link>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/habit-saver-logo.svg" alt="HabitSaver" className="footer-logo" />
            <p>Building better habits, together.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#support">Support</a>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HabitSaver. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
