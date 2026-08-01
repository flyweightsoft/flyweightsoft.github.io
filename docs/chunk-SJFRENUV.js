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

// src/app/pages/custom-explorer-sort/custom-explorer-sort.component.ts
var CustomExplorerSortComponent = class _CustomExplorerSortComponent {
  static \u0275fac = function CustomExplorerSortComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomExplorerSortComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomExplorerSortComponent, selectors: [["app-custom-explorer-sort"]], decls: 111, vars: 0, consts: [[1, "container"], ["routerLink", "/", 1, "back-link"], [1, "project-hero"], [1, "project-hero__meta"], [1, "badge", "badge--success"], [1, "badge", "badge--accent"], [1, "project-hero__title"], [1, "project-hero__subtitle", "text-muted"], [1, "project-hero__actions"], ["href", "https://marketplace.visualstudio.com/items?itemName=FlyweightSoft.custom-explorer-sort", "target", "_blank", "rel", "noopener", 1, "btn", "btn--primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["href", "https://github.com/flyweightsoft/custom-explorer-sort", "target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], [1, "section"], [1, "grid", "grid--2"], [1, "section__title"], [1, "feature-list"], [1, "icon"], [1, "code-block"], [1, "text-muted", "example-note"], [1, "grid", "grid--3"], [1, "step"], [1, "step__num"], [1, "step__title"], [1, "text-muted", "step__desc"], [1, "tech-bar"], [1, "tag"]], template: function CustomExplorerSortComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "header", 2)(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6, "Free \xB7 Open Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "VS Code Extension");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "h1", 6);
      \u0275\u0275text(10, "Custom Explorer Sort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12, " Sort files and folders in VS Code's Explorer using a simple ");
      \u0275\u0275elementStart(13, "code");
      \u0275\u0275text(14, ".order");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " file. Respects .gitignore, adjusts mtimes safely, and provides full control over workspace organization. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 11)(20, "polyline", 12)(21, "line", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Install from Marketplace ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "a", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 15);
      \u0275\u0275element(25, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " GitHub ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "section", 17)(28, "div", 18)(29, "div")(30, "h2", 19);
      \u0275\u0275text(31, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "ul", 20)(33, "li")(34, "span", 21);
      \u0275\u0275text(35, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Custom ordering via ");
      \u0275\u0275elementStart(38, "code");
      \u0275\u0275text(39, ".order");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " file \u2014 one filename per line");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "span", 21);
      \u0275\u0275text(43, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Glob pattern and regex support for flexible matching");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "span", 21);
      \u0275\u0275text(48, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, ".gitignore integration \u2014 ignored files are excluded automatically");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "span", 21);
      \u0275\u0275text(53, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "Stable mtime-based sorting \u2014 safe adjustments, no file corruption");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "span", 21);
      \u0275\u0275text(58, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Recursive support for nested directories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "span", 21);
      \u0275\u0275text(63, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Lightweight \u2014 zero runtime dependencies");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div")(67, "h2", 19);
      \u0275\u0275text(68, "Example .order file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 22);
      \u0275\u0275text(70, "README.md\nsrc\ndocs\n(regex)**/*.test.ts\n(regex)*.json");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 23);
      \u0275\u0275text(72, " Files listed first appear at the top. Unlisted files fall to the bottom in their default order. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "section", 17)(74, "h2", 19);
      \u0275\u0275text(75, "How it works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 24)(77, "div", 25)(78, "span", 26);
      \u0275\u0275text(79, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "h3", 27);
      \u0275\u0275text(81, "Create a .order file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 28);
      \u0275\u0275text(83, "Add a ");
      \u0275\u0275elementStart(84, "code");
      \u0275\u0275text(85, ".order");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " file in any directory you want to sort.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 25)(88, "span", 26);
      \u0275\u0275text(89, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h3", 27);
      \u0275\u0275text(91, "List your preferred order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p", 28);
      \u0275\u0275text(93, "Write filenames, glob patterns, or regex \u2014 one per line.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 25)(95, "span", 26);
      \u0275\u0275text(96, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "h3", 27);
      \u0275\u0275text(98, "Explorer updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p", 28);
      \u0275\u0275text(100, "VS Code's Explorer reflects your custom sort order instantly.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "section", 17)(102, "div", 29)(103, "span", 30);
      \u0275\u0275text(104, "TypeScript");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "span", 30);
      \u0275\u0275text(106, "VS Code API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "span", 30);
      \u0275\u0275text(108, "MIT License");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "span", 30);
      \u0275\u0275text(110, "Open Source");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ["\n.project-hero[_ngcontent-%COMP%] {\n  padding: 32px 0 0;\n}\n.project-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.project-hero__title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  margin-bottom: 12px;\n}\n.project-hero__subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 600px;\n  margin-bottom: 24px;\n}\n.project-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.example-note[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 13px;\n  font-style: italic;\n}\n.step[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.step__num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--%NS%accent-subtle);\n  color: var(--%NS%accent);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.step__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.step__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n}\n.tech-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n@media (max-width: 640px) {\n  .project-hero__title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=custom-explorer-sort.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomExplorerSortComponent, [{
    type: Component,
    args: [{ selector: "app-custom-explorer-sort", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="container">

  <a routerLink="/" class="back-link">\u2190 Back to home</a>

  <!-- Hero -->
  <header class="project-hero">
    <div class="project-hero__meta">
      <span class="badge badge--success">Free \xB7 Open Source</span>
      <span class="badge badge--accent">VS Code Extension</span>
    </div>
    <h1 class="project-hero__title">Custom Explorer Sort</h1>
    <p class="project-hero__subtitle text-muted">
      Sort files and folders in VS Code's Explorer using a simple <code>.order</code> file.
      Respects .gitignore, adjusts mtimes safely, and provides full control over workspace organization.
    </p>
    <div class="project-hero__actions">
      <a href="https://marketplace.visualstudio.com/items?itemName=FlyweightSoft.custom-explorer-sort"
         target="_blank" rel="noopener" class="btn btn--primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Install from Marketplace
      </a>
      <a href="https://github.com/flyweightsoft/custom-explorer-sort"
         target="_blank" rel="noopener" class="btn btn--ghost">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
    </div>
  </header>

  <!-- Features -->
  <section class="section">
    <div class="grid grid--2">
      <div>
        <h2 class="section__title">Features</h2>
        <ul class="feature-list">
          <li>
            <span class="icon">\u2713</span>
            <span>Custom ordering via <code>.order</code> file \u2014 one filename per line</span>
          </li>
          <li>
            <span class="icon">\u2713</span>
            <span>Glob pattern and regex support for flexible matching</span>
          </li>
          <li>
            <span class="icon">\u2713</span>
            <span>.gitignore integration \u2014 ignored files are excluded automatically</span>
          </li>
          <li>
            <span class="icon">\u2713</span>
            <span>Stable mtime-based sorting \u2014 safe adjustments, no file corruption</span>
          </li>
          <li>
            <span class="icon">\u2713</span>
            <span>Recursive support for nested directories</span>
          </li>
          <li>
            <span class="icon">\u2713</span>
            <span>Lightweight \u2014 zero runtime dependencies</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="section__title">Example .order file</h2>
        <div class="code-block">README.md
src
docs
(regex)**/*.test.ts
(regex)*.json</div>
        <p class="text-muted example-note">
          Files listed first appear at the top. Unlisted files fall to the bottom in their default order.
        </p>
      </div>
    </div>
  </section>

  <!-- How it works -->
  <section class="section">
    <h2 class="section__title">How it works</h2>
    <div class="grid grid--3">
      <div class="step">
        <span class="step__num">1</span>
        <h3 class="step__title">Create a .order file</h3>
        <p class="text-muted step__desc">Add a <code>.order</code> file in any directory you want to sort.</p>
      </div>
      <div class="step">
        <span class="step__num">2</span>
        <h3 class="step__title">List your preferred order</h3>
        <p class="text-muted step__desc">Write filenames, glob patterns, or regex \u2014 one per line.</p>
      </div>
      <div class="step">
        <span class="step__num">3</span>
        <h3 class="step__title">Explorer updates</h3>
        <p class="text-muted step__desc">VS Code's Explorer reflects your custom sort order instantly.</p>
      </div>
    </div>
  </section>

  <!-- Tech -->
  <section class="section">
    <div class="tech-bar">
      <span class="tag">TypeScript</span>
      <span class="tag">VS Code API</span>
      <span class="tag">MIT License</span>
      <span class="tag">Open Source</span>
    </div>
  </section>

</div>
`, styles: ["/* src/app/pages/custom-explorer-sort/custom-explorer-sort.component.css */\n.project-hero {\n  padding: 32px 0 0;\n}\n.project-hero__meta {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.project-hero__title {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  margin-bottom: 12px;\n}\n.project-hero__subtitle {\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 600px;\n  margin-bottom: 24px;\n}\n.project-hero__actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.example-note {\n  margin-top: 12px;\n  font-size: 13px;\n  font-style: italic;\n}\n.step {\n  padding: 20px;\n}\n.step__num {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--accent-subtle);\n  color: var(--accent);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.step__title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.step__desc {\n  font-size: 14px;\n  line-height: 1.6;\n}\n.tech-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n@media (max-width: 640px) {\n  .project-hero__title {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=custom-explorer-sort.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomExplorerSortComponent, { className: "CustomExplorerSortComponent", filePath: "src/app/pages/custom-explorer-sort/custom-explorer-sort.component.ts", lineNumber: 11 });
})();
export {
  CustomExplorerSortComponent
};
//# debugId=88f3bc21-6940-59f0-93ea-4dc4c53a26f2
//# sourceMappingURL=chunk-SJFRENUV.js.map
