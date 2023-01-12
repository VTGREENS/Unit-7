let APIURL = ''

let hostName = window.location.hostname

if(hostName === 'localhost'|| hostName === "127.0.0.1"){
    APIURL = "http://localhost:4000"

}else{
    APIURL = "https://moviedb-lj.onrender.com"
}

export default APIURL
