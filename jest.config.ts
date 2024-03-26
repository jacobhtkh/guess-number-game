import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!swiper|ssr-window).*/'],
};

export default config;
