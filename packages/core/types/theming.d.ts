// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 3.1

import * as React from 'react'

export interface ThemeProviderProps<Theme> {
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme)
  children?: React.ReactNode
}

export interface ThemeProvider<Theme extends {} = any> {
  (props: ThemeProviderProps<Theme>): React.ReactElement
}

export type useTheme<Theme extends {} = any> = <T extends Theme = Theme>() => T

export const ThemeProvider: ThemeProvider

export const useTheme: useTheme

export interface EmotionTheming<Theme> {
  ThemeProvider: ThemeProvider<Theme>
  useTheme: useTheme<Theme>
}
