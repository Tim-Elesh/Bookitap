export interface Book {
    id: string;
    title: string;
    author: string;
    coverImage: string;
    pdf: string;
    epub: string;
}

const books: Book[] = [
    {
        id: '1',
        title: 'Қарағанды',
        author: 'Ғабиден Мұстафин',
        coverImage: '/images/10_1_Gabiden.jpg',
        pdf: '/@pdfs/10_1_Gabiden.pdf',
        epub: '/@epubs/10_1_Gabiden_Mustafin_Karagandi.epub'
    },
    {
        id: '2',
        title: 'Әпке',
        author: 'Дулат Исабеков',
        coverImage: '/images/10_2_Dulat.jpg',
        pdf: '/@pdfs/10_2_Dulat.pdf',
        epub: '/@epubs/10_2_Dulat_Isabekov_Apke_dramasi.epub'
    },
    {
        id: '3',
        title: 'Қан мен тер',
        author: 'Әбдіжәміл Нұрпейіс',
        coverImage: '/images/10_3_Abdizamil.jpg',
        pdf: '/@pdfs/10_3_Abdizamil.pdf',
        epub: '/@epubs/10_3_Abdizamil_Nurpeisov_Kan_men_ter.epub'
    },
    {
        id: '4',
        title: 'Өркениеттің адасуы',
        author: 'Мұхтар Шаханов',
        coverImage: '/images/10_4_Muhtar.jpg',
        pdf: '/@pdfs/10_4_Muhtar.pdf',
        epub: '/@epubs/'
    },
    {
        id: '5',
        title: 'Он алты жасар чемпион',
        author: 'Бердибек Сокпакбаев',
        coverImage: '/images/10_5_Berdibek.jpg',
        pdf: '/@pdfs/10_5_Berdibek.pdf',
        epub: '/@epubs/'
    },
    {
        id: '6',
        title: 'Ертең біз жол жүреміз',
        author: 'Мукагали Макатаев',
        coverImage: '/images/9_1_Mukagali.jpg',
        pdf: '/@pdfs/10_6_SixthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '7',
        title: 'Көшпенділер',
        author: 'Ильяс Есенберлин',
        coverImage: '/images/9_2_Ilias.jpg',
        pdf: '/@pdfs/10_7_SeventhBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '8',
        title: 'Азат елдің ар-намысы Ата Заң!',
        author: 'Сейтак Айбатыр',
        coverImage: '/images/9_3_Aibatir.jpg',
        pdf: '/@pdfs/10_8_EighthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '9',
        title: 'ЖАС ДӘУРЕН',
        author: 'Қасым Аманжолов',
        coverImage: '/images/9_4_Kasim.jpg',
        pdf: '/@pdfs/10_9_NinthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '10',
        title: 'Адамның кейбір кездері',
        author: 'Абай Кунанбаев',
        coverImage: '/images/9_7_Abai.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '11',
        title: 'Уақыт қайтарымы',
        author: 'Сахиев Жүніс',
        coverImage: '/images/9_5_Sachiev.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '12',
        title: 'Жетінші толқын',
        author: 'Медеу Сәрсеке',
        coverImage: '/images/9_6_Mediu.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '13',
        title: 'Мен роботпын',
        author: 'Айзек Азимов',
        coverImage: '/images/9_8_Aizek.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '14',
        title: 'Жетісу суреттері',
        author: 'Ильяс Жансугиров',
        coverImage: '/images/9_9_Ilias_Zhansugirov.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '15',
        title: 'Қаздар қайтып барады',
        author: 'Кабдеш Жумадилов',
        coverImage: '/images/11_1_Қабдеш_Zumadilov.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '16',
        title: 'Бәйтерек',
        author: 'Несипбек Айтулы',
        coverImage: '/images/11_2_Несіпбек_Aituli.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '17',
        title: 'Көкшетау',
        author: 'Секен Сейфулин',
        coverImage: '/images/11_3_Saken_Seifulin.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    {
        id: '18',
        title: 'Қорғансыздың күні',
        author: 'Мухтар Ауезов',
        coverImage: '/images/11_4_Muhtar_Auezov.jpg',
        pdf: '/@pdfs/10_10_TenthBook.pdf',
        epub: '/@epubs/'
    },
    // Add more books as needed
];

export default books;