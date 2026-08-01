import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-JR4HB7QV.js";

// src/app/pages/k8sdesk/k8sdesk.component.ts
var K8sdeskComponent = class _K8sdeskComponent {
  static \u0275fac = function K8sdeskComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _K8sdeskComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _K8sdeskComponent, selectors: [["app-k8sdesk"]], decls: 141, vars: 0, consts: [[1, "container"], ["routerLink", "/", 1, "back-link"], [1, "project-hero"], [1, "project-hero__meta"], [1, "badge", "badge--success"], [1, "badge", "badge--warning"], [1, "project-hero__title"], [1, "project-hero__subtitle", "text-muted"], [1, "project-hero__actions"], ["href", "https://github.com/flyweightsoft/k8sdesk", "target", "_blank", "rel", "noopener", 1, "btn", "btn--primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], [1, "section"], [1, "section__title"], [1, "grid", "grid--3"], [1, "card", "highlight-card"], [1, "highlight-card__icon"], [1, "highlight-card__title"], [1, "text-muted", "highlight-card__desc"], [1, "grid", "grid--2"], [1, "feature-list"], [1, "icon"], [1, "why-grid"], [1, "why-item"], [1, "why-item__title", "text-muted"], [1, "text-muted"], [1, "tech-bar"], [1, "tag"]], template: function K8sdeskComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "header", 2)(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6, "Open Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "Kubernetes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "h1", 6);
      \u0275\u0275text(10, "k8sdesk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12, " A focused Kubernetes operations tool built to eliminate the risks of using a shared global kubectl configuration. Credentials stay encrypted on disk, commands go through a strict DSL, and destructive actions require explicit confirmation. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 10);
      \u0275\u0275element(16, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " View on GitHub ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "section", 12)(19, "h2", 13);
      \u0275\u0275text(20, "Security first");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "div", 16);
      \u0275\u0275text(24, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h3", 17);
      \u0275\u0275text(26, "Encrypted at rest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 18);
      \u0275\u0275text(28, "AES-256-GCM encryption. Master key held in the OS keychain, never in plaintext.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 15)(30, "div", 16);
      \u0275\u0275text(31, "\u{1F6AB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h3", 17);
      \u0275\u0275text(33, "No kubectl needed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 18);
      \u0275\u0275text(35, "Embedded kube-rs client talks directly to the cluster API. System kubectl is never touched.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 15)(37, "div", 16);
      \u0275\u0275text(38, "\u{1F6E1}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h3", 17);
      \u0275\u0275text(40, "Isolated config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 18)(42, "code");
      \u0275\u0275text(43, "$KUBECONFIG");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " and ");
      \u0275\u0275elementStart(45, "code");
      \u0275\u0275text(46, "~/.kube");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " are never read or written. Zero side effects.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "section", 12)(49, "h2", 13);
      \u0275\u0275text(50, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 19)(52, "ul", 20)(53, "li")(54, "span", 21);
      \u0275\u0275text(55, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span")(57, "strong");
      \u0275\u0275text(58, "Manifest file manager");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " \u2014 browse a per-cluster folder, edit YAML in a Monaco editor, apply directly to the cluster");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "span", 21);
      \u0275\u0275text(62, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span")(64, "strong");
      \u0275\u0275text(65, "Safe command DSL");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " \u2014 cluster + namespace are auto-applied; forbidden tokens are rejected by the parser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "span", 21);
      \u0275\u0275text(69, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span")(71, "strong");
      \u0275\u0275text(72, "Destructive-action guard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(73, " \u2014 delete, apply, scale, rollout restart require confirmation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "span", 21);
      \u0275\u0275text(76, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span")(78, "strong");
      \u0275\u0275text(79, "Production protection");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " \u2014 prod clusters require typing the cluster name to confirm");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "ul", 20)(82, "li")(83, "span", 21);
      \u0275\u0275text(84, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span")(86, "strong");
      \u0275\u0275text(87, "Environment color coding");
      \u0275\u0275elementEnd();
      \u0275\u0275text(88, " \u2014 dev / staging / prod badges with visual distinction");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "span", 21);
      \u0275\u0275text(91, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span")(93, "strong");
      \u0275\u0275text(94, "Production red border");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " \u2014 persistent red window border on production clusters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "span", 21);
      \u0275\u0275text(98, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span")(100, "strong");
      \u0275\u0275text(101, "Theme support");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " \u2014 GitHub Dark, Midnight, Solarized Dark, GitHub Light, One Light");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "span", 21);
      \u0275\u0275text(105, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span")(107, "strong");
      \u0275\u0275text(108, "Embedded client");
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " \u2014 no system kubectl required, built on kube-rs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(110, "section", 12)(111, "h2", 13);
      \u0275\u0275text(112, "Why k8sdesk?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 22)(114, "div", 23)(115, "h3", 24);
      \u0275\u0275text(116, "The problem");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p", 25);
      \u0275\u0275text(118, "Shared ");
      \u0275\u0275elementStart(119, "code");
      \u0275\u0275text(120, "~/.kube/config");
      \u0275\u0275elementEnd();
      \u0275\u0275text(121, " is a single point of failure. One wrong context switch and you're running commands against production.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 23)(123, "h3", 24);
      \u0275\u0275text(124, "The solution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p", 25);
      \u0275\u0275text(126, "k8sdesk isolates every cluster. Credentials are encrypted, contexts can't leak, and destructive operations have guardrails.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(127, "section", 12)(128, "div", 26)(129, "span", 27);
      \u0275\u0275text(130, "Tauri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span", 27);
      \u0275\u0275text(132, "Rust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span", 27);
      \u0275\u0275text(134, "kube-rs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span", 27);
      \u0275\u0275text(136, "AES-256-GCM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "span", 27);
      \u0275\u0275text(138, "Monaco Editor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "span", 27);
      \u0275\u0275text(140, "Open Source");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ["\n.project-hero[_ngcontent-%COMP%] {\n  padding: 32px 0 0;\n}\n.project-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.project-hero__title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  margin-bottom: 12px;\n}\n.project-hero__subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 640px;\n  margin-bottom: 24px;\n}\n.project-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.highlight-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n}\n.highlight-card__icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 14px;\n}\n.highlight-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.highlight-card__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n}\n.feature-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text);\n  font-weight: 500;\n}\n.why-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.why-item[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--%NS%bg-surface);\n  border: 1px solid var(--%NS%border);\n  border-radius: var(--%NS%radius-lg);\n}\n.why-item__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.why-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n}\n.tech-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n@media (max-width: 640px) {\n  .project-hero__title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .why-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=k8sdesk.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(K8sdeskComponent, [{
    type: Component,
    args: [{ selector: "app-k8sdesk", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="container">

  <a routerLink="/" class="back-link">\u2190 Back to home</a>

  <!-- Hero -->
  <header class="project-hero">
    <div class="project-hero__meta">
      <span class="badge badge--success">Open Source</span>
      <span class="badge badge--warning">Kubernetes</span>
    </div>
    <h1 class="project-hero__title">k8sdesk</h1>
    <p class="project-hero__subtitle text-muted">
      A focused Kubernetes operations tool built to eliminate the risks of using a shared
      global kubectl configuration. Credentials stay encrypted on disk, commands go through
      a strict DSL, and destructive actions require explicit confirmation.
    </p>
    <div class="project-hero__actions">
      <a href="https://github.com/flyweightsoft/k8sdesk"
         target="_blank" rel="noopener" class="btn btn--primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        View on GitHub
      </a>
    </div>
  </header>

  <!-- Core Principles -->
  <section class="section">
    <h2 class="section__title">Security first</h2>
    <div class="grid grid--3">
      <div class="card highlight-card">
        <div class="highlight-card__icon">\u{1F512}</div>
        <h3 class="highlight-card__title">Encrypted at rest</h3>
        <p class="text-muted highlight-card__desc">AES-256-GCM encryption. Master key held in the OS keychain, never in plaintext.</p>
      </div>
      <div class="card highlight-card">
        <div class="highlight-card__icon">\u{1F6AB}</div>
        <h3 class="highlight-card__title">No kubectl needed</h3>
        <p class="text-muted highlight-card__desc">Embedded kube-rs client talks directly to the cluster API. System kubectl is never touched.</p>
      </div>
      <div class="card highlight-card">
        <div class="highlight-card__icon">\u{1F6E1}\uFE0F</div>
        <h3 class="highlight-card__title">Isolated config</h3>
        <p class="text-muted highlight-card__desc"><code>$KUBECONFIG</code> and <code>~/.kube</code> are never read or written. Zero side effects.</p>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="section">
    <h2 class="section__title">Features</h2>
    <div class="grid grid--2">
      <ul class="feature-list">
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Manifest file manager</strong> \u2014 browse a per-cluster folder, edit YAML in a Monaco editor, apply directly to the cluster</span>
        </li>
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Safe command DSL</strong> \u2014 cluster + namespace are auto-applied; forbidden tokens are rejected by the parser</span>
        </li>
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Destructive-action guard</strong> \u2014 delete, apply, scale, rollout restart require confirmation</span>
        </li>
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Production protection</strong> \u2014 prod clusters require typing the cluster name to confirm</span>
        </li>
      </ul>
      <ul class="feature-list">
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Environment color coding</strong> \u2014 dev / staging / prod badges with visual distinction</span>
        </li>
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Production red border</strong> \u2014 persistent red window border on production clusters</span>
        </li>
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Theme support</strong> \u2014 GitHub Dark, Midnight, Solarized Dark, GitHub Light, One Light</span>
        </li>
        <li>
          <span class="icon">\u2713</span>
          <span><strong>Embedded client</strong> \u2014 no system kubectl required, built on kube-rs</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- Why -->
  <section class="section">
    <h2 class="section__title">Why k8sdesk?</h2>
    <div class="why-grid">
      <div class="why-item">
        <h3 class="why-item__title text-muted">The problem</h3>
        <p class="text-muted">Shared <code>~/.kube/config</code> is a single point of failure. One wrong context switch and you're running commands against production.</p>
      </div>
      <div class="why-item">
        <h3 class="why-item__title text-muted">The solution</h3>
        <p class="text-muted">k8sdesk isolates every cluster. Credentials are encrypted, contexts can't leak, and destructive operations have guardrails.</p>
      </div>
    </div>
  </section>

  <!-- Tech -->
  <section class="section">
    <div class="tech-bar">
      <span class="tag">Tauri</span>
      <span class="tag">Rust</span>
      <span class="tag">kube-rs</span>
      <span class="tag">AES-256-GCM</span>
      <span class="tag">Monaco Editor</span>
      <span class="tag">Open Source</span>
    </div>
  </section>

</div>
`, styles: ["/* src/app/pages/k8sdesk/k8sdesk.component.css */\n.project-hero {\n  padding: 32px 0 0;\n}\n.project-hero__meta {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.project-hero__title {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  margin-bottom: 12px;\n}\n.project-hero__subtitle {\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 640px;\n  margin-bottom: 24px;\n}\n.project-hero__actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.highlight-card {\n  text-align: center;\n  padding: 28px 20px;\n}\n.highlight-card__icon {\n  font-size: 28px;\n  margin-bottom: 14px;\n}\n.highlight-card__title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.highlight-card__desc {\n  font-size: 14px;\n  line-height: 1.6;\n}\n.feature-list strong {\n  color: var(--text);\n  font-weight: 500;\n}\n.why-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.why-item {\n  padding: 24px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n}\n.why-item__title {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.why-item p {\n  font-size: 14px;\n  line-height: 1.7;\n}\n.tech-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n@media (max-width: 640px) {\n  .project-hero__title {\n    font-size: 26px;\n  }\n  .why-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=k8sdesk.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(K8sdeskComponent, { className: "K8sdeskComponent", filePath: "src/app/pages/k8sdesk/k8sdesk.component.ts", lineNumber: 11 });
})();
export {
  K8sdeskComponent
};
//# debugId=d82f696b-3599-5370-98f3-e153f4ce0e69
//# sourceMappingURL=chunk-SHWBEJBA.js.map
