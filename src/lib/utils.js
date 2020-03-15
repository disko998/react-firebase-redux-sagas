export const randomId = () =>
    '_' +
    Math.random()
        .toString(36)
        .substr(2, 9)

export function blobToFile(theBlob, fileName) {
    console.log(theBlob)
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date()
    theBlob.name = fileName
    return theBlob
}

export function sortByDate(a, b) {
    return new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds)
}

export const filterString = (value, filter) => {
    value = value.toLowerCase()
    filter = filter.toLowerCase()
    return value.indexOf(filter) !== -1
}
