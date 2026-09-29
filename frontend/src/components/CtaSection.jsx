import React, { useState } from 'react';

export default function CtaSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    website: '' // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          errorMsg = 'Full name is required';
        } else if (value.trim().length < 2) {
          errorMsg = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          errorMsg = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          errorMsg = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          errorMsg = 'Phone number is required';
        } else if (!/^[0-9+\s()-]{7,15}$/.test(value.trim())) {
          errorMsg = 'Please enter a valid phone number';
        }
        break;
      case 'date':
        if (!value) {
          errorMsg = 'Target date is required';
        }
        break;
      case 'service':
        if (!value) {
          errorMsg = 'Please select a service';
        }
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateAll = () => {
    const newErrors = {};
    const newTouched = {};
    ['fullName', 'email', 'phone', 'date', 'service'].forEach((key) => {
      newTouched[key] = true;
      const errorMsg = validateField(key, formData[key] || '');
      if (errorMsg) newErrors[key] = errorMsg;
    });
    setTouched(newTouched);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbz5OoWge31vWJSRsbxdTkLx2BCQl4lT_bVNuKtlHD5n3jqvu5-YHbUXe8MLVMs44G0Itg/exec',
        {
          method: 'POST',
          body: new URLSearchParams({
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone,
            services: formData.service,
            date: formData.date,
          }),
        }
      );

      setIsSubmitted(true);
    } catch (err) {
      console.error('[Inquiry Form Error]:', err);
      setSubmitError(
        'Unable to submit inquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleReset = () => {
    setFormData({ fullName: '', email: '', phone: '', date: '', service: '', website: '' });
    setErrors({});
    setTouched({});
    setSubmitError('');
    setIsSubmitted(false);
  };

  return (
    <section className="cta-banner-section light-concierge-theme" id="contact">
      <div className="cta-container">
        {/* Left Column: Strategy Session Info */}
        <div className="cta-banner-content">
          <span className="cta-subtitle">START YOUR ACCELERATION</span>
          <h2 className="cta-title">READY TO DOMINATE YOUR MARKET?</h2>
          <p className="cta-text">
            Book a private strategy session with our executive growth team. We craft tailored action plans for ambitious brands ready to scale.
          </p>

          <div className="cta-badges">
            <div className="cta-badge-item">
              <span className="badge-num">24h</span>
              <span className="badge-lbl">Response Time</span>
            </div>
            <div className="cta-badge-item">
              <span className="badge-num">100%</span>
              <span className="badge-lbl">Confidential</span>
            </div>
            <div className="cta-badge-item">
              <span className="badge-num">Bespoke</span>
              <span className="badge-lbl">Strategy Plan</span>
            </div>
          </div>

          {/* Register Now action button for quick form access */}
          <button
            type="button"
            className="cta-register-now-btn"
            onClick={() => {
              const formEl = document.getElementById('cta-quote-form');
              if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                  const inputEl = document.getElementById('fullName');
                  if (inputEl) inputEl.focus();
                }, 400);
              }
            }}
          >
            <span>REGISTER NOW</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>

        {/* Right Column: Exact Reference Concierge Quote Form */}
        <div className="cta-form-wrapper exact-reference-style" id="cta-quote-form">
          <div className="cta-form-header">
            <span className="cta-form-script">Say hello</span>
            <h3 className="cta-form-heading">GET A QUOTE FROM OUR CONCIERGE TEAM</h3>
          </div>

          {isSubmitted ? (
            <div className="cta-success-card luxury-inquiry-success">
              <div className="success-header-wrap">
                <div className="success-icon-badge">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#76e3d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="success-script-tag">Confirmation</span>
              </div>

              <h4 className="success-heading">INQUIRY RECEIVED</h4>
              <p className="success-subtext">
                Thank you, <span className="highlight-text">{formData.fullName}</span>. Your private strategy request has been prioritized in our executive concierge queue.
              </p>

              <div className="success-summary-box">
                <div className="summary-row">
                  <span className="summary-label">CONTACT EMAIL</span>
                  <span className="summary-val">{formData.email}</span>
                </div>
                {formData.phone && (
                  <div className="summary-row">
                    <span className="summary-label">PHONE NUMBER</span>
                    <span className="summary-val">{formData.phone}</span>
                  </div>
                )}
                {formData.date && (
                  <div className="summary-row">
                    <span className="summary-label">TARGET START</span>
                    <span className="summary-val">{formData.date}</span>
                  </div>
                )}
                {formData.service && (
                  <div className="summary-row">
                    <span className="summary-label">SERVICE REQUESTED</span>
                    <span className="summary-val">{formData.service}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span className="summary-label">CONCIERGE STATUS</span>
                  <span className="summary-status-badge">
                    <span className="status-dot"></span> PRIORITY ASSIGNED
                  </span>
                </div>
              </div>

              <p className="success-footer-note">
                Our leadership team will contact you shortly within 24 hours.
              </p>

              <button onClick={handleReset} className="reference-submit-btn success-reset-btn">
                <span>SUBMIT ANOTHER INQUIRY</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 4v6h6M23 20v-6h-6"></path>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
              </button>
            </div>
          ) : (
            <form className="concierge-form exact-line-form" onSubmit={handleSubmit} noValidate>
              <div className={`form-group ${touched.fullName && errors.fullName ? 'has-error' : ''} ${touched.fullName && !errors.fullName ? 'is-valid' : ''}`}>
                <label htmlFor="fullName" className="form-label">TELL US YOUR NAME</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input line-input"
                  placeholder="Full name..."
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.fullName && errors.fullName && (
                  <span className="field-error-msg">{errors.fullName}</span>
                )}
              </div>

              <div className={`form-group ${touched.email && errors.email ? 'has-error' : ''} ${touched.email && !errors.email ? 'is-valid' : ''}`}>
                <label htmlFor="email" className="form-label">WHAT'S YOUR EMAIL ADDRESS?</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input line-input"
                  placeholder="Email address..."
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.email && errors.email && (
                  <span className="field-error-msg">{errors.email}</span>
                )}
              </div>

              <div className={`form-group ${touched.phone && errors.phone ? 'has-error' : ''} ${touched.phone && !errors.phone ? 'is-valid' : ''}`}>
                <label htmlFor="phone" className="form-label">WHAT'S YOUR PHONE NUMBER?</label>
                <div className="phone-input-wrapper line-phone-wrapper">
                  <span className="country-flag-select">
                    <span className="flag-icon">🇮🇳</span>
                    <span className="flag-arrow">▾</span>
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input line-input phone-line-input"
                    placeholder="Phone number..."
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                {touched.phone && errors.phone && (
                  <span className="field-error-msg">{errors.phone}</span>
                )}
              </div>

              <div className={`form-group ${touched.service && errors.service ? 'has-error' : ''} ${touched.service && !errors.service ? 'is-valid' : ''}`}>
                <label htmlFor="service" className="form-label">WHICH SERVICE ARE YOU INTERESTED IN?</label>
                <div className="service-input-wrapper line-service-wrapper">
                  <select
                    id="service"
                    name="service"
                    className="form-input line-input service-line-select"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value="" disabled hidden>Select your service...</option>
                    <option value="Advertising & Lead Generation">Advertising & Lead Generation</option>
                    <option value="Website & Digital Services">Website & Digital Services</option>
                    <option value="Creative & Design">Creative & Design</option>
                    <option value="Business Growth & Strategy">Business Growth & Strategy</option>
                    <option value="Marketing Automation / WhatsApp">Marketing Automation / WhatsApp</option>
                    <option value="Custom Brand Strategy">Custom Brand Strategy / Other</option>
                  </select>
                  <span className="reference-select-arrow">▾</span>
                </div>
                {touched.service && errors.service && (
                  <span className="field-error-msg">{errors.service}</span>
                )}
              </div>

              <div className={`form-group ${touched.date && errors.date ? 'has-error' : ''} ${touched.date && !errors.date ? 'is-valid' : ''}`}>
                <label htmlFor="date" className="form-label">WHICH DATE ARE YOU LOOKING TO START?</label>
                <div className="date-input-wrapper line-date-wrapper">
                  <input
                    type="text"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = 'text';
                      handleBlur(e);
                    }}
                    id="date"
                    name="date"
                    className="form-input line-input date-line-input"
                    placeholder="Select date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <svg className="reference-calendar-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D454D" strokeWidth="1.5">
                    <rect x="3" y="6" width="18" height="15" rx="3" ry="3"></rect>
                    <path d="M3 10h18"></path>
                    <path d="M8 3v3M16 3v3"></path>
                  </svg>
                </div>
                {touched.date && errors.date && (
                  <span className="field-error-msg">{errors.date}</span>
                )}
              </div>

              {/* Invisible Honeypot Field for Spam Prevention */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website || ''}
                  onChange={handleChange}
                />
              </div>

              {submitError && (
                <span className="field-error-msg" style={{ marginBottom: '0.8rem', display: 'block' }}>
                  {submitError}
                </span>
              )}

              <button type="submit" className="form-submit-btn reference-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="submit-loading-state">
                    <svg className="spinner-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"></path>
                    </svg>
                    PROCESSING...
                  </span>
                ) : (
                  'SUBMIT INQUIRY'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}



