const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const get = (endpoint) => delay(1000).then(() => console.log(endpoint))

export default get
