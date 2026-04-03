export function publicAsset(relativePath) {
  const baseRaw = import.meta.env.BASE_URL || '/'
  const base = baseRaw.endsWith('/') ? baseRaw : `${baseRaw}/`
  const trimmed = relativePath.replace(/^\//, '')
  const joined = trimmed
    .split('/')
    .map((seg) => encodeURIComponent(seg))
    .join('/')
  return `${base}${joined}`
}
