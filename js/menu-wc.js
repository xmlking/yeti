'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">yeti documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-692a9bbf040a2082dbc687c747e44b31"' : 'data-target="#xs-components-links-module-AdminModule-692a9bbf040a2082dbc687c747e44b31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-692a9bbf040a2082dbc687c747e44b31"' :
                                            'id="xs-components-links-module-AdminModule-692a9bbf040a2082dbc687c747e44b31"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b1e1d81a018527f1a2404875ccc42356"' : 'data-target="#xs-components-links-module-AppModule-b1e1d81a018527f1a2404875ccc42356"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b1e1d81a018527f1a2404875ccc42356"' :
                                            'id="xs-components-links-module-AppModule-b1e1d81a018527f1a2404875ccc42356"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' : 'data-target="#xs-controllers-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' :
                                            'id="xs-controllers-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' : 'data-target="#xs-injectables-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' :
                                        'id="xs-injectables-links-module-AppModule-c59f52ef0c580ccf62d77a9c2e88b181-1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link">BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-80955ae4cde71aab5744673112cb8caa"' : 'data-target="#xs-components-links-module-BlogModule-80955ae4cde71aab5744673112cb8caa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-80955ae4cde71aab5744673112cb8caa"' :
                                            'id="xs-components-links-module-BlogModule-80955ae4cde71aab5744673112cb8caa"' }>
                                            <li class="link">
                                                <a href="components/BlogOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPreviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-0ea9030a24cb316d805b78abc5710eb5"' : 'data-target="#xs-components-links-module-DashboardModule-0ea9030a24cb316d805b78abc5710eb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-0ea9030a24cb316d805b78abc5710eb5"' :
                                            'id="xs-components-links-module-DashboardModule-0ea9030a24cb316d805b78abc5710eb5"' }>
                                            <li class="link">
                                                <a href="components/DashboardLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EchoModule.html" data-type="entity-link">EchoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-f1250a65a78d01109e9b8e51d42dbb26"' : 'data-target="#xs-components-links-module-HomeModule-f1250a65a78d01109e9b8e51d42dbb26"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-f1250a65a78d01109e9b8e51d42dbb26"' :
                                            'id="xs-components-links-module-HomeModule-f1250a65a78d01109e9b8e51d42dbb26"' }>
                                            <li class="link">
                                                <a href="components/CallbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CallbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundModule.html" data-type="entity-link">NotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotFoundModule-d71d7d9c61155a88421c5f32df75d02d"' : 'data-target="#xs-components-links-module-NotFoundModule-d71d7d9c61155a88421c5f32df75d02d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotFoundModule-d71d7d9c61155a88421c5f32df75d02d"' :
                                            'id="xs-components-links-module-NotFoundModule-d71d7d9c61155a88421c5f32df75d02d"' }>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FooterComponent-2.html" data-type="entity-link">FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-1.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-2.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OverviewComponent-1.html" data-type="entity-link">OverviewComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EchoController.html" data-type="entity-link">EchoController</a>
                            </li>
                            <li class="link">
                                <a href="classes/EchoServiceClient.html" data-type="entity-link">EchoServiceClient</a>
                            </li>
                            <li class="link">
                                <a href="classes/EchoServiceClientImpl.html" data-type="entity-link">EchoServiceClientImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadProfile.html" data-type="entity-link">LoadProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCanceled.html" data-type="entity-link">LoginCanceled</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginSuccess.html" data-type="entity-link">LoginSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logout.html" data-type="entity-link">Logout</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogoutSuccess.html" data-type="entity-link">LogoutSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileLoaded.html" data-type="entity-link">ProfileLoaded</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnalyticsService.html" data-type="entity-link">AnalyticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link">AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthHandler.html" data-type="entity-link">AuthHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthState.html" data-type="entity-link">AuthState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomRouterStateSerializer.html" data-type="entity-link">CustomRouterStateSerializer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HighlightService.html" data-type="entity-link">HighlightService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LayoutService.html" data-type="entity-link">LayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NbGenericOAuth2Strategy.html" data-type="entity-link">NbGenericOAuth2Strategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NbGoogleOAuth2Strategy.html" data-type="entity-link">NbGoogleOAuth2Strategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageTitleService.html" data-type="entity-link">PageTitleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteHandler.html" data-type="entity-link">RouteHandler</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthStateModel.html" data-type="entity-link">AuthStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EchoService.html" data-type="entity-link">EchoService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEnvironment.html" data-type="entity-link">IEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouterStateData.html" data-type="entity-link">RouterStateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rpc.html" data-type="entity-link">Rpc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link">UserInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});