export const randomId = () => `_${Math.random().toString(36).substr(2, 9)}`

export const blobToFile = (theBlob, fileName) => ({
  ...theBlob,
  lastModifiedDate: new Date(),
  name: fileName,
})

export function sortByDate(a, b) {
  return new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds)
}

export const filterString = (value, filter) => {
  const valueToLower = value.toLowerCase()
  const filterToLower = filter.toLowerCase()
  return valueToLower.indexOf(filterToLower) !== -1
}
