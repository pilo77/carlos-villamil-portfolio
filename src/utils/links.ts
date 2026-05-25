export interface SafeAnchorProps {
  rel?: 'noopener noreferrer'
  target?: '_blank'
}

export function isExternalUrl(href: string) {
  return href.startsWith('https://')
}

export function getSafeAnchorProps(href: string, newTab = false): SafeAnchorProps {
  if (!newTab && !isExternalUrl(href)) {
    return {}
  }

  return {
    rel: 'noopener noreferrer',
    target: '_blank',
  }
}
