const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Privacy Policy</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8">
          Last Updated: November 2025 | Effective Date: Immediately
        </p>

        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how AgriFlock 360 collects, uses, stores, and protects your data across the website, mobile app, IoT devices, and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Data We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">A. Personal Information</h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Location (for device activation)</li>
                  <li>Identification details (if required for financing)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">B. IoT Device Data</h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
                  <li>Temperature readings</li>
                  <li>Humidity readings</li>
                  <li>Device status (heater/fan activity)</li>
                  <li>Sensor health</li>
                  <li>Firmware version</li>
                  <li>Power/battery levels</li>
                  <li>GPS position (if enabled)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">C. Farm Operational Data</h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
                  <li>Flock numbers</li>
                  <li>Feed usage</li>
                  <li>Vaccination logs</li>
                  <li>Production performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">D. Payment Information</h3>
                <p className="text-muted-foreground mb-2">Used only for:</p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
                  <li>PAYG repayments</li>
                  <li>Lease-to-own installments</li>
                </ul>
                <p className="text-muted-foreground mt-2">We do not store full mobile-money payment credentials.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">E. App & Website Usage Data</h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
                  <li>IP address</li>
                  <li>Browser/device type</li>
                  <li>Login timestamps</li>
                  <li>Crash logs</li>
                  <li>In-app behavior analytics</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-3">We use collected data to:</p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Power the AgriFlock360 platform features</li>
              <li>Display brooder performance in real-time</li>
              <li>Provide alerts & notifications</li>
              <li>Improve system performance</li>
              <li>Deliver customer support</li>
              <li>Facilitate PAYG/Lease-to-Own financing</li>
              <li>Detect fraud or device tampering</li>
              <li>Conduct anonymized analytics & reporting</li>
            </ol>
            <p className="text-muted-foreground mt-3 font-semibold">We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Sharing of Data</h2>
            <p className="text-muted-foreground mb-3">We may share data only with:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground mb-3">
              <li>Payment processors (e.g., Daraja API)</li>
              <li>Cloud hosting providers (AWS, EMQX, Firebase)</li>
              <li>Customer-support partners</li>
            </ul>
            <p className="text-muted-foreground mb-3">All partners must comply with strict data protection agreements.</p>
            <p className="text-muted-foreground">
              <strong>We will never share personal data with:</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Marketers</li>
              <li>Advertisers</li>
              <li>Unverified third parties</li>
            </ul>
            <p className="text-muted-foreground mt-2">unless required by law.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-2">Data is stored as long as:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Your account is active</li>
              <li>Your PAYG contract remains valid</li>
              <li>Your IoT devices remain registered</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Upon account deletion, personally identifiable data is deleted within 30 days, except where legal retention applies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Security Measures</h2>
            <p className="text-muted-foreground mb-3">We deploy industry-standard security measures:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>TLS encryption</li>
              <li>Encrypted device credentials</li>
              <li>Signed OTA firmware</li>
              <li>JWT authentication</li>
              <li>Limited access control</li>
              <li>Encrypted cloud storage</li>
              <li>Regular security audits</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Despite best efforts, no system is completely immune to vulnerabilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">7. Your Rights as a User</h2>
            <p className="text-muted-foreground mb-2">You may:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Request a copy of your data</li>
              <li>Request data deletion</li>
              <li>Opt out of marketing communications</li>
              <li>Update personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground">
              AgriFlock360 does not knowingly collect data from minors under 18.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">9. Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-2">We use cookies for:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Authentication</li>
              <li>Session tracking</li>
              <li>Improved performance</li>
              <li>Analytics</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              You may disable cookies, but some features may not function fully.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground mb-2">Data may be stored in:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Kenya</li>
              <li>Europe</li>
              <li>United States</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              All transfers align with GDPR-equivalent protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">11. Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy occasionally. Continued use of the platform constitutes acceptance of the updated version.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground">For questions or concerns:</p>
            <p className="text-muted-foreground mt-2">
              <strong>AgriFlock 360</strong><br />
              Email: <a href="mailto:agriflock360@gmail.com" className="text-primary hover:text-primary/80 transition-colors">agriflock360@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
