module.exports = (pretty) => {
    const urlFriendly = pretty
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()
    return urlFriendly
}