use organ_app;
db.dropDatabase();

db.bodyparts.insertMany([
{
    lungs:
 {
    name: "lungs",
    diagram: "https://ichef.bbci.co.uk/images/ic/448xn/p08vwby2.png",
    facts: {
        fact: "When you breathe in, air travels down into your alveoli.",
        fact: "Lungs release waste gases back into the environment - called expiration.",
        fact: "Carbon dioxide is produced as a waste product of respiration",
        fact: "It travels all around your body in your bloodstream and is delivered to every cell where it is used for respiration to provide you with energy.",
        fact: "An average person breathes in around 11,000 liters of air every day."
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
}
])