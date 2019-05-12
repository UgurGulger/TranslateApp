function Translate(word,language){
    this.apikey = "trnsl.1.1.20190425T075652Z.a0230c5def59b7b5.bfc629d07e4440b1b3839cc08c63cd4fd25351a0";
    this.word = word;
    this.language = language; 

// XHR object

this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    // Ajax
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {

        if(this.xhr.status === 200){
           
            const json =JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);
        }
        else{
            callback("Bir hata oluştu",null);
        }  

    }

    this.xhr.send();

}

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language= newLanguage;
}