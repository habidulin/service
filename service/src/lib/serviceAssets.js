const serviceIcons = import.meta.glob('../assets/details/*/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

export function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]+/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function directionSlug(category) {
  if (!category) return null
  return category.trim().toLowerCase()
}

export function resolveServiceIcon({ category, name }) {
  const serviceSlug = slugify(name)
  const dir = directionSlug(category)

  if (dir) {
    const byDirection = Object.entries(serviceIcons).find(([path]) =>
      path.startsWith(`../assets/details/${dir}/${serviceSlug}.`),
    )
    if (byDirection?.[1]) return byDirection[1]
  }

  const common = Object.entries(serviceIcons).find(([path]) =>
    path.startsWith(`../assets/details/common/${serviceSlug}.`),
  )
  return common?.[1]
}
