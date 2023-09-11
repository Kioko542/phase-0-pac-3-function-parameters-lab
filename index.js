function introduction(name){
return `Hi, my name is ${name}.`
}
function  introductionWithLanguage(name, language){
    const message= `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message;
}
function  introductionWithLanguageOptional(name, language="javascript"){
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  