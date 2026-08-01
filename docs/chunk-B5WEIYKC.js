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
  ɵɵtext
} from "./chunk-JR4HB7QV.js";

// src/app/pages/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 113, vars: 0, consts: [[1, "container"], [1, "hero"], [1, "hero__content"], ["src", "logo/logo-transparent-svg.svg", "alt", "FlyweightSoft logo", 1, "hero__logo"], [1, "hero__name"], [1, "hero__role", "text-muted"], [1, "hero__bio", "text-muted"], ["id", "services", 1, "section"], [1, "section__title"], [1, "grid", "grid--3"], [1, "card"], [1, "card__icon"], [1, "card__title"], [1, "card__desc", "text-muted"], [1, "card__tags"], [1, "tag"], [1, "extras"], [1, "text-muted"], [1, "text-subtle"], ["id", "open-source", 1, "section"], [1, "grid", "grid--2"], ["routerLink", "/custom-explorer-sort", 1, "project-card", "card"], [1, "project-card__header"], [1, "project-card__name"], [1, "badge", "badge--success"], [1, "project-card__desc", "text-muted"], [1, "project-card__link"], [1, "arrow"], ["routerLink", "/k8sdesk", 1, "project-card", "card"], [1, "badge", "badge--warning"], ["id", "connect", 1, "section"], [1, "text-muted", 2, "margin-bottom", "20px"], [1, "social-links"], ["href", "https://github.com/santhosh-pro", "target", "_blank", "rel", "noopener", "title", "GitHub", 1, "social-link"], ["src", "images/github.svg", "alt", "GitHub"], ["href", "https://www.linkedin.com/in/santhosh-pro/", "target", "_blank", "rel", "noopener", "title", "LinkedIn", 1, "social-link"], ["src", "images/linkedin.svg", "alt", "LinkedIn"], ["href", "https://www.upwork.com/freelancers/~017cd41b09fd764257", "target", "_blank", "rel", "noopener", "title", "Upwork", 1, "social-link"], ["src", "images/upwork.png", "alt", "Upwork"], ["href", "mailto:santhosh@flyweightsoft.com", "title", "Email", 1, "social-link"], ["src", "images/gmail.svg", "alt", "Email"], [1, "note"], [1, "footer"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "div")(5, "h1", 4);
      \u0275\u0275text(6, "Santhosh M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Full-Stack Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " Building clean, scalable software with Angular, Flutter, and NestJS. Focused on modern development practices and elegant solutions. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "section", 7)(12, "h2", 8);
      \u0275\u0275text(13, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11);
      \u0275\u0275text(17, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h3", 12);
      \u0275\u0275text(19, "Web Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21, "Fast, scalable web applications with modern frameworks and responsive designs.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "span", 15);
      \u0275\u0275text(24, "Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "TailwindCSS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 15);
      \u0275\u0275text(28, "NestJS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30, "Prisma");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 10)(32, "div", 11);
      \u0275\u0275text(33, "\u{1F4F1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h3", 12);
      \u0275\u0275text(35, "Mobile Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 13);
      \u0275\u0275text(37, "High-performance cross-platform mobile applications with native feel.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 14)(39, "span", 15);
      \u0275\u0275text(40, "Flutter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 15);
      \u0275\u0275text(42, "Ionic (Angular)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 10)(44, "div", 11);
      \u0275\u0275text(45, "\u2699\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "h3", 12);
      \u0275\u0275text(47, "DevOps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 13);
      \u0275\u0275text(49, "Containerization and automated deployment pipelines for efficient workflows.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 14)(51, "span", 15);
      \u0275\u0275text(52, "Docker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 15);
      \u0275\u0275text(54, "Kubernetes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 15);
      \u0275\u0275text(56, "CI/CD");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 16)(58, "p", 17)(59, "span", 18);
      \u0275\u0275text(60, "Also:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " Microservices Architecture \xB7 Apache Superset \xB7 Redis \xB7 PWA \xB7 Plop.js ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "section", 19)(63, "h2", 8);
      \u0275\u0275text(64, "Open Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 20)(66, "a", 21)(67, "div", 22)(68, "h3", 23);
      \u0275\u0275text(69, "Custom Explorer Sort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 24);
      \u0275\u0275text(71, "VS Code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "p", 25);
      \u0275\u0275text(73, " Sort files and folders in VS Code's Explorer using a simple ");
      \u0275\u0275elementStart(74, "code");
      \u0275\u0275text(75, ".order");
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, " file. Supports glob patterns, regex, and .gitignore integration. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 26);
      \u0275\u0275text(78, " View details ");
      \u0275\u0275elementStart(79, "span", 27);
      \u0275\u0275text(80, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "a", 28)(82, "div", 22)(83, "h3", 23);
      \u0275\u0275text(84, "k8sdesk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span", 29);
      \u0275\u0275text(86, "Kubernetes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "p", 25);
      \u0275\u0275text(88, " A focused Kubernetes operations tool. Encrypted credentials, safe command DSL, and destructive-action guards for production safety. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span", 26);
      \u0275\u0275text(90, " View details ");
      \u0275\u0275elementStart(91, "span", 27);
      \u0275\u0275text(92, "\u2192");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(93, "section", 30)(94, "h2", 8);
      \u0275\u0275text(95, "Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 31);
      \u0275\u0275text(97, " Let's build something great together. Reach out for collaborations, projects, or just to say hello. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 32)(99, "a", 33);
      \u0275\u0275element(100, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "a", 35);
      \u0275\u0275element(102, "img", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "a", 37);
      \u0275\u0275element(104, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "a", 39);
      \u0275\u0275element(106, "img", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 41)(108, "p", 18);
      \u0275\u0275text(109, " FlyweightSoft is a sole proprietorship operated by Santhosh M. All billing is processed under my personal name. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "footer", 42)(111, "p", 18);
      \u0275\u0275text(112, "\xA9 2025 FlyweightSoft. All rights reserved.");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink], styles: ["\n.hero[_ngcontent-%COMP%] {\n  padding: 64px 0 48px;\n}\n.hero__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 32px;\n}\n.hero__logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n  flex-shrink: 0;\n}\n.hero__name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 4px;\n}\n.hero__role[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n.hero__bio[_ngcontent-%COMP%] {\n  font-size: 15px;\n  max-width: 520px;\n  line-height: 1.6;\n}\n.card__icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.card__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.card__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.extras[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px 20px;\n  background: var(--%NS%bg-surface);\n  border: 1px solid var(--%NS%border);\n  border-radius: var(--%NS%radius);\n  font-size: 14px;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n.project-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.project-card__name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.project-card__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  flex: 1;\n}\n.project-card__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--%NS%accent);\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px 20px;\n  background: var(--%NS%bg-surface);\n  border: 1px solid var(--%NS%border);\n  border-radius: var(--%NS%radius);\n  font-size: 13px;\n  font-style: italic;\n}\n.footer[_ngcontent-%COMP%] {\n  padding: 32px 0;\n  border-top: 1px solid var(--%NS%border);\n  text-align: center;\n  font-size: 12px;\n}\n@media (max-width: 640px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 40px 0 32px;\n  }\n  .hero__content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .hero__logo[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .hero__name[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .hero__bio[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="container">

  <!-- Hero -->
  <header class="hero">
    <div class="hero__content">
      <img src="logo/logo-transparent-svg.svg" class="hero__logo" alt="FlyweightSoft logo" />
      <div>
        <h1 class="hero__name">Santhosh M</h1>
        <p class="hero__role text-muted">Full-Stack Developer</p>
        <p class="hero__bio text-muted">
          Building clean, scalable software with Angular, Flutter, and NestJS.
          Focused on modern development practices and elegant solutions.
        </p>
      </div>
    </div>
  </header>

  <!-- Services -->
  <section class="section" id="services">
    <h2 class="section__title">Services</h2>
    <div class="grid grid--3">
      <div class="card">
        <div class="card__icon">\u{1F310}</div>
        <h3 class="card__title">Web Development</h3>
        <p class="card__desc text-muted">Fast, scalable web applications with modern frameworks and responsive designs.</p>
        <div class="card__tags">
          <span class="tag">Angular</span>
          <span class="tag">TailwindCSS</span>
          <span class="tag">NestJS</span>
          <span class="tag">Prisma</span>
        </div>
      </div>
      <div class="card">
        <div class="card__icon">\u{1F4F1}</div>
        <h3 class="card__title">Mobile Development</h3>
        <p class="card__desc text-muted">High-performance cross-platform mobile applications with native feel.</p>
        <div class="card__tags">
          <span class="tag">Flutter</span>
          <span class="tag">Ionic (Angular)</span>
        </div>
      </div>
      <div class="card">
        <div class="card__icon">\u2699\uFE0F</div>
        <h3 class="card__title">DevOps</h3>
        <p class="card__desc text-muted">Containerization and automated deployment pipelines for efficient workflows.</p>
        <div class="card__tags">
          <span class="tag">Docker</span>
          <span class="tag">Kubernetes</span>
          <span class="tag">CI/CD</span>
        </div>
      </div>
    </div>
    <div class="extras">
      <p class="text-muted">
        <span class="text-subtle">Also:</span>
        Microservices Architecture \xB7 Apache Superset \xB7 Redis \xB7 PWA \xB7 Plop.js
      </p>
    </div>
  </section>

  <!-- Open Source -->
  <section class="section" id="open-source">
    <h2 class="section__title">Open Source</h2>
    <div class="grid grid--2">

      <a routerLink="/custom-explorer-sort" class="project-card card">
        <div class="project-card__header">
          <h3 class="project-card__name">Custom Explorer Sort</h3>
          <span class="badge badge--success">VS Code</span>
        </div>
        <p class="project-card__desc text-muted">
          Sort files and folders in VS Code's Explorer using a simple <code>.order</code> file.
          Supports glob patterns, regex, and .gitignore integration.
        </p>
        <span class="project-card__link">
          View details <span class="arrow">\u2192</span>
        </span>
      </a>

      <a routerLink="/k8sdesk" class="project-card card">
        <div class="project-card__header">
          <h3 class="project-card__name">k8sdesk</h3>
          <span class="badge badge--warning">Kubernetes</span>
        </div>
        <p class="project-card__desc text-muted">
          A focused Kubernetes operations tool. Encrypted credentials, safe command DSL,
          and destructive-action guards for production safety.
        </p>
        <span class="project-card__link">
          View details <span class="arrow">\u2192</span>
        </span>
      </a>

    </div>
  </section>

  <!-- Connect -->
  <section class="section" id="connect">
    <h2 class="section__title">Connect</h2>
    <p class="text-muted" style="margin-bottom: 20px;">
      Let's build something great together. Reach out for collaborations, projects, or just to say hello.
    </p>
    <div class="social-links">
      <a href="https://github.com/santhosh-pro" target="_blank" rel="noopener" class="social-link" title="GitHub">
        <img src="images/github.svg" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/santhosh-pro/" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
        <img src="images/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://www.upwork.com/freelancers/~017cd41b09fd764257" target="_blank" rel="noopener" class="social-link" title="Upwork">
        <img src="images/upwork.png" alt="Upwork" />
      </a>
      <a href="mailto:santhosh@flyweightsoft.com" class="social-link" title="Email">
        <img src="images/gmail.svg" alt="Email" />
      </a>
    </div>
    <div class="note">
      <p class="text-subtle">
        FlyweightSoft is a sole proprietorship operated by Santhosh M.
        All billing is processed under my personal name.
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p class="text-subtle">\xA9 2025 FlyweightSoft. All rights reserved.</p>
  </footer>

</div>
`, styles: ["/* src/app/pages/home/home.component.css */\n.hero {\n  padding: 64px 0 48px;\n}\n.hero__content {\n  display: flex;\n  align-items: flex-start;\n  gap: 32px;\n}\n.hero__logo {\n  width: 100px;\n  height: auto;\n  flex-shrink: 0;\n}\n.hero__name {\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 4px;\n}\n.hero__role {\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n.hero__bio {\n  font-size: 15px;\n  max-width: 520px;\n  line-height: 1.6;\n}\n.card__icon {\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.card__title {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.card__desc {\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.card__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.extras {\n  margin-top: 16px;\n  padding: 16px 20px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  font-size: 14px;\n}\n.project-card {\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n}\n.project-card:hover {\n  color: inherit;\n}\n.project-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.project-card__name {\n  font-size: 18px;\n  font-weight: 600;\n}\n.project-card__desc {\n  font-size: 14px;\n  line-height: 1.6;\n  flex: 1;\n}\n.project-card__link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--accent);\n}\n.note {\n  margin-top: 24px;\n  padding: 16px 20px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  font-size: 13px;\n  font-style: italic;\n}\n.footer {\n  padding: 32px 0;\n  border-top: 1px solid var(--border);\n  text-align: center;\n  font-size: 12px;\n}\n@media (max-width: 640px) {\n  .hero {\n    padding: 40px 0 32px;\n  }\n  .hero__content {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .hero__logo {\n    width: 80px;\n  }\n  .hero__name {\n    font-size: 24px;\n  }\n  .hero__bio {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 11 });
})();
export {
  HomeComponent
};
//# debugId=f5082754-bab4-5db8-a5b6-cf9e222b9894
//# sourceMappingURL=chunk-B5WEIYKC.js.map
