export let ENDPOINT = ""
if (process.env.NODE_ENV === 'development') {
    ENDPOINT = "http://localhost:5001"
}