# Scaffolding

Generate Angular Artifacts

## Generate Artifacts

> Add `--dry-run` or `-d` option to following commands to see which artifacts will be created, without actually creating them.

### generate Lazy-loaded Feature Modules

> with angular schematics (a.k.a. @nrwl/angular which is default in `angular.json`)

```bash
# ng g @nrwl/angular:lib ...
ng g lib home           --routing --lazy --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=layout,entry-module
ng g lib dashboard      --routing --lazy  --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=layout,entry-module
ng g lib admin          --routing --lazy  --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=layout,entry-module
ng g lib NotFound       --routing --lazy  --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=entry-module
ng g lib experiments    --routing --lazy  --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --defaults --tags=child-module
ng g lib widgets        --routing --lazy  --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --defaults --tags=child-module
ng g lib accounts       --routing --lazy  --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --defaults --tags=child-module

# ng g worker app --project=webapp -d # TODO
```

### generate shared neutral libs

> with no-framework (a.k.a. @nrwl/workspace schematics)

```bash
ng g @nrwl/workspace:lib gen        --tags=utils --defaults -d
ng g @nrwl/workspace:lib tree       --tags=utils --defaults -d
ng g @nrwl/workspace:lib utils      --tags=utils --defaults -d
ng g @nrwl/workspace:lib animations --tags=utils --defaults -d

# system wide `models` module
ng g @nrwl/workspace:lib models     --tags=utils --defaults -d
ng g interface User  --project=models --type=model -d
ng g interface JwtToken  --project=models --type=model -d
ng g interface Profile  --project=models --type=model -d
ng g interface Image  --project=models --type=model -d
ng g enum ImageType --project=models -d
ng g enum Gender --project=models -d
ng g enum AccountSourceType --project=models -d
ng g enum ZoneType --project=models -d
ng g enum EnvironmentType --project=models -d
ng g interface Labels  --project=models --type=model -d
ng g interface Membership  --project=models --type=model -d
ng g interface ResourceQuota  --project=models --type=model -d
ng g interface Project  --project=models --type=model -d
ng g interface Cluster  --project=models --type=model -d
```

### generate shared angular libs

> with angular schematics (a.k.a. @nrwl/angular which is default in `angular.json`)

```bash
# add `core` angular module which will be only inported into root/app module.
ng g lib core --tags=scope:core --defaults -d
# add  global services for `core` Module


ng g service services/Layout          --project=core   -d
ng g service services/PageTitle       --project=core   -d
ng g service services/ServiceWorker   --project=core   -d
ng g service services/MediaQuery      --project=core   -d
ng g service services/DeepLink        --project=core   -d
ng g service services/Feature         --project=core   -d
ng g service services/Analytics       --project=core   -d
ng g service services/PushNotification --project=core  -d
ng g service services/InMemoryData    --project=core   --skip-tests -d
ng g service services/Profile         --project=core   --skip-tests -d
ng g service services/hammer          --project=core   --skip-tests --type=config -d
ng g service services/AppConfig       --project=core   --skip-tests -d
ng g service services/Auth            --project=core   --skip-tests -d
ng g @ngxs/schematics:state state/auth --spec=false --sourceRoot=libs/core/src/lib --project=core -d
ng g @ngxs/schematics:state state/preference --spec=false --sourceRoot=libs/core/src/lib --project=core -d
ng g @ngxs/schematics:state profile --path=state --spec=false --sourceRoot=libs/core/src/lib --project=core -d
ng g guard guard/auth --project=core --implements CanActivate -d
ng g guard guard/admin --project=core --implements CanActivate -d
ng g @ngxs/schematics:store --name=auth --spec --project=core --sourceRoot=libs/core/src/lib -d
ng g i interfaces/RouterStateData --project=core -d
ng g i interfaces/UserInfo --project=core -d

# add `shared` module which will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`
ng g lib shared  --tags=scope:shared --defaults -d
# generate containers, components for `shared` Module
ng g service containers/entity/entity --project=shared
ng g component components/entityTable --project=shared  --export=true
ng g component containers/entity --project=shared  --skip-import
ng g component containers/entityForm  --project=shared  --skip-import

# generate containers for `NotFound` Module
ng g component containers/NotFound --project=not-found -d


### generate `Reusable lib Modules`

# generate components for `AppConfirm` Module
ng g lib AppConfirm --tags=scope:shared --publishable=true --defaults -d
ng g component AppConfirm --project=app-confirm  --flat  -d
ng g service AppConfirm --project=app-confirm --skip-tests -d

# generate components for `Draggable` Module
ng g lib Draggable --tags=scope:shared --publishable=true --defaults -d
ng g directive directives/Draggable --project=draggable --export=true -d

# generate components for `Breadcrumbs` Module
ng g lib Breadcrumbs --tags=scope:shared --publishable=true --defaults -d
ng g component breadcrumbs --project=breadcrumbs --flat -d
ng g service  breadcrumbs --project=breadcrumbs -d

# generate components for `ScrollToTop` Module
ng g lib ScrollToTop --tags=scope:shared --publishable=true --defaults -d
ng g component ScrollToTop --project=scroll-to-top --flat -d

ng g lib scrollbar --tags=scope:shared --publishable=true --defaults -d

# generate components for `ContextMenu` Module
ng g lib ContextMenu --tags=scope:shared --publishable=true --defaults -d
ng g component ContextMenu --project=context-menu --flat -d
ng g directive ContextMenuTrigger --project=context-menu --flat -d

# generate components, services for `ThemePicker` Module
ng g lib ThemePicker --tags=scope:shared --publishable=true --defaults -d
ng g component ThemePicker --project=theme-picker --flat -d
ng g service  ThemeStorage --project=theme-picker -d
ng g service  StyleManager --project=theme-picker -d
ng g module ThemePickerService --project=theme-picker --flat -d

# generate components for `Notifications` Module
ng g lib Notifications --tags=scope:shared --publishable=true --defaults -d
ng g component notifications --project=notifications --flat -d
ng g class    notification --type=model --project=notifications --defaults -d
ng g service  notifications --project=notifications -d

# generate components for `Quickpanel` Module
ng g lib Quickpanel  --tags=scope:app1 --defaults -d
ng g component Quickpanel --project=quickpanel --flat -d

# generate components for `LoadingOverlay` Module
ng g lib LoadingOverlay --tags=scope:shared --publishable=true --defaults -d
ng g component LoadingOverlay --project=loading-overlay --flat -d

# generate components for `svgViewer` Module
ng g lib svgViewer --tags=scope:shared --publishable=true --defaults -d
ng g component svgViewer --project=svg-viewer --flat -d

# generate components for `led` Module
ng g lib led --tags=scope:shared --publishable=true --defaults -d
ng g component led --project=led --flat -d

# generate components for `chatBox` Module
ng g lib chatBox --tags=scope:shared --publishable=true --defaults -d
ng g component chatBox --project=chat-box --flat -d
ng g component components/typingIndicator --project=chat-box -d
ng g component components/chatCard --project=chat-box -d
ng g component components/TextToSpeechPreferences  --project=chat-box -d
ng g service services/nlp --project=chat-box -d
ng g service services/SpeechToText --project=chat-box -d
ng g service services/TextToSpeech --project=chat-box -d
ng g service services/chat --project=chat-box -d

# generate components for `socketioPlugin` Module
ng g lib socketioPlugin --tags=scope:shared --publishable=true --spec=false --defaults -d
ng g service socketioSubject --project=socketio-plugin -d

# generate components for `openTracing` Module
ng g lib openTracing --tags=scope:shared  --publishable=true --spec=false --defaults -d
ng g service services/ZipkinTracing --project=open-tracing -d
ng g interceptor interceptors/tracing  --project=open-tracing -d

# generate components for `jsonDiff` Module
ng g lib jsonDiff --tags=scope:shared --publishable=true --defaults -d
ng g component jsonDiff --project=json-diff --flat -d
ng g component jsonDiffTree --project=json-diff --flat -d

# generate components for `clap` Module
ng g lib clap --tags=scope:shared --skip-tests --publishable=true --defaults -d
ng g component clap --project=clap  -s  -t --skip-tests --export --flat -d
ng g component components/counterBubble --project=clap  -s  -t --skip-tests --flat  -d
ng g component components/totalCounter --project=clap  -s  -t --skip-tests --flat  -d
ng g component components/fab --project=clap  -s  -t --skip-tests --flat  -d

# generate components for `ngx-utils` Module
ng g lib ngxUtils --tags=scope:shared,utils --framework=none --publishable=true --defaults -d
ng g module pipes/truncate --project=ngx-utils --skip-tests -d
ng g pipe pipes/truncate/Characters --project=ngx-utils --module=truncate --export -d
ng g pipe pipes/truncate/Words --project=ngx-utils --module=truncate --export -d
ng g module pipes/helper --project=ngx-utils --skip-tests -d
ng g pipe pipes/helper/filter --project=ngx-utils --module=helper --export -d
ng g pipe pipes/helper/groupBy --project=ngx-utils --module=helper --export -d
ng g pipe pipes/helper/safeHtml --project=ngx-utils --module=helper --export -d
ng g module directives/ngLet --project=ngx-utils --skip-tests -d
ng g directive directives/ng-let/ngLet  --selector=ngLet --project=ngx-utils --module=ng-let --export -d
ng g module directives/routerLinkMatch --project=ngx-utils --skip-tests -d
ng g directive directives/router-link-match/RouterLinkMatch  --selector=routerLinkMatch --project=ngx-utils --module=router-link-match --export -d
ng g module pipes/dateFns --project=ngx-utils --skip-tests -d
ng g service pipes/date-fns/DateFnsConfiguration --project=ngx-utils --module=date-fns --skip-tests -d
ng g pipe pipes/date-fns/FormatTimeInWords --project=ngx-utils --module=date-fns --export -d
ng g module directives/inViewport --project=ngx-utils --skip-tests -d
ng g directive directives/in-viewport/inViewport  --selector=inViewport --project=ngx-utils --module=in-viewport --export -d
ng g service directives/in-viewport/Viewport --project=ngx-utils --module=in-viewport -d
ng g module directives/clickOutside --project=ngx-utils --skip-tests -d
ng g directive directives/click-outside/clickOutside  --selector=clickOutside --project=ngx-utils --module=click-outside --export -d
ng g module directives/min --project=ngx-utils --skip-tests -d
ng g directive directives/min/MinValidator  --selector=appMin --project=ngx-utils --module=min --export -d
ng g module directives/mask --project=ngx-utils --skip-tests -d
ng g directive directives/mask/mask  --selector=ngxMask --project=ngx-utils --module=mask --export -d

# generate components for `blog` Module
ng g lib blog --routing --lazy --parent-module=libs/home/src/lib/home.module.ts --tags=scope:app1 --defaults -d
ng g component containers/BlogOverview    --project=blog -d
ng g component components/BlogPreview     --project=blog -d
ng g component containers/BlogPost        --project=blog -d
ng g service services/highlight           --project=blog --skip-tests -d

# generate components for `toolbar` Module
ng g lib toolbar --tags=scope:app1 --defaults -d
ng g component toolbar                        --project=toolbar --flat -d
ng g component components/search              --project=toolbar -d
ng g component components/searchBar           --project=toolbar -d
ng g component components/UserMenu            --project=toolbar -d
ng g component components/FullscreenToggle    --project=toolbar -d
ng g component components/SidenavMobileToggle --project=toolbar -d
ng g component components/QuickpanelToggle    --project=toolbar -d

# generate components for `sidenav` Module
ng g lib sidenav --tags=scope:app1 --defaults -d
ng g component sidenav                --project=sidenav --flat -d
ng g component components/sidenavItem --project=sidenav -d
ng g directive  IconSidenav           --project=sidenav -d

# generate components for `auth` Module
ng g lib auth --tags=scope:app1,scope:core  --defaults -d
ng g component components/login --project=auth -d
ng g guard admin --project=auth --implements CanActivate -d
ng g @ngxs/schematics:store --name=auth --spec --project=auth --sourceRoot=libs/auth/src/lib -d

# generate components for `oidc` Module
ng g lib oidc --tags=scope:app1  --spec=false --publishable=true --defaults -d
ng g service services/Auth  --project=oidc -d
ng g service services/Keycloak  --project=oidc -d
ng g service services/Generic  --project=oidc -d
ng g service services/Ping  --project=oidc -d
ng g guard BaseAuth --project=oidc --implements CanActivate -d
ng g interceptor DefaultOidc --project=oidc  -d
ng g @ngxs/schematics:store --name=auth --spec --project=oidc  --sourceRoot=libs/oidc/src/lib -d
ng g i interfaces/OidcModule config --project=oidc -d
ng g i interfaces/OidcProvider config --project=oidc -d
ng g i interfaces/OidcInit config --project=oidc -d
ng g i interfaces/OidcResourceInterceptor config --project=oidc -d

# generate components for `navigator` Module
ng g lib navigator  --tags=scope:app1,scope:core --defaults -d
ng g service services/menu  --project=navigator -d
ng g class models/menuItem  --project=navigator --type=model  -d
ng g class state/menu       --project=navigator --type=state  -d

# generate containers, components for `home` Module
ng g component components/header      --project=home
ng g component components/footer      --project=home
ng g component components/login       --project=home
ng g component components/callback    --project=home
ng g component containers/homeLayout  --project=home
ng g component containers/landing     --project=home
ng g component containers/blog        --project=home
ng g component containers/about       --project=home

# generate containers, components for `dashboard` Module
ng g component components/rainbow         --project=dashboard
ng g component components/OidcProfile     --project=dashboard
ng g component components/header          --project=dashboard
ng g component components/footer          --project=dashboard
ng g component containers/dashboardLayout --project=dashboard
ng g component containers/overview        --project=dashboard
ng g component containers/profile         --project=dashboard
ng g component containers/settings        --project=dashboard

# generate containers, components for `widgets` Module
ng g component containers/wizdash --project=widgets -d

# generate containers, components for `accounts` Module
ng g component  containers/AccountsGrid     --project=accounts -d
ng g component  containers/AccountsTable    --project=accounts -d
ng g component  components/AccountDetail    --project=accounts  -d
ng g component  components/AccountEdit      --project=accounts  -d
ng g class      models/account              --project=accounts --type=model -d
ng g service    services/account            --project=accounts  -d


# generate containers, components for `experiments` Module
ng g component containers/animations            --project=experiments -d
ng g component components/hammerCard            --project=experiments -d
ng g directive components/Hammertime/Hammertime --project=experiments -d
ng g component containers/ContextMenu           --project=experiments -d
ng g component containers/FileUpload            --project=experiments -d
ng g component containers/virtualScroll         --project=experiments -d
ng g component containers/StickyTable           --project=experiments -d
ng g component containers/clapButton            --project=experiments -s  -t --skip-tests  -d
ng g component containers/knobDemo              --project=experiments -d
ng g component containers/ledDemo               --project=experiments -d
ng g component containers/ImageComp             --project=experiments -d
ng g component containers/layout                --project=experiments -d
ng g component containers/dashing               --project=experiments -d
ng g component components/card                  --project=experiments -d
ng g component containers/viewport              --project=experiments --skip-tests -d

# generate components for `ImageComparison` Module
ng g lib ImageComparison --tags=scope:shared --spec=false --publishable=true --defaults -d
ng g component ImageComparison --project=image-comparison --export --flat -d


# generate containers, components for `admin` Module
ng g component components/header              --project=admin -d
ng g component components/footer              --project=admin -d
ng g component containers/overview            --project=admin -d
ng g component containers/adminLayout         --project=admin -d

ng g component containers/notifications       --project=admin -d
ng g component components/notificationDetail  --project=admin  -d
ng g component components/notificationEdit    --project=admin  -d
ng g service   services/notification          --project=admin  -d

ng g component containers/subscriptions       --project=admin -d
ng g component components/subscriptionDetail  --project=admin  -d
ng g class     models/subscription            --project=admin --type=model -d
ng g service   services/subscription          --project=admin  -d
```

### Workspace Schematics

```bash
# generate workspace-schematic `store`
ng g workspace-schematic store
# run workspace-schematic `store`
# *** always delete ./dist folder when you change schematic implementation ***
yarn workspace-schematic store models/sumoDemo -- --project=accounts  -d
# build workspace tools
yarn workspace @ngx-starter-kit/tools build
```
