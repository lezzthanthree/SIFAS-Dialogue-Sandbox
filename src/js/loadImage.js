const loadImage = async (src, lastDone) => {
    const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => {
            alert(
                `Something went wrong. It may be a timeout or the file does not exist...\n\nHere's the log: \nLast Done: ${lastDone} \nFile source: ${src}`
            );
            reject(new Error(`Failed to load image: ${src}`));
        };
    });
    console.log(promise);
    return promise;
};

export default loadImage;
