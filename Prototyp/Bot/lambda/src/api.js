import fetch from "node-fetch";

const access_token = "PhNcTP7GpCaPoXW2EqylcgbISnyT98YEMBAXNebJW3cFto9HlXBJgYye9zV9WYn7";
const url = "http://192.52.33.31:3000/api/profiles?access_token=";

export const getUserName = () => { 
    return new Promise(function(resolve, reject) {
        fetch(url.concat(access_token))
        .then( data => {
            console.log(data);
            var user = data.json();
            
            var username = user.firstname + " " + lastname;
            resolve(username);
        })
        .catch( error => {
            reject(error);
        });
    });  
}

export const getUserProfileName = () => { 
    return new Promise(function(resolve, reject) {
        fetch(url.concat(access_token))
        .then( data => {
            var user = data.json();
            var profile = user.profileName;
            resolve(profile);
        })
        .catch( error => {
            reject(error);
        });
    });  
}

export const getUserProfileLocation = () => { 
    return new Promise(function(resolve, reject) {
        fetch(url.concat(access_token))
        .then( data => {
            var user = data.json();
            var location = user.location;
            resolve(location);
        })
        .catch( error => {
            reject(error);
        });
    });  
}

export const getDocs = () => {
    /* return new Promise(function(resolve, reject) {
        fetch(url.concat(access_token))
        .then( data => {
            var user = data.json();
            var profile = user.profileName;
            resolve(profile);
        })
        .catch( error => {
            reject(error);
        });
    });  */

    return "In Furtwangen you can find doc furti and doc else!";
}