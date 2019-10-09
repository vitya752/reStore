export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Metro 2033',
            author: 'Dmitriy Gluhovskiy',
            price: 3.36,
            img: 'https://d1b14unh5d6w7g.cloudfront.net/3453529685.01.S001.LXXXXXXX.jpg?Expires=1570540167&Signature=Hc4gX398+fIhXbJWHETc3qw5qh0ND/f+xeoedLHEong2wsAHN8vWv01W3NVJVtKxQB38FrM084mOe5lC4MKmGgoiYpgL+/sr9EdwmRNLJ3t4/efkjR1lKmxVQMr6Cic9eKMRXBLFm1hN7VcQeY5wKaClLuRU9tqyqy+ZkN78GXQ=&Key-Pair-Id=APKAIUO27P366FGALUMQ'
        },
        {
            id: 2,
            title: 'Metro 2034',
            author: 'Dmitriy Gluhovskiy',
            price: 3.99,
            img: 'https://d1b14unh5d6w7g.cloudfront.net/3453316312.01.S001.LXXXXXXX.jpg?Expires=1570540260&Signature=DftYhP8Nx1E3MA7myP5hGr6+OaRDIO8tKhEYoBoES+AAvt+jFwznoABPV8M1j6YmerVGESA19inWhpPqcQqHY5pwrEarb1kzsD0uKLDa4rU5FN4xX158/eIDmJ9nUL/eMAw5cZFA/HooACnvdbeGZpJQeyWjqLp2MbwplDvkhAw=&Key-Pair-Id=APKAIUO27P366FGALUMQ'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( Math.random() > 0.75 ) {
                    reject(new Error('Something bad!!!'));
                }else{
                    resolve(this.data);
                }
            }, 700);
        });
    }

}