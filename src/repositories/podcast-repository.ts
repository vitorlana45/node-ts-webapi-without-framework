import fileSystem from 'fs'; // FILE SISTEM  serve para ler arquivos 
import path from 'path'; // apontar o arquivo  
import { podcastModel } from '../models/podcast-model';


const pathData = path.join(__dirname, "../repositories/podcast.json");


export const repositoryPodcast = async (podcastName?: String): Promise<podcastModel[]> => { // passando o interrogação no parametro eu digo que o paramatro é opcional
    
    const language = 'utf-8'
    const rawData = fileSystem.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData); // lendo o texto e convertendo em json
    
    if(podcastName){
        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName === podcastName);
    }
    
    return jsonFile;
}