# Twibbonizze
```bash
> npm i twibbonizze --save
```
# Example

```js
> const {twisearch, Twibbonizze} = require('twibbonizze')


> twisearch('tadikamesra').then(async (x)=>{
    console.log(await x[0].create('image.jpg'))
})

https://twb-results.s3-ap-southeast-1.amazonaws.com/xxxx.jpg



> Twibbonizze('twibbonkbi').create('image.jpg').then(console.log)

https://twb-results.s3-ap-southeast-1.amazonaws.com/xxxx.jpg
```
# Preview

<img src="assets/res.jpgs">
