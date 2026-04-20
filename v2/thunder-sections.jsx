// Thunder — Install section, Features, Agent spotlight, SDKs, CTA, Footer

const InstallSection = () => {
  const [tab, setTab] = React.useState('docker');
  const [copied, setCopied] = React.useState(false);

  const snippets = {
    docker: [
      { t: 'cmt', v: '# 1. Download the compose file' },
      { t: 'line', v: [{t:'cmd',v:'curl'}, {t:'arg',v:'-o'}, {t:'pth',v:'docker-compose.yml'}, {t:'t',v:'\\'}] },
      { t: 'plain', v: '     https://raw.githubusercontent.com/asgardeo/thunder/v0.30.0/install/quick-start/docker-compose.yml' },
      { t: 'gap' },
      { t: 'cmt', v: '# 2. Boot the stack — Postgres + Thunder server' },
      { t: 'line', v: [{t:'cmd',v:'docker'}, {t:'arg',v:'compose up -d'}] },
      { t: 'gap' },
      { t: 'cmt', v: '# 3. Sign in to the console' },
      { t: 'line', v: [{t:'cmd',v:'open'}, {t:'str',v:'https://localhost:8090/console'}] },
      { t: 'plain', v: '   # admin / admin' }
    ],
    brew: [
      { t: 'cmt', v: '# Homebrew — fastest on Mac' },
      { t: 'line', v: [{t:'cmd',v:'brew'}, {t:'arg',v:'tap'}, {t:'pth',v:'asgardeo/thunder'}] },
      { t: 'line', v: [{t:'cmd',v:'brew'}, {t:'arg',v:'install'}, {t:'pth',v:'thunder'}] },
      { t: 'gap' },
      { t: 'line', v: [{t:'cmd',v:'thunder'}, {t:'arg',v:'start'}] },
      { t: 'plain', v: '   ⚡ Listening on https://localhost:8090' }
    ],
    binary: [
      { t: 'cmt', v: '# Single binary — no runtime required' },
      { t: 'line', v: [{t:'cmd',v:'curl'}, {t:'arg',v:'-fsSL'}, {t:'pth',v:'https://get.thunder.wso2.com'}, {t:'t',v:'|'}, {t:'cmd',v:'sh'}] },
      { t: 'gap' },
      { t: 'line', v: [{t:'cmd',v:'./thunder'}, {t:'arg',v:'init'}, {t:'arg',v:'--data ./data'}] },
      { t: 'line', v: [{t:'cmd',v:'./thunder'}, {t:'arg',v:'start'}] },
      { t: 'plain', v: '   Thunder v0.30.0 — pid 28471 — tls on :8090' }
    ]
  };

  const copy = () => { setCopied(true); setTimeout(()=>setCopied(false), 1800); };

  return (
    <section id="install">
      <div className="container">
        <div className="section-label">Install</div>
        <h2 className="section-title">Up and running in under 30 seconds.</h2>
        <p className="section-sub">
          Thunder is a single Go binary. Grab the desktop build for your OS, or boot
          the full stack with Docker Compose. No cloud account. No credit card.
        </p>

        <div className="install-wrap">
          <div className="install-cards">
            <div className="install-card">
              <div className="os-ico"><TIcon name="apple" size={22} fill="currentColor" stroke={0}/></div>
              <div style={{flex:1}}>
                <div className="os-main">Thunder for macOS</div>
                <div className="os-meta">thunder-0.30.0-darwin.pkg · 42 MB</div>
              </div>
              <TIcon name="download" size={16} style={{color:'var(--t-text-muted)'}} />
            </div>
            <div className="install-card">
              <div className="os-ico"><TIcon name="windows" size={20} fill="currentColor" stroke={0}/></div>
              <div style={{flex:1}}>
                <div className="os-main">Thunder for Windows</div>
                <div className="os-meta">thunder-0.30.0-win-x64.msi · 44 MB</div>
              </div>
              <TIcon name="download" size={16} style={{color:'var(--t-text-muted)'}} />
            </div>
            <div className="install-card">
              <div className="os-ico"><TIcon name="linux" size={22} fill="currentColor" stroke={1.5}/></div>
              <div style={{flex:1}}>
                <div className="os-main">Thunder for Linux</div>
                <div className="os-meta">.deb · .rpm · .tar.gz — amd64 / arm64</div>
              </div>
              <TIcon name="download" size={16} style={{color:'var(--t-text-muted)'}} />
            </div>
            <div style={{padding:'14px 4px 0', fontSize:12.5, color:'var(--t-text-muted)', display:'flex', alignItems:'center', gap:8}}>
              <TIcon name="feather2" size={13}/>
              All builds are signed · SHA-256 checksums on GitHub
            </div>
          </div>

          <div className="install-code">
            <div className="install-code-head">
              <span className="title">terminal</span>
              <div className="install-code-tabs">
                {['docker','brew','binary'].map(t => (
                  <div key={t} className={`install-code-tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</div>
                ))}
              </div>
            </div>
            <div className="install-code-body">
              <button className="copy-btn" onClick={copy}>
                <TIcon name={copied?'check':'copy2'} size={12} />
                {copied ? 'Copied' : 'Copy'}
              </button>
              {snippets[tab].map((ln, i) => {
                if (ln.t === 'gap') return <div key={i} style={{height:8}}/>;
                if (ln.t === 'cmt') return <div key={i} className="cmt">{ln.v}</div>;
                if (ln.t === 'plain') return <div key={i} className="dim">{ln.v}</div>;
                return (
                  <div key={i}>
                    <span style={{color:'var(--thunder-accent)', userSelect:'none'}}>$ </span>
                    {ln.v.map((p, j) => <span key={j} className={p.t==='cmd'?'cmd':p.t==='arg'?'arg':p.t==='str'?'str':p.t==='pth'?'pth':''}> {p.v}</span>)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FEATURES = [
  { ico:'feather2', t:'Lightweight by design', d:'A single Go binary with negligible memory footprint. No JVM, no container orchestra — ships, boots, serves.' },
  { ico:'code',     t:'Developer-first APIs', d:'A clean Native Flow API alongside standard OAuth 2.0 and OIDC. Curl it, script it, embed it — no console detour.' },
  { ico:'bot',      t:'Agent identity, native', d:'Agents are first-class entities in Thunder — user, application, and resource in one. Built for the MCP era.' },
  { ico:'server',   t:'Self-hostable, everywhere', d:'Run on your laptop, a Raspberry Pi, or a fleet of pods. Config-first. Postgres-backed. Zero managed-service lock-in.' },
  { ico:'shield',   t:'Standards-compliant', d:'OAuth 2.0, OIDC, PKCE, JWT, SAML-ready. Interoperates with the ecosystem you already trust.' },
  { ico:'book',     t:'Apache 2.0, in the open', d:'Every decision, every design doc, every issue — on GitHub. Fork it, ship it, contribute back.' }
];

const FeaturesSection = () => (
  <section id="features">
    <div className="container">
      <div className="section-label">Why Thunder</div>
      <h2 className="section-title">Built for the teams actually writing the auth code.</h2>
      <p className="section-sub">
        Thunder strips IAM back to what engineers need: clean APIs, predictable behavior, and
        zero surprise dependencies. Everything else is opt-in.
      </p>
      <div className="features">
        {FEATURES.map(f => (
          <div key={f.t} className="feature">
            <div className="f-ico"><TIcon name={f.ico} size={20} /></div>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AgentSpotlight = () => (
  <section id="agents">
    <div className="container">
      <div className="section-label">Spotlight</div>
      <div className="spotlight">
        <div>
          <div style={{display:'inline-flex', alignItems:'center', gap:8, padding:'5px 12px', borderRadius:999, background:'rgba(122,240,184,0.08)', border:'1px solid rgba(122,240,184,0.2)', fontSize:12, color:'var(--thunder-accent)', fontFamily:'var(--font-mono)'}}>
            <TIcon name="bot" size={12} />
            AGENT IDENTITY · v0.30+
          </div>
          <h2>Treat AI agents like the citizens they are.</h2>
          <p>
            Thunder models agents as a dedicated entity type — not a user hack,
            not an application hack. An agent can act as a user (egress), as an
            application (egress), or as a resource (ingress), each with its own
            credentials, scopes, and delegation semantics.
          </p>
          <ul style={{margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10, fontSize:14, color:'var(--t-text-dim)'}}>
            {[
              'First-class AGENT entity with RBAC + custom attributes',
              'On-behalf-of flows via `act` claims for user → agent delegation',
              'Native MCP-client registration; one agent, many OAuth clients'
            ].map(it => (
              <li key={it} style={{display:'flex', gap:10, alignItems:'flex-start'}}>
                <TIcon name="check" size={16} style={{color:'var(--thunder-accent)', marginTop:2}}/>
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <a href="https://github.com/asgardeo/thunder/discussions/948" className="btn btn-ghost" style={{fontSize:13}}>
            Read the design discussion
            <TIcon name="arrowRight" size={14}/>
          </a>
        </div>

        <div className="spotlight-entity-diagram">
          <div className="entity">
            <div className="label">Entity</div>
            <div className="name">User</div>
            <div>human · password, mfa</div>
          </div>
          <div className="entity">
            <div className="label">Entity</div>
            <div className="name">Application</div>
            <div>oauth client · secret</div>
          </div>
          <div className="entity agent" style={{gridColumn:'span 2'}}>
            <div className="label" style={{color:'var(--thunder-accent)'}}>Entity · New</div>
            <div className="name" style={{display:'flex', alignItems:'center', gap:8}}>
              <TIcon name="bolt" size={14} fill="currentColor" stroke={0}/> Agent
            </div>
            <div>acts as: user | app | resource · credentials + scopes + delegation</div>
            <div style={{marginTop:10, display:'flex', gap:6, flexWrap:'wrap'}}>
              {['openid','mcp:tools','read:calendar','act:as=u_482'].map(s => (
                <span key={s} style={{padding:'2px 8px', borderRadius:4, background:'rgba(7,16,12,0.6)', fontSize:11, color:'var(--thunder-accent)', border:'1px solid rgba(122,240,184,0.2)'}}>{s}</span>
              ))}
            </div>
          </div>
          <div className="entity">
            <div className="label">Entity</div>
            <div className="name">Resource</div>
            <div>api · scopes</div>
          </div>
          <div className="entity">
            <div className="label">Entity</div>
            <div className="name">Service Account</div>
            <div>workload · key</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SDK_CARDS = [
  { name:'React Vanilla', desc:'Direct API integration. Native Flow or OAuth/OIDC — your call.', link:'samples/react-vanilla', logo:'R' },
  { name:'React SDK', desc:'Drop-in @asgardeo/react provider. Sign-in, tokens, refresh wired.', link:'samples/react-sdk', logo:'⚛' },
  { name:'Next.js', desc:'Middleware + server actions. SSR-safe session handling.', link:'samples/nextjs', logo:'N' },
  { name:'Go client', desc:'Idiomatic Go SDK for service-to-service token flows.', link:'samples/go', logo:'GO' }
];

const SDKsSection = () => (
  <section id="sdks">
    <div className="container">
      <div className="section-label">SDKs &amp; samples</div>
      <h2 className="section-title">Paste-and-run samples for every stack.</h2>
      <p className="section-sub">
        Every sample is a real, working repo — clone it, run it, diff it against your
        app. No marketing rewrites.
      </p>
      <div className="sdk-grid">
        {SDK_CARDS.map(s => (
          <div key={s.name} className="sdk-card">
            <div className="sdk-head">
              <div className="logo" style={{fontFamily:'var(--font-mono)', fontSize:14, fontWeight:600, color:'var(--thunder-accent)'}}>{s.logo}</div>
              <TIcon name="arrowRight" size={14} style={{color:'var(--t-text-muted)'}}/>
            </div>
            <div>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </div>
            <div className="sdk-link">{s.link} →</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTABand = () => (
  <section style={{paddingTop:32, paddingBottom:48}}>
    <div className="cta-band">
      <BoltsBg />
      <div style={{position:'relative', zIndex:1}}>
        <BoltMark size={52} />
        <h2 style={{marginTop:18}}>Ship auth you can read top to bottom.</h2>
        <p>
          Start with the binary. Keep going with the source. Thunder is yours — to run, to
          fork, to harden, to extend.
        </p>
        <div className="ctas">
          <button className="btn btn-primary">
            <TIcon name="download" size={15} stroke={2.2}/>
            Download Thunder
          </button>
          <a href="https://github.com/asgardeo/thunder" className="btn btn-ghost">
            <TIcon name="github" size={15}/>
            Star on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo size={22}/>
          <p>Thunder is an open-source Identity and Access Management product by WSO2. Apache 2.0 licensed.</p>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <a>Features</a><a>Install</a><a>Agent identity</a><a>Roadmap</a><a>Changelog</a>
        </div>
        <div className="footer-col">
          <h5>Developers</h5>
          <a>Documentation</a><a>API reference</a><a>Native Flow API</a><a>SDKs</a><a>Samples</a>
        </div>
        <div className="footer-col">
          <h5>Community</h5>
          <a>GitHub</a><a>Discussions</a><a>Discord</a><a>Contributing</a><a>Security</a>
        </div>
      </div>
      <div className="footer-bot">
        <div>© 2026 WSO2 LLC · Apache 2.0</div>
        <div>thunder v0.30.0</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { InstallSection, FeaturesSection, AgentSpotlight, SDKsSection, CTABand, Footer });
