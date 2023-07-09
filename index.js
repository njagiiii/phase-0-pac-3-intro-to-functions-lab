function shout(hello){
    return hello.toUpperCase();
}
function whisper(HELLO){
    return HELLO.toLowerCase();
}
function logShout(hello){
    console.log(hello.toUpperCase());
}
function logWhisper(HELLO){
    console.log(HELLO.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return  "I can't hear you!"
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}