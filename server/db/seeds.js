use organ_app;
db.dropDatabase();

db.bodyparts.insertMany(
    [
            {
                name: "Brain",
                diagram: "https://bam.files.bbci.co.uk/bam/live/content/z38cmsg/large",
                facts: {
                    0: "The brain controls complex behaviour. It is made of billions of connected neurones and has different regions that carry out different functions.",
                    1: "The Cerebrum is one of the four main areas of the brain. It has an outer layer called cerebral cortex which is split into two sections. This part controls intelligience, personality, concious thought, language and verbal memory.",
                    2: "Cerebellum controls balance, co-ordination of movement and muscular activity.",
                    3: "Medulla controls unconscious activities such as heart rate and breathing rate",
                    4: "Hypothalamus is the regulating centre for temperature and water balance for the body"
                },
                quiz: {
                    quiz_question_one: "Is the brain made up of 4 main areas?",
                    quiz_answer_one: true,
                    quiz_question_two: "Does the cerebrum control the bodies temperature?",
                    quiz_answer_two: false,
                    quiz_question_three: "Does the Cerebellum control balance and muscular activity?",
                    quiz_answer_three: true,
                    quiz_question_four: "Is the hypothalamus the regulating centre for the body?",
                    quiz_answer_four: true,
                }
            },
        {
           name: "lungs",
           diagram: "https://ichef.bbci.co.uk/images/ic/448xn/p08vwby2.png",
           facts: {
                0: "When you breathe in, air travels down into your alveoli.",
                1: "Lungs release waste gases back into the environment - called expiration.",
                2: "Carbon dioxide is produced as a waste product of respiration",
                3: "It travels all around your body in your bloodstream and is delivered to every cell where it is used for respiration to provide you with energy.",
                4: "An average person breathes in around 11,000 liters of air every day."
           },
           
           quiz: {
           quiz_question_one: "The air you inhale travels down into alveoli.",
           quiz_answer: true, 
           quiz_question_two:"An average person breathes in around 100 liters of air per day.",
           quiz_answer_two: false,
           quiz_question_three: "Expiration is the act of breathing in oxigen.",
           quiz_answer_three: false,
           quiz_question_four:"Carbon dioxide is produced as a result of respiration.",
           quiz_answer_four: true
           } 
        }
       ])


    