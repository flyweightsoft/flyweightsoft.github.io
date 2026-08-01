import {
  ChangeDetectionStrategy,
  Component,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  withHashLocation,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-JR4HB7QV.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-B5WEIYKC.js").then((m) => m.HomeComponent)
  },
  {
    path: "custom-explorer-sort",
    loadComponent: () => import("./chunk-SJFRENUV.js").then((m) => m.CustomExplorerSortComponent)
  },
  {
    path: "k8sdesk",
    loadComponent: () => import("./chunk-SHWBEJBA.js").then((m) => m.K8sdeskComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation())
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [RouterOutlet],
      template: "<router-outlet />",
      changeDetection: ChangeDetectionStrategy.Eager
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=6e6bdaaf-f724-5bd8-bb08-833ea27589ee
//# sourceMappingURL=main.js.map
