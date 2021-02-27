import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    verbose: true,
  };
};
