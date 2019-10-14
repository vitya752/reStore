export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Metro 2033',
            author: 'Dmitriy Gluhovskiy',
            price: 6.36,
            category: 'post-apocalyptic',
            description: `The year is 2033. The world has been reduced to rubble. 
                Humanity is nearly extinct. The half-destroyed cities have become 
                uninhabitable through radiation. Beyond their boundaries, they say, 
                lie endless burned-out deserts and the remains of splintered forests. 
                Survivors still remember the past greatness of humankind. But the last 
                remains of civilisation have already become a distant memory, the stuff 
                of myth and legend. More than 20 years have passed since the last plane 
                took off from the earth. Rusted railways lead into emptiness. The ether 
                is void and the airwaves echo to a soulless howling where previously the 
                frequencies were full of news from Tokyo, New York, Buenos Aires. Man has 
                handed over stewardship of the earth to new life-forms. Mutated by radiation, 
                they are better adapted to the new world. Man's time is over. A few score 
                thousand survivors live on, not knowing whether they are the only ones 
                left on earth. They live in the Moscow Metro - the biggest air-raid shelter 
                ever built. It is humanity's last refuge. Stations have become 
                mini-statelets, their people uniting around ideas, religions,
                water-filters - or the simple need to repulse an enemy incursion. It 
                is a world without a tomorrow, with no room for dreams, plans, hopes. 
                Feelings have given way to instinct - the most important of which is 
                survival. Survival at any price. VDNKh is the northernmost inhabited 
                station on its line. It was one of the Metro's best stations and still 
                remains secure. But now a new and terrible threat has appeared. Artyom, 
                a young man living in VDNKh, is given the task of penetrating to the 
                heart of the Metro, to the legendary Polis, to alert everyone to the 
                awful danger and to get help. He holds the future of his native station 
                in his hands, the whole Metro - and maybe the whole of humanity. Read 
                by Rupert Degas (p) 2012 Orion Publishing Group`,
            img: 'https://images2.medimops.eu/product/7a56c9/M03453529685-source.jpg'    
        },
        {
            id: 2,
            title: 'Metro 2034',
            author: 'Dmitriy Gluhovskiy',
            price: 7.99,
            category: 'post-apocalyptic',
            description: `The year is 2033. The world has been reduced to rubble. 
                Humanity is nearly extinct. The half-destroyed cities have become 
                uninhabitable through radiation. Beyond their boundaries, they say, 
                lie endless burned-out deserts and the remains of splintered forests. 
                Survivors still remember the past greatness of humankind. But the last 
                remains of civilisation have already become a distant memory, the stuff 
                of myth and legend. More than 20 years have passed since the last plane 
                took off from the earth. Rusted railways lead into emptiness. The ether 
                is void and the airwaves echo to a soulless howling where previously the 
                frequencies were full of news from Tokyo, New York, Buenos Aires. Man has 
                handed over stewardship of the earth to new life-forms. Mutated by radiation, 
                they are better adapted to the new world. Man's time is over. A few score 
                thousand survivors live on, not knowing whether they are the only ones 
                left on earth. They live in the Moscow Metro - the biggest air-raid shelter 
                ever built. It is humanity's last refuge. Stations have become 
                mini-statelets, their people uniting around ideas, religions,
                water-filters - or the simple need to repulse an enemy incursion. It 
                is a world without a tomorrow, with no room for dreams, plans, hopes. 
                Feelings have given way to instinct - the most important of which is 
                survival. Survival at any price. VDNKh is the northernmost inhabited 
                station on its line. It was one of the Metro's best stations and still 
                remains secure. But now a new and terrible threat has appeared. Artyom, 
                a young man living in VDNKh, is given the task of penetrating to the 
                heart of the Metro, to the legendary Polis, to alert everyone to the 
                awful danger and to get help. He holds the future of his native station 
                in his hands, the whole Metro - and maybe the whole of humanity. Read 
                by Rupert Degas (p) 2012 Orion Publishing Group`,
            img: 'https://images2.medimops.eu/product/230384/M03453316312-source.jpg'
        },
        {
            id: 3,
            title: 'Jurassic Park',
            author: 'Michael Crichton',
            price: 8.22,
            category: 'fantasy',
            description: `The year is 2033. The world has been reduced to rubble. 
                Humanity is nearly extinct. The half-destroyed cities have become 
                uninhabitable through radiation. Beyond their boundaries, they say, 
                lie endless burned-out deserts and the remains of splintered forests. 
                Survivors still remember the past greatness of humankind. But the last 
                remains of civilisation have already become a distant memory, the stuff 
                of myth and legend. `,
            img: 'https://images2.medimops.eu/product/62a905/M0345381150X-source.jpg'
        },
        {
            id: 5,
            title: 'Asylum',
            author: 'Madeleine Roux',
            price: 4.87,
            category: 'horror',
            description: `The year is 2033. The world has been reduced to rubble. 
                Humanity is nearly extinct. The half-destroyed cities have become 
                uninhabitable through radiation. Beyond their boundaries, they say, 
                lie endless burned-out deserts and the remains of splintered forests. 
                Survivors still remember the past greatness of humankind. But the last 
                remains of civilisation have already become a distant memory, the stuff 
                of myth and legend. `,
            img: 'https://images2.medimops.eu/product/d52d0a/M00062220969-source.jpg'
        },
        {
            id: 6,
            title: 'Metro 2035',
            author: 'Dmitriy Gluhovskiy',
            price: 9.99,
            category: 'post-apocalyptic',
            description: `The year is 2033. The world has been reduced to rubble. 
                Humanity is nearly extinct. The half-destroyed cities have become 
                uninhabitable through radiation. Beyond their boundaries, they say, 
                lie endless burned-out deserts and the remains of splintered forests. 
                Survivors still remember the past greatness of humankind. But the last 
                remains of civilisation have already become a distant memory, the stuff 
                of myth and legend. `,
            img: 'https://images2.medimops.eu/product/eee1ed/M03453319028-source.jpg'
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

    getBook = (bookId) => {
        return new Promise((resolve) => {
            resolve(this.data.find(({id}) => +id === +bookId));
        }); 
    }

}