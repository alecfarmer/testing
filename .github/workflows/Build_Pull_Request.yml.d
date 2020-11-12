name: Build on Pull Request

on:
  pull_request:
    branches: [ main ]

defaults:
  run:
    working-directory: stylemail

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci
      - run: npm test
      - run: npm run build