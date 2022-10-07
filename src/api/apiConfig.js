const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c644860ddb8e86b3f84218e88f0689cc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;