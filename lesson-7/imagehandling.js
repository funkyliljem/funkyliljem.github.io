//get all img s with data src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//IntersectionalObserver
const imgOptions = {
    threshold: '0',
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', 'image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//first check to see if the IO is supported
if('IntersectionObserver' in window){
    const imgObserver = new InstersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img)
    });
}
else{
    imagesToLoad.forEach((img)
    )
}
