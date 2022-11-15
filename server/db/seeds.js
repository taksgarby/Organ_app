use organ_app;
db.dropDatabase();

db.bodyparts.insertMany(
    [
            {
                name: "Brain",
                diagram: "https://bam.files.bbci.co.uk/bam/live/content/z38cmsg/large",
                facts: [
                    "The brain controls complex behaviour. It is made of billions of connected neurones and has different regions that carry out different functions.",
                    "The Cerebrum is one of the four main areas of the brain. It has an outer layer called cerebral cortex which is split into two sections. This part controls intelligience, personality, concious thought, language and verbal memory.",
                    "Cerebellum controls balance, co-ordination of movement and muscular activity.",
                    "Medulla controls unconscious activities such as heart rate and breathing rate",
                    "Hypothalamus is the regulating centre for temperature and water balance for the body"
                ],
                quiz: [
                    {
                    question: "Is the brain made up of 4 main areas?",
                    answer: true
                    },
                    {
                    question: "Does the cerebrum control the bodies temperature?",
                    answer: false
                    },
                    {
                    question: "Does the Cerebellum control balance and muscular activity?",
                    answer: true
                    },
                    {
                    question: "Is the hypothalamus the regulating centre for the body?",
                    answer: true
                    }
                ]
            },
        {
           name: "Lungs",
           diagram: "https://ichef.bbci.co.uk/images/ic/448xn/p08vwby2.png",
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
                    answer: true
                    },
                    {
                    question: "An average person breathes in around 100 liters of air per day.",
                    answer: false
                    }, 
                    {
                    question: "Expiration is the act of breathing in oxigen.",
                    answer: false
                    },
                    {
                    question: "Carbon dioxide is produced as a result of respiration.",
                    answer: true
                    }
                ]
         },

        {

            name: "Heart",
            diagram: 'https://pmgbiology.files.wordpress.com/2015/02/heart.png',
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
                answer: false
                },
                {
                question: "The heart is responsible for pumping blood throughout the body.",
                answer: true
                },
                {
                question: "The heart is about the size of a fist.",
                answer: true,
                },
                {
                question: "The nervous system directs the heart's function.",
                answer: true
                }
            ]
        }

    ])

    db.contributers.insertMany([
        {
            name: "Sara Qureshi",
            Hometown: "Redditch, just outside Birmingham, England",
            FavouriteFood: "Too many to choose from! Depends on the cuisine.",
            MoreInfo: "Portfolio URL comes here" 
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
            FavouriteFood: "My current favourite is Korean cuisine",
            MoreInfo: "Watch this space" 

        }
    ]
    )