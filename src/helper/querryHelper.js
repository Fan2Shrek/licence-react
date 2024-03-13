export const flatQuery = (query) => {
    return Object.entries(query).reduce((cur, [property, value]) => `${cur}&${property}=${value}` , '')
}
