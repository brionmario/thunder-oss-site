// Thunder — Hero + Nav
// Depends on: TIcon, BoltMark, Logo

const Nav = ({ onTweaksClick }) => (
  <nav className="nav">
    <div className="container nav-inner">
      <Logo size={22} />
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#install">Install</a>
        <a href="#agents">Agents</a>
        <a href="#sdks">SDKs</a>
        <a href="https://github.com/asgardeo/thunder">Docs</a>
      </div>
      <div className="nav-right">
        <a className="stars-pill" href="https://github.com/asgardeo/thunder">
          <TIcon name="github" size={14} />
          <span>asgardeo/thunder</span>
          <span style={{ color: 'var(--t-text-muted)' }}>·</span>
          <span className="count">★ 156</span>
        </a>
        <button className="btn btn-primary" style={{ padding: '8px 14px', fontSize: 13 }}>
          <TIcon name="download" size={14} stroke={2.2} />
          Get Thunder
        </button>
      </div>
    </div>
  </nav>
);

// Typewriter terminal demo for hero
const HeroTerminal = () => {
  const [tab, setTab] = React.useState('quickstart');

  const content = {
    quickstart: (
      <>
        <div><span className="prompt">$</span> curl -o docker-compose.yml \</div>
        <div style={{ paddingLeft: 16 }} className="dim">  https://thunder.wso2.com/install/v0.30.0/compose.yml</div>
        <div><span className="prompt">$</span> docker compose up -d</div>
        <div className="dim" style={{ marginTop: 6 }}>[<span className="ok">+</span>] Creating thunder-postgres  <span className="ok">done</span></div>
        <div className="dim">[<span className="ok">+</span>] Creating thunder-server    <span className="ok">done</span></div>
        <div className="dim">[<span className="ok">+</span>] Starting identity service <span className="ok">done</span></div>
        <div style={{ marginTop: 10 }}>
          <span className="flash">⚡ Thunder</span> <span className="dim">v0.30.0 ready on </span>
          <span className="str">https://localhost:8090</span>
        </div>
        <div className="cmt" style={{ marginTop: 4 }}>   ↳ console: https://localhost:8090/console</div>
        <div className="cmt">   ↳ admin/admin to sign in</div>
        <div style={{ marginTop: 12 }}>
          <span className="prompt">$</span> <span className="cursor" />
        </div>
      </>
    ),
    curl: (
      <>
        <div className="cmt"># Start an authentication flow</div>
        <div><span className="prompt">$</span> curl -X POST localhost:8090/flow/execute \</div>
        <div style={{ paddingLeft: 16 }}>  -d <span className="str">'{`{`}"applicationId":"sample-app",</span></div>
        <div style={{ paddingLeft: 16 }}>  <span className="str">"flowType":"AUTHENTICATION"{`}`}'</span></div>
        <div className="dim" style={{ marginTop: 8 }}>{`{`}</div>
        <div style={{ paddingLeft: 12 }}><span className="key">"flowId"</span>: <span className="str">"f8e7-..."</span>,</div>
        <div style={{ paddingLeft: 12 }}><span className="key">"flowStatus"</span>: <span className="str">"INCOMPLETE"</span>,</div>
        <div style={{ paddingLeft: 12 }}><span className="key">"nextStep"</span>: {`{`}</div>
        <div style={{ paddingLeft: 24 }}><span className="key">"type"</span>: <span className="str">"VIEW"</span>,</div>
        <div style={{ paddingLeft: 24 }}><span className="key">"inputs"</span>: [<span className="str">"username"</span>, <span className="str">"password"</span>]</div>
        <div style={{ paddingLeft: 12 }}>{`}`}</div>
        <div className="dim">{`}`}<span className="cursor" /></div>
      </>
    ),
    react: (
      <>
        <div className="cmt">// App.tsx — React SDK integration</div>
        <div><span className="key">import</span> {`{`} AsgardeoProvider {`}`} <span className="key">from</span> <span className="str">'@asgardeo/react'</span>;</div>
        <div style={{ marginTop: 8 }}><span className="key">export default function</span> <span className="flash">App</span>() {`{`}</div>
        <div style={{ paddingLeft: 14 }}><span className="key">return</span> (</div>
        <div style={{ paddingLeft: 28 }}>&lt;<span className="flash">AsgardeoProvider</span></div>
        <div style={{ paddingLeft: 42 }}><span className="key">baseUrl</span>=<span className="str">"https://localhost:8090"</span></div>
        <div style={{ paddingLeft: 42 }}><span className="key">clientId</span>=<span className="str">"sample-app"</span>&gt;</div>
        <div style={{ paddingLeft: 42 }}>&lt;<span className="flash">Routes</span> /&gt;</div>
        <div style={{ paddingLeft: 28 }}>&lt;/<span className="flash">AsgardeoProvider</span>&gt;</div>
        <div style={{ paddingLeft: 14 }}>{`);`}</div>
        <div>{`}`}</div>
        <div style={{ marginTop: 10 }} className="ok">✓ Ready — sign in, token, refresh all wired<span className="cursor" /></div>
      </>
    )
  };

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dots"><span/><span/><span/></div>
        <span className="terminal-title">~/thunder</span>
        <div className="terminal-tabs">
          <div className={`terminal-tab ${tab==='quickstart'?'active':''}`} onClick={()=>setTab('quickstart')}>quickstart</div>
          <div className={`terminal-tab ${tab==='curl'?'active':''}`} onClick={()=>setTab('curl')}>flow API</div>
          <div className={`terminal-tab ${tab==='react'?'active':''}`} onClick={()=>setTab('react')}>React SDK</div>
        </div>
      </div>
      <div className="terminal-body">
        {content[tab]}
      </div>
    </div>
  );
};

const Hero = () => (
  <header className="hero">
    <div className="container hero-grid fade-in">
      <div>
        <div className="hero-eyebrow">
          <span className="tag">v0.30</span>
          <span>Now with agent identity — first-class AI entities</span>
        </div>
        <h1>
          Identity for humans,<br/>
          services, and <span className="accent">agents.</span>
        </h1>
        <p className="hero-sub">
          Thunder is a Go-based, open-source Identity and Access Management product by WSO2.
          Self-hosted. Developer-first. Built for applications, services, and AI agents
          that need secure, customizable authentication.
        </p>
        <div className="hero-ctas">
          <DownloadButton os="macos" />
          <DownloadButton os="windows" />
          <a className="btn btn-ghost" href="https://github.com/asgardeo/thunder">
            <TIcon name="github" size={16} />
            View on GitHub
          </a>
        </div>
        <div className="hero-meta">
          <span><b>Apache 2.0</b> license</span>
          <span><b>Go 1.22+</b> single binary</span>
          <span><b>&lt;30s</b> quickstart</span>
        </div>
      </div>
      <div>
        <HeroTerminal />
      </div>
    </div>
  </header>
);

const DownloadButton = ({ os }) => {
  const cfg = {
    macos: { label: 'Download for Mac', os: 'macOS 12+', arch: 'arm64 · x64', icon: 'apple' },
    windows: { label: 'Download for Windows', os: 'Windows 10+', arch: 'x64', icon: 'windows' }
  }[os];

  return (
    <div className="dl-btn">
      <div className="dl-btn-main">
        <TIcon name={cfg.icon} size={22} fill="currentColor" stroke={0} style={{color: 'var(--t-text)'}}/>
        <div>
          <div className="os">{cfg.os}</div>
          <div className="lbl">{cfg.label}</div>
        </div>
      </div>
      <div className="dl-btn-divider" />
      <div className="dl-btn-arch" title="Pick architecture">
        {cfg.arch}
      </div>
    </div>
  );
};

Object.assign(window, { Nav, Hero, HeroTerminal, DownloadButton });
