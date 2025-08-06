import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ie.spsvprotraining.app',
  appName: 'SPSV Pro Training',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'android/app/keystore/spsv-pro-training.keystore',
      keystoreAlias: 'spsv-pro-training',
      keystoreAliasPassword: process.env.KEYSTORE_PASSWORD,
      keystorePassword: process.env.KEYSTORE_PASSWORD,
      releaseType: 'AAB'
    }
  }
};

export default config;