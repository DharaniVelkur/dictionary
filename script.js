let word=prompt("enter a word to search(EX:search,pronunciation,hello,word,work....etc.)")
let API=fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
API.then((response)=>{return response.json()}).
then((data)=>{
    console.log(data)
    // if(data[0].word==word){
let datas=[data[0].word,data[0].meanings[0].partOfSpeech,data[0].phonetics[0].audio,
data[0].meanings[0].definitions[0].definition,data[0].meanings[0].definitions[0].example,
data[0].meanings[0].definitions[0].synonyms,data[0].meanings[0].definitions[0].antonyms,data[0].sourceUrls[0]];
call(datas);
    // }
    // else{
    //    let ans=[data.title,data.message,data.resolution];
    //    console.log(ans)
    //    call1(ans);
    // }
})
call=([word,partsofspeech,sound,definition,example,synonyms,antonyms,refurl])=>{
document.body.innerHTML=`<div class="card">

<div class="card-body">
  <h5 class="card-title">Word : ${word}</h5>
  <p class="card-text">Definition : ${definition}</p>
  <p class="card-text">Example : ${example}</p>
  <p class="card-text">PartsOfSpeech : ${partsofspeech}</p>
  <p class="card-text"><a href=${sound} target="_blank">click here to listen the pronunciation</a></p>

  <p>Synonyms : ${synonyms}</p>
  <p>Antonyms : ${antonyms}</p>
  <a href=${refurl} target="_blank" class="btn btn-primary">Visit her to learn More</a>

</div>
</div>`
}
// call1=([ttitl,msg,resolution])=>{
//     document.body.innerHTML=`div class="card">
//     <div class="card-body">
//       <h5 class="card-title">${ttitl}</h5>
//       <p class="card-text">Message: ${msg}</p>
//       <p class="card-text">Resolution : ${resolution}</p>
//     </div>
//     </div>`
// }