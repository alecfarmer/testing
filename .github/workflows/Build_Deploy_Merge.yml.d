name: Build & Deploy on Merge

on:
  push:
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
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-node@master 
        with:
          node-version: 12  
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_FIR_TEST_400DC }}'
          channelId: live
          projectId: fir-test-400dc
          entryPoint: "./stylemail" 
        env:
          FIREBASE_CLI_PREVIEWS: hostingchannels