export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Metro 2033',
            author: 'Dmitriy Gluhovskiy',
            price: 3.36,
            category: 'fantasy',
            img: 'https://images2.medimops.eu/product/7a56c9/M03453529685-source.jpg'    
        },
        {
            id: 2,
            title: 'Metro 2034',
            author: 'Dmitriy Gluhovskiy',
            price: 3.99,
            category: 'post-apocalyptic',
            img: 'https://images2.medimops.eu/product/230384/M03453316312-source.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if( Math.random() > 0.75 ) {
                //     reject(new Error('Something bad!!!'));
                // }else{
                //     resolve(this.data);
                // }
                resolve(this.data);
            }, 700);
        });
    }

}