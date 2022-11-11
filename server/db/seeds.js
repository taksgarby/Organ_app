use organ_app;
db.dropDatabase();

db.bodyparts.insertMany(
    [
        {
            object_name: "Brain"
            {
                name: "Brain",
                diagram: "https://bam.files.bbci.co.uk/bam/live/content/z38cmsg/large",
                facts: {
                    "The brain controls complex behaviour. It is made of billions of connected neurones and has different regions that carry out different functions.",
                    "The Cerebrum is one of the four main areas of the brain. It has an outer layer called cerebral cortex which is split into two sections. This part controls intelligience, personality, concious thought, language and verbal memory.",
                    "Cerebellum controls balance, co-ordination of movement and muscular activity.",
                    "Medulla controls unconscious activities such as heart rate and breathing rate",
                    "Hypothalamus is the regulating centre for temperature and water balance for the body",
                }
            }
        }
    ]
)
