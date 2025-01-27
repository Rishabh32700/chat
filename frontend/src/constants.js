export let ENDPOINT = ""
if (process.env.NODE_ENV === 'development') {
    ENDPOINT = "http://localhost:5001"
}
else{
    ENDPOINT = "https://chat-lbbw.onrender.com"
}