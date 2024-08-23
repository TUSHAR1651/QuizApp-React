import React, { useState } from 'react';
import './QuizCategories.css';
import QuizQuestion from './QuizQuestion';

const quizCategories = [
    {
        title: 'Scince Questions',
        description: 'Take questions related to General Science to boost up your knowledge!',
            questions : [
            {
                question: "Which of the following are states of matter?",
                options: ["Solid", "Liquid", "Gas", "Plasma", "Magnet"],
                correctAnswer: ["Solid", "Liquid", "Gas", "Plasma"],
                type: "multiple"
            },
            {
                question: "The speed of light in a vacuum is approximately 299,792 kilometers per second.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: "Nitrogen",
                type: "single"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Venus", "Jupiter", "Saturn"],
                correctAnswer: "Mars",
                type: "single"
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
                correctAnswer: "Hydrogen",
                type: "single"
            },
            {
                question: "Which of the following are forms of energy?",
                options: ["Kinetic", "Thermal", "Nuclear", "Magnetic"],
                correctAnswer: ["Kinetic", "Thermal", "Nuclear"],
                type: "multiple"
            },
            {
                question: "Einstein's theory of relativity was published in 1905.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "KCl", "CaCO3", "H2O"],
                correctAnswer: "NaCl",
                type: "single"
            },
            {
                question: "Which organ in the human body is primarily responsible for pumping blood?",
                options: ["Liver", "Lung", "Heart", "Kidney"],
                correctAnswer: "Heart",
                type: "single"
            },
            {
                question: "Which scientist is known for developing the theory of evolution by natural selection?",
                options: ["Isaac Newton", "Charles Darwin", "Galileo Galilei", "Marie Curie"],
                correctAnswer: "Charles Darwin",
                type: "single"
            },
            {
                question: "What is the center of an atom called?",
                options: ["Electron", "Proton", "Neutron", "Nucleus"],
                correctAnswer: "Nucleus",
                type: "single"
            },
            {
                question: "Which of the following are renewable energy sources?",
                options: ["Solar", "Coal", "Wind", "Natural Gas"],
                correctAnswer: ["Solar", "Wind"],
                type: "multiple"
            },
            {
                question: "Photosynthesis occurs in which part of a plant cell?",
                options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
                correctAnswer: "Chloroplast",
                type: "single"
            },
            {
                question: "The formula for calculating force is F = ma. What do 'm' and 'a' stand for?",
                options: ["Mass and Acceleration", "Momentum and Area", "Mass and Area", "Momentum and Acceleration"],
                correctAnswer: "Mass and Acceleration",
                type: "single"
            },
            {
                question: "Which planet is the largest in our solar system?",
                options: ["Earth", "Saturn", "Jupiter", "Neptune"],
                correctAnswer: "Jupiter",
                type: "single"
            }
        ]
    },
    {
        title: 'History',
        description: 'Are you in love with History? Test out your reach',
        questions: [
            {
                question: "Which of the following were ancient civilizations?",
                options: ["Mesopotamia", "Egypt", "Greece", "Rome", "Atlantis"],
                correctAnswer: ["Mesopotamia", "Egypt", "Greece", "Rome"],
                type: "multiple"
            },
            {
                question: "The Berlin Wall fell in 1989.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "Who was the first emperor of China?",
                options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Kublai Khan"],
                correctAnswer: "Qin Shi Huang",
                type: "single"
            },
            {
                question: "Which war was fought between the North and South in the United States from 1861-1865?",
                options: ["World War I", "The American Civil War", "The Revolutionary War", "The Spanish-American War"],
                correctAnswer: "The American Civil War",
                type: "single"
            },
            {
                question: "Who was the leader of the Soviet Union during World War II?",
                options: ["Leon Trotsky", "Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev"],
                correctAnswer: "Joseph Stalin",
                type: "single"
            },
            {
                question: "Which of the following events occurred during the 20th century?",
                options: ["The Moon Landing", "The French Revolution", "The Renaissance", "The Fall of Constantinople"],
                correctAnswer: ["The Moon Landing"],
                type: "multiple"
            },
            {
                question: "The Magna Carta was signed in 1215.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "Who was the famous queen of ancient Egypt?",
                options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Elizabeth"],
                correctAnswer: "Cleopatra",
                type: "single"
            },
            {
                question: "The first manned moon landing was part of which space mission?",
                options: ["Apollo 11", "Apollo 13", "Gemini 12", "Mercury-Redstone 3"],
                correctAnswer: "Apollo 11",
                type: "single"
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Byzantine Empire"],
                correctAnswer: "Mongol Empire",
                type: "single"
            },
            {
                question: "Which of the following was not a leader during the Cold War?",
                options: ["Winston Churchill", "Franklin D. Roosevelt", "Mikhail Gorbachev", "John F. Kennedy"],
                correctAnswer: "Franklin D. Roosevelt",
                type: "single"
            },
            {
                question: "The Treaty of Versailles ended which major conflict?",
                options: ["World War I", "World War II", "The Korean War", "The Vietnam War"],
                correctAnswer: "World War I",
                type: "single"
            },
            {
                question: "Which of the following were leaders of the Allied powers in World War II?",
                options: ["Franklin D. Roosevelt", "Adolf Hitler", "Winston Churchill", "Joseph Stalin"],
                correctAnswer: ["Franklin D. Roosevelt", "Winston Churchill", "Joseph Stalin"],
                type: "multiple"
            },
            {
                question: "The Russian Revolution took place in which year?",
                options: ["1914", "1917", "1920", "1939"],
                correctAnswer: "1917",
                type: "single"
            },
            {
                question: "Which of these countries was not part of the Axis Powers during World War II?",
                options: ["Italy", "Germany", "Japan", "Spain"],
                correctAnswer: "Spain",
                type: "single"
            }
        ]
    },
    {
        title: 'Geography',
        description: 'Dive into the world of Geographical Knowledge',
        questions: [
            {
                question: "Which of the following are continents?",
                options: ["Asia", "Africa", "Antarctica", "Greenland"],
                correctAnswer: ["Asia", "Africa", "Antarctica"],
                type: "multiple"
            },
            {
                question: "The Amazon Rainforest is located in which continent?",
                options: ["Africa", "Asia", "South America", "Australia"],
                correctAnswer: "South America",
                type: "single"
            },
            {
                question: "Mount Everest is the highest mountain in the world.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "Which country has the longest coastline?",
                options: ["Australia", "Canada", "Russia", "United States"],
                correctAnswer: "Canada",
                type: "single"
            },
            {
                question: "The Nile River flows into which body of water?",
                options: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea", "Red Sea"],
                correctAnswer: "Mediterranean Sea",
                type: "single"
            },
            {
                question: "Which of the following are landlocked countries?",
                options: ["Switzerland", "Brazil", "Egypt", "Thailand"],
                correctAnswer: ["Switzerland"],
                type: "multiple"
            },
            {
                question: "The Great Barrier Reef is located off the coast of which country?",
                options: ["Australia", "South Africa", "Brazil", "Mexico"],
                correctAnswer: "Australia",
                type: "single"
            },
            {
                question: "Which mountain range separates Europe from Asia?",
                options: ["Rocky Mountains", "Andes", "Himalayas", "Ural Mountains"],
                correctAnswer: "Ural Mountains",
                type: "single"
            },
            {
                question: "Which of the following is the largest desert in the world?",
                options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
                correctAnswer: "Antarctic Desert",
                type: "single"
            },
            {
                question: "Which ocean is the smallest in terms of surface area?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: "Arctic Ocean",
                type: "single"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["Japan", "China", "South Korea", "Thailand"],
                correctAnswer: "Japan",
                type: "single"
            },
            {
                question: "Which river is the longest in Europe?",
                options: ["Danube", "Rhine", "Volga", "Elbe"],
                correctAnswer: "Volga",
                type: "single"
            },
            {
                question: "Which continent is the Sahara Desert located on?",
                options: ["Africa", "Asia", "Australia", "South America"],
                correctAnswer: "Africa",
                type: "single"
            },
            {
                question: "Which of the following countries is not in Africa?",
                options: ["Nigeria", "Egypt", "Saudi Arabia", "Kenya"],
                correctAnswer: "Saudi Arabia",
                type: "single"
            }
        ]
    },
    {
        title: 'Science: Gadgets',
        description: 'Explore questions about modern gadgets and technological innovations!',
        questions: [
            {
                question: "Which of the following novels was written by J.K. Rowling?",
                options: ["Harry Potter and the Philosopher's Stone", "The Hobbit", "Pride and Prejudice", "1984"],
                correctAnswer: "Harry Potter and the Philosopher's Stone",
                type: "single"
            },
            {
                question: "Which of these is a famous work of Shakespeare?",
                options: ["Hamlet", "Moby Dick", "To Kill a Mockingbird", "The Catcher in the Rye"],
                correctAnswer: "Hamlet",
                type: "single"
            },
            {
                question: "The novel 'Moby Dick' was written by which author?",
                options: ["Herman Melville", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
                correctAnswer: "Herman Melville",
                type: "single"
            },
            {
                question: "Which of the following are works by Jane Austen?",
                options: ["Emma", "Wuthering Heights", "Jane Eyre", "Pride and Prejudice"],
                correctAnswer: ["Emma", "Pride and Prejudice"],
                type: "multiple"
            },
            {
                question: "Which of the following books is set during the Great Depression?",
                options: ["The Grapes of Wrath", "1984", "Brave New World", "Frankenstein"],
                correctAnswer: "The Grapes of Wrath",
                type: "single"
            },
            {
                question: "The play 'A Doll's House' was written by which playwright?",
                options: ["Henrik Ibsen", "Anton Chekhov", "George Bernard Shaw", "Tennessee Williams"],
                correctAnswer: "Henrik Ibsen",
                type: "single"
            },
            {
                question: "Which of the following books is not part of the 'Lord of the Rings' series?",
                options: ["The Hobbit", "The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
                correctAnswer: "The Hobbit",
                type: "single"
            },
            {
                question: "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
                options: ["A Tale of Two Cities", "Great Expectations", "Oliver Twist", "David Copperfield"],
                correctAnswer: "A Tale of Two Cities",
                type: "single"
            },
            {
                question: "Which of the following books was written by George Orwell?",
                options: ["1984", "Brave New World", "Fahrenheit 451", "To Kill a Mockingbird"],
                correctAnswer: "1984",
                type: "single"
            },
            {
                question: "Which of the following authors won the Nobel Prize in Literature?",
                options: ["William Faulkner", "Ernest Hemingway", "Gabriel García Márquez", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "Which book series features a young wizard named Harry Potter?",
                options: ["Percy Jackson", "Harry Potter", "The Chronicles of Narnia", "The Inheritance Cycle"],
                correctAnswer: "Harry Potter",
                type: "single"
            },
            {
                question: "The novel 'Beloved' was written by which author?",
                options: ["Toni Morrison", "Maya Angelou", "Alice Walker", "Zora Neale Hurston"],
                correctAnswer: "Toni Morrison",
                type: "single"
            },
            {
                question: "Which of these novels is considered a classic of dystopian literature?",
                options: ["Brave New World", "The Great Gatsby", "The Catcher in the Rye", "To Kill a Mockingbird"],
                correctAnswer: "Brave New World",
                type: "single"
            },
            {
                question: "Which of the following characters is from 'Pride and Prejudice'?",
                options: ["Elizabeth Bennet", "Emma Woodhouse", "Hester Prynne", "Jo March"],
                correctAnswer: "Elizabeth Bennet",
                type: "single"
            },
            {
                question: "Which literary genre does 'The Odyssey' belong to?",
                options: ["Epic", "Tragedy", "Comedy", "Romance"],
                correctAnswer: "Epic",
                type: "single"
            }
        ]
    },
    {
        title: 'Science & Nature',
        description: 'Test your knowledge on natural sciences and the environment!',
        questions: [
            {
                question: "Which of the following are fundamental forces in nature?",
                options: ["Gravity", "Electromagnetic Force", "Nuclear Force", "Friction"],
                correctAnswer: ["Gravity", "Electromagnetic Force", "Nuclear Force"],
                type: "multiple"
            },
            {
                question: "Humans have 46 chromosomes in their cells.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "What is the chemical symbol for oxygen?",
                options: ["O", "O2", "O3", "Ox"],
                correctAnswer: "O",
                type: "single"
            },
            {
                question: "What is the most common element in the Earth's crust?",
                options: ["Silicon", "Iron", "Aluminum", "Oxygen"],
                correctAnswer: "Oxygen",
                type: "single"
            },
            {
                question: "Which scientist is known for the theory of general relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
                correctAnswer: "Albert Einstein",
                type: "single"
            },
            {
                question: "Which of these is a noble gas?",
                options: ["Neon", "Oxygen", "Carbon", "Nitrogen"],
                correctAnswer: "Neon",
                type: "single"
            },
            {
                question: "Photosynthesis primarily occurs in which part of the plant?",
                options: ["Roots", "Stems", "Leaves", "Flowers"],
                correctAnswer: "Leaves",
                type: "single"
            },
            {
                question: "Which of the following are types of chemical bonds?",
                options: ["Ionic", "Covalent", "Metallic", "Van der Waals"],
                correctAnswer: ["Ionic", "Covalent", "Metallic"],
                type: "multiple"
            },
            {
                question: "The acceleration due to gravity on Earth is approximately 9.8 m/s².",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "What is the unit of electrical resistance?",
                options: ["Ampere", "Volt", "Ohm", "Watt"],
                correctAnswer: "Ohm",
                type: "single"
            },
            {
                question: "Which of these is a type of galaxy?",
                options: ["Spiral", "Elliptical", "Irregular", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "The Earth’s core is composed primarily of which two elements?",
                options: ["Iron and Nickel", "Silicon and Oxygen", "Lead and Zinc", "Gold and Silver"],
                correctAnswer: "Iron and Nickel",
                type: "single"
            },
            {
                question: "Which organ in the human body produces insulin?",
                options: ["Liver", "Heart", "Pancreas", "Lung"],
                correctAnswer: "Pancreas",
                type: "single"
            },
            {
                question: "What is the process by which cells divide to form two identical daughter cells?",
                options: ["Meiosis", "Mitosis", "Fission", "Fusion"],
                correctAnswer: "Mitosis",
                type: "single"
            },
            {
                question: "Which of the following is a type of wave in physics?",
                options: ["Sound Wave", "Electromagnetic Wave", "Water Wave", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            }
        ]
    },
    {
        title: 'Animals',
        description: 'Explore fascinating questions about the animal kingdom!',
        questions: [
            {
                question: "Which of the following animals are known for their ability to change color?",
                options: ["Chameleon", "Octopus", "Polar Bear", "Tiger"],
                correctAnswer: ["Chameleon", "Octopus"],
                type: "multiple"
            },
            {
                question: "Dolphins are mammals.",
                options: ["True", "False"],
                correctAnswer: "True",
                type: "boolean"
            },
            {
                question: "What is the largest land animal?",
                options: ["Elephant", "Rhinoceros", "Giraffe", "Hippopotamus"],
                correctAnswer: "Elephant",
                type: "single"
            },
            {
                question: "Which animal is known for having a long neck and legs?",
                options: ["Giraffe", "Elephant", "Lion", "Horse"],
                correctAnswer: "Giraffe",
                type: "single"
            },
            {
                question: "What is the primary diet of a panda?",
                options: ["Bamboo", "Fish", "Insects", "Fruits"],
                correctAnswer: "Bamboo",
                type: "single"
            },
            {
                question: "Which of the following animals can regenerate lost limbs?",
                options: ["Starfish", "Lizard", "Salamander", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "Which bird is known for its ability to mimic human speech?",
                options: ["Parrot", "Sparrow", "Eagle", "Penguin"],
                correctAnswer: "Parrot",
                type: "single"
            },
            {
                question: "Which animal is known for its distinctive black and white stripes?",
                options: ["Zebra", "Tiger", "Leopard", "Panda"],
                correctAnswer: "Zebra",
                type: "single"
            },
            {
                question: "Which of these animals is capable of flight?",
                options: ["Bat", "Penguin", "Kangaroo", "Elephant"],
                correctAnswer: "Bat",
                type: "single"
            },
            {
                question: "What is the largest species of shark?",
                options: ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"],
                correctAnswer: "Whale Shark",
                type: "single"
            },
            {
                question: "Which of the following are examples of nocturnal animals?",
                options: ["Owls", "Bats", "Rats", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "What do you call a group of wolves?",
                options: ["Pack", "Herd", "Pride", "School"],
                correctAnswer: "Pack",
                type: "single"
            },
            {
                question: "Which animal has the longest migration route?",
                options: ["Arctic Tern", "Monarch Butterfly", "Gray Whale", "Wildebeest"],
                correctAnswer: "Arctic Tern",
                type: "single"
            },
            {
                question: "Which of these animals is known for its ability to produce venom?",
                options: ["Snake", "Beetle", "Jellyfish", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "Which mammal is known for its ability to lay eggs?",
                options: ["Platypus", "Kangaroo", "Elephant", "Lion"],
                correctAnswer: "Platypus",
                type: "single"
            }
        ]
    },
    {
        title: 'Vehicles',
        description: 'Test your knowledge about various modes of transportation!',
        questions: [
            {
                question: "Which of the following are types of electric vehicles?",
                options: ["Battery Electric Vehicles (BEVs)", "Plug-in Hybrid Electric Vehicles (PHEVs)", "Hybrid Electric Vehicles (HEVs)", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "A vehicle with a combustion engine runs on electricity.",
                options: ["True", "False"],
                correctAnswer: "False",
                type: "boolean"
            },
            {
                question: "Which company is known for manufacturing the Tesla Model S?",
                options: ["Tesla", "Ford", "BMW", "Audi"],
                correctAnswer: "Tesla",
                type: "single"
            },
            {
                question: "Which of the following is considered a luxury vehicle brand?",
                options: ["Toyota", "Chevrolet", "Mercedes-Benz", "Honda"],
                correctAnswer: "Mercedes-Benz",
                type: "single"
            },
            {
                question: "What is the primary purpose of an airbag in a vehicle?",
                options: ["Increase speed", "Enhance comfort", "Protect occupants during a collision", "Improve fuel efficiency"],
                correctAnswer: "Protect occupants during a collision",
                type: "single"
            },
            {
                question: "Which of these vehicles is known for its ability to off-road?",
                options: ["Sedan", "Coupe", "SUV", "Convertible"],
                correctAnswer: "SUV",
                type: "single"
            },
            {
                question: "Which of the following are common types of vehicle transmissions?",
                options: ["Automatic", "Manual", "Continuously Variable Transmission (CVT)", "All of the above"],
                correctAnswer: "All of the above",
                type: "multiple"
            },
            {
                question: "A hybrid vehicle uses only a gasoline engine for propulsion.",
                options: ["True", "False"],
                correctAnswer: "False",
                type: "boolean"
            },
            {
                question: "Which component of a vehicle is primarily responsible for braking?",
                options: ["Engine", "Transmission", "Brakes", "Suspension"],
                correctAnswer: "Brakes",
                type: "single"
            },
            {
                question: "What does the acronym 'ABS' stand for in automotive terms?",
                options: ["Automatic Braking System", "Anti-lock Braking System", "Advanced Braking System", "Adaptive Braking System"],
                correctAnswer: "Anti-lock Braking System",
                type: "single"
            },
            {
                question: "Which of these is a type of internal combustion engine?",
                options: ["Diesel Engine", "Electric Motor", "Hydrogen Fuel Cell", "Solar Engine"],
                correctAnswer: "Diesel Engine",
                type: "single"
            },
            {
                question: "Which vehicle part is used to steer the vehicle?",
                options: ["Throttle", "Brakes", "Gearbox", "Steering Wheel"],
                correctAnswer: "Steering Wheel",
                type: "single"
            },
            {
                question: "Which of the following vehicle types is designed to carry large amounts of cargo?",
                options: ["Hatchback", "Convertible", "Pickup Truck", "Sedan"],
                correctAnswer: "Pickup Truck",
                type: "single"
            },
            {
                question: "Which of these vehicle brands is known for its luxury sports cars?",
                options: ["Porsche", "Subaru", "Nissan", "Mazda"],
                correctAnswer: "Porsche",
                type: "single"
            },
            {
                question: "The 'cruise control' feature in vehicles is used to:",
                options: ["Increase the car's acceleration", "Maintain a constant speed without using the accelerator", "Improve the vehicle's fuel economy", "Assist with parking"],
                correctAnswer: "Maintain a constant speed without using the accelerator",
                type: "single"
            }
        ]
    }
];


function QuizCategories({ darkMode }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleStartQuiz = (category) => {
        setSelectedCategory(category);
    };

    const handleFinishQuiz = () => {
        setSelectedCategory(null);
    };

    if (selectedCategory) {
        return (
            <QuizQuestion
                questions={selectedCategory.questions}
                darkMode={darkMode}
                onFinish={handleFinishQuiz}
            />
        );
    }

    return (
        <div className={`quiz-categories ${darkMode ? 'dark-mode' : ''}`}>
            <h2>Select Any Quiz Category</h2>
            <div className="category-grid">
                {quizCategories.map((category, index) => (
                    <div key={index} className={`category-card ${darkMode ? 'dark-mode' : ''}`}>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <button className="take-quiz-btn" onClick={() => handleStartQuiz(category)}>
                            Take Quiz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizCategories;