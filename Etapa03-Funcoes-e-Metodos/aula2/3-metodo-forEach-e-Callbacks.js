// forEach e callbacks
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array);
};

socialNetworks.forEach(logArrayInfo);
