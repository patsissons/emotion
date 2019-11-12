import { ThemeProvider, useTheme, EmotionTheming } from '@emotion/core'
import * as React from 'react'

interface Theme {
  primary: string
  secondary: string
}
declare const theme: Theme

{
  const theme: Theme = useTheme()

  const themeFail: Theme = useTheme<number>() // $ExpectError
}

const {
  ThemeProvider: TypedThemeProvider
  // TODO: write some tests around useTypedTheme
} = { ThemeProvider, useTheme } as EmotionTheming<Theme>
;<TypedThemeProvider theme={theme} />
// $ExpectError
;<TypedThemeProvider theme={{ primary: 5 }} />

// Can use ThemeProvider
;<ThemeProvider theme={{ prop: 'val' }} />
;<TypedThemeProvider theme={{ primary: '', secondary: '' }} />
// $ExpectError
;<TypedThemeProvider theme={{ nope: 'string' }} />
