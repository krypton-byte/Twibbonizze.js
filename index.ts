import axios from 'axios';
import * as fs from 'fs';

interface Twibbon {
    creator: String,
    id:any,
    name: String
  }

interface TwibbonResponse {
    status: boolean,
    url?: String
}
  class Twibbonizze {
    /**
    @param name : Twibbon name
    */
    name: String;
    constructor(name: String) {
        this.name = name;
    }
    async create(Image: fs.PathLike | Buffer):Promise<boolean|String> {
        /** 
         Create Twibon
         @param Image: Image Path | Buffer
        */
        var buffer: Buffer;
        if(Image instanceof String || !(Image instanceof Buffer)){
            buffer = fs.readFileSync(Image);
        }else if(Image instanceof Buffer){
            buffer = Image;
        }
        const stat:TwibbonResponse = (await axios({
            url:'https://bytescrapper.herokuapp.com/create',
            method:'post',
            data: `name=${this.name}&image=${encodeURIComponent(buffer.toString('base64'))}`,
            headers:{},
    
        })).data;
        return stat.url || stat.status
    };
};

async function twisearch(name: string):Promise<Array<Twibbonizze>> {
    /** 
        Search Twibbon by name
        @param name
    */
    const result = (await axios.get(`https://bytescrapper.herokuapp.com/search?q=${encodeURIComponent(name)}`)).data;
    return result.map((x:Twibbon)=>new Twibbonizze(x.name));
};
module.exports = {twisearch, Twibbonizze};
export default Twibbonizze;
