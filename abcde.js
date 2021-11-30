var unirest = require('unirest');
var req = unirest('POST', 'https://notify-api.line.me/api/notify')
  .headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer'
  })
  .send('message=aaaaaaaaaaaaaaaa')
  .send('imageFullsize=https://itp1.itopfile.com/ImageServer/z_itp_2048kddz/0/0/1z-z690869236132.jpg')
  .send('imageThumbnail=https://itp1.itopfile.com/ImageServer/z_itp_2048kddz/0/0/8z-z270690830858.png')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
