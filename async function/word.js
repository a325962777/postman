
async function word() 
{
    try {
        const fsPromises= require('fs').promises;
        const response=await fsPromises.readFile('./words.json');
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const words= await JSON.parse(response);
        descriptionOfWords(words);

    } catch (error) {
        console.error(`error: ${error}`);
    }

}
word();


async function descriptionOfWords(words){
    try{
        let results = await Promise.all(words.map(word => fetch('https://api.dictionaryapi.dev/api/v2/entries/en/${word}')));
        if(!results.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }   
        let informationOfWords = await Promise.all(results.map(resultWord => resultWord.json()));
        informationOfWords.forEach(informationOfWords=>{
            let definitionWords = informationOfWords[0].definitionWords[0].defination;
            console.log(`the defination of ${informationOfWord[0].word}  :  ${definitionWord}`);
        
        })

    }catch (error){
        console.log(`${error}`);
    }
}
