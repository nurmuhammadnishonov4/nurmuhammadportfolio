//bot token
var telegram_bot_id = "5992210145:AAEf1gJY6Z4GoXherwYz3q_VM64cccvBRLc"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 969393857; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + number + "\nNomer" + subject + "\nSubject" + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};