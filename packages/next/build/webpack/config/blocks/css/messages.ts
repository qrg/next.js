import chalk from 'chalk'

export function getGlobalImportError(file: string | null) {
  return `Global CSS ${chalk.bold(
    'cannot'
  )} be imported from files other than your ${chalk.bold(
    'Custom <App>'
  )}. Please move all global CSS imports to ${chalk.cyan(
    file ? file : 'pages/_app.js'
  )}.\nRead more: https://err.sh/next.js/global-css`
}
