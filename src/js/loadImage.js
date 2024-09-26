const loadImage = async (src) => {
    const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => {
            alert(
                `Something went wrong. It may be a timeout or the file does not exist...\nHere's the src image: ${src}`
            );
            reject(new Error(`Failed to load image: ${src}`));
        };
    });
    console.log(promise);
    return promise;
};

export default loadImage;
