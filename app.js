const request = require('superagent');
var argv = require('minimist')(process.argv.slice(2));

if (!argv.webapi || !argv.appid) {
    console.log('usage: \n' +
                 '--webapi="YOUR STEAM WEB API TOKEN" \n' +
                 '--appid=APPID of your game')
}

request
    .post('https://api.steampowered.com/IGameServersService/CreateAccount/v1/?key=' + argv.webapi + '&appid=' + argv.appid + "&memo=" + Date.now().toString())
    .set('accept', 'json')
    .end((err, res) => {
         console.log(res.body.response.login_token);
});