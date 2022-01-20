# Code Quality

1. Linting
1. Testing
1. Code Coverage

#### Analyze

> Analyzing bundle size

```bash
npm bundle-report
```

#### Publish Code Coverage

```bash
export CODECOV_TOKEN="my token"
npm codecov -t $CODECOV_TOKEN \
--branch=develop --file=coverage/libs/ngx-utils/coverage-final.json
```

