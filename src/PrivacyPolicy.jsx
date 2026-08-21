import './App.css'
import {
  CrayonDivider,
  CraftBadge,
  CraftCard,
  CraftList,
  CraftListItem,
  CraftSketchUnderline,
  RopeFrame,
  StickyNote,
  WashiStrip,
} from '@kuboxx/craft-ui'

const CONTACT_EMAIL = 'jhljheel@gmail.com'
const LAST_UPDATED = 'August 21, 2026'

function PrivacyPolicy() {
  return (
    <div className="site stack">
      <header>
        <WashiStrip pattern="stripes" tint="mint" className="hero-washi" />
        <p className="hero-badges">
          <CraftBadge>Omnia Inc.</CraftBadge>
          <span className="hero-tagline">Last updated {LAST_UPDATED}</span>
        </p>
        <h1 className="hero-title hero-center">
          <CraftSketchUnderline variant="accent">Privacy Policy</CraftSketchUnderline>
        </h1>
        <p className="hero-tagline hero-center">
          How Omnia Inc. handles your information
        </p>
      </header>

      <RopeFrame contentClassName="rope-inner">
        <main className="stack main-inner">
          <CraftCard tint="yellow" lift="paste" elevation="lg" deckled={1} className="craft-block">
            <h2 className="section-title">Who we are and what this covers</h2>
            <p className="section-copy">
              This Privacy Policy describes how <strong>Omnia Inc.</strong> (&ldquo;Omnia&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, shares, and
              protects information. It applies to this website and to the services and applications
              operated by Omnia Inc., including any of our applications that connect to Pinterest
              through the Pinterest API.
            </p>
            <p className="section-copy policy-para">
              If you have questions about anything in this policy, contact us at{' '}
              <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>

            <h3 className="policy-subtitle">The short version</h3>
            <CraftList marker="pushpin" className="policy-list">
              <CraftListItem>
                <span className="section-copy">
                  We collect as little as we can, and we do not sell your personal information.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  We access your Pinterest data only after you explicitly authorize it, and only to
                  provide the feature you asked for.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  <strong>We do not store data retrieved from the Pinterest API.</strong> We request
                  it from Pinterest each time it is needed and discard it once your request is served.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  We never share Pinterest data with advertising services, and never use it to target
                  you with advertising anywhere.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  You can disconnect us from your Pinterest account at any time, from inside Pinterest.
                </span>
              </CraftListItem>
            </CraftList>
          </CraftCard>

          <CrayonDivider crayon="pink" />

          <CraftCard
            tint="green"
            lift="paste-lg"
            elevation="sm"
            deckled={2}
            variant="parchment"
            className="craft-block"
          >
            <h2 className="section-title">Information we collect</h2>

            <h3 className="policy-subtitle">Information you give us</h3>
            <p className="section-copy">
              If you email us, we receive your email address and whatever you choose to put in your
              message. If a service of ours requires an account, we collect the details needed to
              create and operate it.
            </p>

            <h3 className="policy-subtitle">Information collected automatically</h3>
            <p className="section-copy">
              When you visit this site, our analytics and hosting providers may record standard
              technical information such as the pages you view, approximate region, referring page,
              browser type, and device type. We use this in aggregate to understand traffic. We do not
              use it to build advertising profiles.
            </p>

            <h3 className="policy-subtitle">Information from Pinterest</h3>
            <p className="section-copy">
              If you connect a Pinterest account, Pinterest sends us an authorization token and gives
              us permission to request the specific information covered by the permissions
              (&ldquo;scopes&rdquo;) shown to you on Pinterest&apos;s consent screen. This may include
              your Pinterest account details, boards, and Pins, depending on the feature you are using.
              You see exactly which permissions are requested before you approve them, and we request
              no more than the feature requires.
            </p>
          </CraftCard>

          <CrayonDivider crayon="orange" />

          <CraftCard tint="blue" lift="paste" elevation="lg" deckled={3} className="craft-block">
            <h2 className="section-title">Pinterest data: how we handle it</h2>
            <p className="section-copy">
              Our use of the Pinterest API is governed by the{' '}
              <a
                className="inline-link"
                href="https://policy.pinterest.com/en/developer-guidelines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest Developer Guidelines
              </a>{' '}
              and the Pinterest Developer and API Terms of Service. The commitments below apply
              specifically to information we obtain through the Pinterest API.
            </p>

            <h3 className="policy-subtitle">Access only with your authorization</h3>
            <p className="section-copy">
              We access your Pinterest information only after you complete Pinterest&apos;s own OAuth
              authorization flow and grant permission. We never ask for your Pinterest password and
              never have access to it. If you do not connect an account, we hold no Pinterest data
              about you at all.
            </p>

            <h3 className="policy-subtitle">We do not store Pinterest API data</h3>
            <p className="section-copy">
              In line with the Pinterest Developer Guidelines, we do not store information accessed
              through the Pinterest API. We call the Pinterest API each time the information is needed,
              use the response to complete the action you requested, and discard it. Pinterest content
              is held only transiently in memory for the duration of your request.
            </p>
            <p className="section-copy policy-para">
              The one exception is the authorization token itself, which we retain in encrypted form
              solely so that your connection keeps working between sessions. It is never used for any
              purpose other than making authorized requests on your behalf, and it is deleted when you
              disconnect.
            </p>

            <h3 className="policy-subtitle">Limited use</h3>
            <p className="section-copy">
              We use Pinterest data only to provide the specific service described to you at the point
              you connected your account. We do not repurpose it, analyze it for unrelated ends, or
              use it to train machine learning or artificial intelligence models.
            </p>

            <h3 className="policy-subtitle">No sharing, no selling, no advertising</h3>
            <CraftList marker="pushpin" className="policy-list">
              <CraftListItem>
                <span className="section-copy">
                  We do not sell Pinterest data, and we do not share it with any third party.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  <strong>
                    We do not share Pinterest data with any advertising service, ad network, data
                    broker, or analytics provider
                  </strong>
                  {' '}&mdash; including Google AdSense and the analytics providers described below,
                  which never receive it.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  We do not use Pinterest data to target you, or anyone else, with advertising outside
                  of Pinterest.
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  We do not combine Pinterest data with data from other sources to build advertising
                  or marketing profiles.
                </span>
              </CraftListItem>
            </CraftList>

            <h3 className="policy-subtitle">Respecting withdrawn consent</h3>
            <p className="section-copy">
              If you revoke our access, we stop making requests on your behalf and delete the
              associated authorization token. Because we do not retain Pinterest content in the first
              place, there is no cached copy of your Pins or boards left behind.
            </p>
          </CraftCard>

          <CrayonDivider crayon="ink" />

          <CraftCard tint="yellow" lift="paste" elevation="sm" deckled={2} className="craft-block">
            <h2 className="section-title">How to disconnect us from Pinterest</h2>
            <p className="section-copy">
              You can withdraw access at any time, directly in Pinterest and without asking us:
            </p>
            <CraftList marker="pushpin" className="policy-list">
              <CraftListItem>
                <span className="section-copy">Open your Pinterest account settings.</span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  Go to <strong>Security</strong> and find <strong>Apps with access</strong> (also
                  shown as <strong>Connected apps</strong>).
                </span>
              </CraftListItem>
              <CraftListItem>
                <span className="section-copy">
                  Find our application in the list and choose to revoke its access.
                </span>
              </CraftListItem>
            </CraftList>
            <p className="section-copy policy-para">
              You can also email us at{' '}
              <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>{' '}
              and we will disconnect the account and delete the stored token for you.
            </p>
          </CraftCard>

          <CrayonDivider crayon="pink" />

          <CraftCard
            tint="green"
            lift="paste-lg"
            elevation="sm"
            deckled={1}
            variant="parchment"
            className="craft-block"
          >
            <h2 className="section-title">Cookies, analytics, and advertising on this site</h2>
            <p className="section-copy">
              This website uses <strong>Vercel Web Analytics</strong> to measure traffic. It reports
              aggregate visit data and does not use cookies to track you across other websites.
            </p>
            <p className="section-copy policy-para">
              This website also displays advertising through <strong>Google AdSense</strong>. Google
              and its partners may use cookies and similar technologies to serve and measure ads,
              including ads based on your prior visits to this and other websites. You can review and
              control how Google personalizes ads at{' '}
              <a
                className="inline-link"
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              , opt out of personalized advertising from participating vendors at{' '}
              <a
                className="inline-link"
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutads.info/choices
              </a>
              , and see how Google uses data from sites that use its services in the{' '}
              <a
                className="inline-link"
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy &amp; Terms
              </a>
              . Most browsers also let you block or delete cookies.
            </p>
            <p className="section-copy policy-para">
              <strong>
                To be explicit: our advertising and analytics providers receive no Pinterest data.
              </strong>{' '}
              Advertising on this site is served on the basis of ordinary web browsing signals only,
              and is entirely separate from any Pinterest connection you may have authorized. Our
              privacy policy page itself does not serve advertising.
            </p>
          </CraftCard>

          <CrayonDivider crayon="orange" />

          <CraftCard tint="blue" lift="paste" elevation="sm" deckled={3} className="craft-block">
            <h2 className="section-title">How we use and share information</h2>
            <p className="section-copy">
              We use the information described above to operate and secure our services, to perform
              the actions you request, to respond to you when you contact us, to understand aggregate
              usage, and to meet legal obligations. Where the law requires a legal basis, we rely on
              your consent, on the performance of our agreement with you, or on our legitimate
              interest in running a secure and functioning service.
            </p>
            <p className="section-copy policy-para">
              We do not sell personal information, and we do not share it except in these limited
              cases: with service providers who host or operate our services on our behalf and are
              bound to use the information only for that purpose; where you have directed us to; and
              where we are legally required to. As stated above, Pinterest data is excluded from
              sharing entirely.
            </p>

            <h3 className="policy-subtitle">Retention and deletion</h3>
            <p className="section-copy">
              We keep information only as long as it is needed for the purpose it was collected.
              Pinterest content is not retained. Authorization tokens are kept until you disconnect or
              they expire. Email correspondence is kept while it remains relevant. You can ask us to
              delete information we hold about you at{' '}
              <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              , and we will do so unless we are required to keep it.
            </p>

            <h3 className="policy-subtitle">Security</h3>
            <p className="section-copy">
              We use reasonable technical and organizational measures to protect information,
              including encryption in transit, encryption of stored authorization tokens, and
              restricted access. No method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </CraftCard>

          <CrayonDivider crayon="ink" />

          <CraftCard tint="yellow" lift="paste" elevation="lg" deckled={2} className="craft-block">
            <h2 className="section-title">Your rights and choices</h2>
            <p className="section-copy">
              Depending on where you live, you may have the right to access the personal information
              we hold about you, to correct it, to delete it, to receive a portable copy, to object to
              or restrict certain processing, to withdraw consent at any time, and not to be
              discriminated against for exercising these rights.
            </p>
            <p className="section-copy policy-para">
              To exercise any of them, email{' '}
              <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              . We will respond within the period required by applicable law. For information Pinterest
              holds about you, use the privacy controls in your Pinterest account or see the{' '}
              <a
                className="inline-link"
                href="https://policy.pinterest.com/en/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest Privacy Policy
              </a>
              .
            </p>

            <h3 className="policy-subtitle">Children</h3>
            <p className="section-copy">
              Our services are not directed to children under 13, and we do not knowingly collect
              personal information from them. If you believe a child has provided us information,
              contact us and we will delete it.
            </p>

            <h3 className="policy-subtitle">International transfers</h3>
            <p className="section-copy">
              We and our service providers may process information in countries other than your own.
              Where required, we rely on appropriate safeguards for those transfers.
            </p>

            <h3 className="policy-subtitle">Changes to this policy</h3>
            <p className="section-copy">
              We may update this policy from time to time. When we do, we will revise the &ldquo;Last
              updated&rdquo; date at the top of this page. Material changes affecting how we handle
              your information will be communicated through our services.
            </p>
          </CraftCard>

          <CrayonDivider crayon="pink" />

          <div className="contact-wrap">
            <StickyNote color="pink" rotate={-2} className="contact-note">
              <h2 className="section-title">Contact us</h2>
              <p className="section-copy">
                Omnia Inc. is the controller of the information described in this policy. For any
                privacy question or request, write to{' '}
                <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </StickyNote>
          </div>
        </main>
      </RopeFrame>

      <footer className="site-footer">
        <p className="footer-copy">
          <a className="inline-link" href="/">
            Back to home
          </a>
        </p>
        <p className="footer-copy">&copy; 2026 Omnia Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
