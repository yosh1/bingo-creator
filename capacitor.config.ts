import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'bingo-creator',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
