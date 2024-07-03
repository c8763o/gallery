$('#container').imagesLoaded()
    .always(function (instance) {
        console.log('all images loaded');
    })
    .done(function (instance) {
        console.log('all images successfully loaded');
    })
    .fail(function () {
        console.log('all images loaded, at least one is broken');
    })
    .progress(function (instance, image) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log('image is ' + result + ' for ' + image.img.src);
    });

    window.onload=function () {
        var url = document.location.href;
        if(url.indexOf("refreshed=")==-1){
            var time = new Date();
            window.location.href=url+"?refreshed="+time.getTime();
        }
    }


// for (var i = 1; i > 0; i--) {
//     console.log(i)
//     setTimeout(function () {
//         location.reload();
//     }, 3000);
// }