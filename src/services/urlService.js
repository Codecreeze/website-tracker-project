const LS = window.localStorage
const LS_KEY = "URLS_LIST"
const API_URL = `http://localhost:4193`;

const URLServices = {

    //Helpers
    getFromLS: () => {
        let data = LS.getItem(LS_KEY) || '[]'
        return JSON.parse(data)
    },

    writeToLS: (json) => {
        LS.setItem(LS_KEY, JSON.stringify(json))
        return true
    },
    

    //Logical methods
    addURL: (url) => {
        return new Promise( async(resolve, reject) => {

        //Get the current list 
        let storedURLs = URLServices.getFromLS()
        let test = storedURLs.filter(item => item.url == url)
        if(test.length != 0){
            reject(`Error in inserting! ${url} already exists`)
        }

        try{
        let resp = await fetch(`${API_URL}/siteInfo?site=${url}`)
        resp = await resp.json()
        let tempPayLoad = { url, title:resp.title, lastChecked: new Date(), status: "ACTIVE"}
        storedURLs.push(tempPayLoad)
        URLServices.writeToLS(storedURLs)
        resolve(resp)

        }catch(e){
            reject(`Unreachable website URL`)   
        }
        })
    },

    getStatus: (url) => {
        return new Promise( async(resolve, reject) => {

            //Get the current list 
            let storedURLs = [...URLServices.getFromLS()]
            for(var i=0; i < storedURLs.length; i++){
                if(storedURLs[i].url == url){
                    
                    try{
                        let resp = await fetch(`${API_URL}/siteInfo?site=${url}`)
                        resp = await resp.json()
                        storedURLs[i].status = "ACTIVE"
                        storedURLs[i].lastChecked = new Date()
                    }catch(e){
                        storedURLs[i].status = "ERROR"
                    }
                URLServices.writeToLS(storedURLs)
                resolve(true)
                return false
                }
            }
            reject('URL Doesnot exist with us')
            })
    },

    listSavedURLs: () => console.log("GET URL SERVICE"),

    getWebsiteStatus: (url) => console.log("GET URL STATUS SERVICE"),

   cleanAll: () => LS.removeItem(LS_KEY),

}

export default URLServices