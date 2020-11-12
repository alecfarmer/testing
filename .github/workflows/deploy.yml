name: Deploy

on:
  push:
    branches: [ main ]

defaults:
  run:
    working-directory: stylemail

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-node@master 
        with:
          node-version: 12  
      - run: npm ci
      - run: npm run build
      - uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
          FIREBASE_PROJECT: fir-test-400dc
