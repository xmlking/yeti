# Code Quality

1. Linting
1. Testing
1. Code Coverage

#### Analyze

> Analyzing bundle size

```bash
yarn bundle-report
```

#### Publish Code Coverage

```bash
export CODECOV_TOKEN="my token"
yarn codecov -t $CODECOV_TOKEN \
--branch=develop --file=coverage/libs/ngx-utils/coverage-final.json
```

