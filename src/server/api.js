import axios from 'axios';

export async function makeGetAPICall(options) 
{
    return await axios.get(options.url);
}
