module.exports = colorSchemeChange

function colorSchemeChange (onChange) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')

  handleChange()

  if ('addEventListener' in media) {
    media.addEventListener('change', handleChange)
  } else if ('addListener' in media) {
    media.addListener(handleChange)
  }

  return remove

  function handleChange () {
    const scheme = media.matches
      ? 'dark'
      : 'light'
    onChange(scheme)
  }

  function remove () {
    if ('removeEventListener' in media) {
      media.removeEventListener('change', handleChange)
    } else if ('removeListener' in media) {
      media.removeListener(handleChange)
    }
    onChange = null
  }
}
