# Deploy

> deploy this app with mock config to gh-pages

```bash
# ng deploy --dry-run
ng deploy --base-href=/ngx-starter-kit/ --configuration=mock # to gh-pages
ng deploy --buildTarget=project:browser:staging # to firebase
# deploy all affected apps
nx affected --target deploy
# deploy `dist/apps/webapp` manually to firebase
firebase deploy
```

### Continuous Delivery

> You may need to set an environment variable called GH_TOKEN in our CI/CD environment

```bash
ng deploy --base-href=/ngx-starter-kit/ --configuration=mock \
--repo=https://github.com/<username>/<repositoryname>.git --name="Your Git Username" --email=your.mail@example.org
```


### Build Library

```bash
ng build socketio-plugin
```

#### Publish Library

```bash
# Check who-am-i
npm whoami
ng deploy socketio-plugin
```
