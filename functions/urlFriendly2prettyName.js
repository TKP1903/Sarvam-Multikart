module.exports = (urlFriendly) => {
    const pretty = urlFriendly
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
    return pretty
}