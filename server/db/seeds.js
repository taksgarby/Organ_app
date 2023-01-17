use organ_app;
db.dropDatabase();

db.bodyparts.insertMany(
    [
        {
            name: "Brain",
            diagram: "https://bam.files.bbci.co.uk/bam/live/content/z38cmsg/large",
            icon: 'https://cdn-icons-png.flaticon.com/512/4556/4556999.png',
            video: "https://www.youtube.com/embed/u2IkcmDArS4",
            facts: [
                "The brain controls complex behaviour. It is made of billions of connected neurones and has different regions that carry out different functions.",
                "The Cerebrum is one of the four main areas of the brain. It has an outer layer called cerebral cortex which is split into two sections. This part controls intelligience, personality, concious thought, language and verbal memory.",
                "Cerebellum controls balance, co-ordination of movement and muscular activity.",
                "Medulla controls unconscious activities such as heart rate and breathing rate",
                "Hypothalamus is the regulating centre for temperature and water balance for the body"
            ],
            quiz: [
                {
                    question: "The brain is made up of 4 main areas",
                    isAnswered: false,
                    answer: true
                },
                {
                    question: "The cerebrum controls the bodies temperature",
                    isAnswered: false,
                    answer: false 
                    },
                    {
                    question: "The Cerebellum controls balance and muscular activity",
                    isAnswered: false,
                    answer: true
                },
                {
                    question: "The hypothalamus is the regulating centre for the body",
                    isAnswered: false,
                    answer: true
                }
            ],
            marks: 0,
        },
        {
            name: "Lungs",
            diagram: "https://ichef.bbci.co.uk/images/ic/448xn/p08vwby2.png",
            icon: "https://cdn-icons-png.flaticon.com/512/2492/2492923.png",
            video: "https://www.youtube.com/embed/-6cwW1TM6po",
            facts: [
                "When you breathe in, air travels down into your alveoli.",
                "Lungs release waste gases back into the environment - called expiration.",
                "Carbon dioxide is produced as a waste product of respiration",
                "It travels all around your body in your bloodstream and is delivered to every cell where it is used for respiration to provide you with energy.",
                "An average person breathes in around 11,000 liters of air every day."
            ],
            quiz: [
                {
                    question: "The air you inhale travels down into alveoli.",
                    isAnswered: false,
                    answer: true
                },
                {
                    question: "An average person breathes in around 100 liters of air per day.",
                    isAnswered: false,
                    answer: false
                },
                {
                    question: "Expiration is the act of breathing in oxigen.",
                    isAnswered: false,
                    answer: false
                },
                {
                    question: "Carbon dioxide is produced as a result of respiration.",
                    isAnswered: false,
                    answer: true
                }
            ],
            marks: 0,
        },

        {

            name: "Heart",
            diagram: "https://pmgbiology.files.wordpress.com/2015/02/heart.png",
            icon: "https://cdn-icons-png.flaticon.com/512/7292/7292483.png",
            video: "https://www.youtube.com/embed/pjOxpLEynIE",
            facts: [
                "A fist-sized organ that pumps blood throughout the body",
                "The primary organ of the circulatory system",
                "Contains four main sections, called chambers, made of muscles",
                "The muscles are powered by electrical impulses",
                "The brain and nervous system direct the heart's function"
            ],

            quiz: [
                {

                question: "The heart has three chambers.",
                isAnswered: false,
                answer: false
                },
                {
                question: "The heart is responsible for pumping blood throughout the body.",
                isAnswered: false,
                answer: true
                },
                {
                question: "The heart is about the size of a fist.",
                isAnswered: false,
                answer: true,
                },
                {
                question: "The nervous system directs the heart's function.",
                isAnswered: false,
                answer: true
                }
                
            ],
            marks: 0,
        }

    ])

    db.contributers.insertMany([
        {
            name: "Sara Qureshi",
            Hometown: "Redditch, England",
            FavouriteFood: "Too many to choose from!.",
            MoreInfo: "https://sreadytocode.github.io/portfolio/" 
        },
        {            
            name: "Dahlia Valle Peterson",
            Hometown: "California, USA",
            FavouriteFood: "Thai cuisine",
            MoreInfo: "https://www.linkedin.com/in/dahliavp/" 
        },
        {
            name: "Takako Onozuka",
            Hometown: "Niigata, Japan",
            FavouriteFood: "Korean cuisine",
            MoreInfo: "https://www.linkedin.com/in/takako-onozuka-566b9b257/" 

        }
    ]
    )

