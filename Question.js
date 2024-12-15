let questions = 
[
    {
        numb: 1,
        question: "Who is the national hero of the Philippines?",
        answer: "Jose Rizal",
        options: ["Jose Rizal","Lapu-Lapu","Ferdinand Magellan","Andres Bonifacio"]
    },

    {
        numb: 2,
        question: "What is the national sport of the Philippines?",
        answer: "Arnis",
        options: ["Basketball","Sipa","Dodgeball","Arnis"]
    },

    {
        numb: 3,
        question: "Which language or languages are recognized as official in the Philippines?",
        answer: "Filipino and English",
        options: ["Filipino","English","Spanish","Filipino and English"]
    },

    {
        numb: 4,
        question: "The Philippines is part of which continent?",
        answer: "Asia",
        options: ["Europe","Australia","Asia","Africa"]
    },

    {
        numb: 5,
        question: "In the Philippines, what is the most widely used kind of public transportation?",
        answer: "Jeepney",
        options: ["Jeepney","Tricycle","Train","Taxi"]
    },

    {
        numb: 6,
        question: "What does the Philippine flag's inverted design represent?",
        answer: "War",
        options: ["Peace","War","None","Poorness"]
    },

    {
        numb: 7,
        question: "What is the national anthem of the Philippines?",
        answer: "Lupang Hinirang",
        options: ["Lupang Hinirang","Bayang Magiliw","Bayan kong Pilipinas","Pilipinas"]
    },

    {
        numb: 8,
        question: "What is the national flower of the Philippines?",
        answer: "Sampaguita",
        options: ["Gumamela","Sunflower","Sampaguita","Jasminum Sambac"]
    },

    {
        numb: 9,
        question: "What does NCR mean?",
        answer: "National Capital Region",
        options: ["National Capital Religion","National Captain Region","National Capital Region","Nation Capital Region"]
    },

    {
        numb: 10,
        question: "How many Islands are in the Philippines?",
        answer: "7,641 Islands",
        options: ["7,461 Islands","7,341 Islands","7,641 Islands","7.731 Islands"]
    },

    {
        numb: 11,
        question: "How long did Spain colonize the Philippines?",
        answer: "333 Years",
        options: ["354 Years","265 Years","333 Years","100  Years"]
    },

    {
        numb: 12,
        question: "What religion has the highest percentage in the Philippines?",
        answer: "Catholic",
        options: ["Catholic","Islam","Muslim","Iglesia ni Cristo"]
    },

    {
        numb: 13,
        question: "Where is the Sinulog festival held in the Philippines?",
        answer: "Cebu City",
        options: ["Guimaras City","Quezon City","Cebu City","Baguio City"]
    },
 
    {
        numb: 14,
        question: "When was the Philippines under Japanese occupation?",
        answer: "1941",
        options: ["1930","1935","1941","1945"]
    },

        
    {
        numb: 15,
        question: "When did Japan stop occupying the Philippines?",
        answer: "1945",
        options: ["1949","1943","1945","1962"]
    },

        
    {
        numb: 16,
        question: "Who is the third president of the Philippines? ",
        answer: "Jose P. Laurel",
        options: ["Emilio Aguinaldo","Manuel L Quezon","Sergio Osmeña","Jose P. Laurel"]
    },

        
    {
        numb: 17,
        question: "When is the Philippines Independence Day celebrated?",
        answer: "June 12",
        options: ["June 12","June 14","June 20","June 25"]
    },

    {
        numb: 18,
        question: "What is the name of the longest river in the Philippines?",
        answer: "Cagayan River",
        options: ["Pasig River","Agusan River","Cagayan River","Pampanga River"]
    },

    {
        numb: 19,
        question: "Which volcano in the Philippines is known as the smallest active volcano in the world?",
        answer: "Taal Volcano",
        options: ["Mount Apo","Taal Volcano","Mayon Volcano","Mount Pinatubo"]
    },
    
    {
        numb: 20,
        question: "Who was the first female president of the Philippines?",
        answer: "Corazon Aquino",
        options: ["Corazon Aquino","Gloria Macapagal Arroyo","Liza Araneta-Marcos","Pia Cayetano"]
    },

    {
        numb: 21,
        question: "WWho wrote “El Filibusterismo”?",
        answer: "Jose Rizal",
        options: ["Jose Rizal","Emilio Aguinaldo","Jacinto Zamora","Mariano Gomes de los Angeles"]
    },
    {
        numb: 22,
        question: "What is the largest island in the philippines?",
        answer: "Luzon",
        options: ["Luzon","Visayas","Mindanao","Tagaytay"]
    },

    {
        numb: 23,
        question: "Which Philippine city is known as the “City of Love”?",
        answer: "Iloilo City",
        options: ["Bacolod City","Iloilo City","Baguio City","Zamboanga City"]
    },

    {
        numb: 24,
        question: "Who was the first president of the Philippines?",
        answer: "Emilio Aguinaldo",
        options: ["Manuel L. Quezon","Ferdinand Marcos","Emilio Aguinaldo","Jose P. Laurel"]
    },

    {
        numb: 25,
        question: "Who is known as the “Father of the Philippine Revolution”?",
        answer: "Andres Bonifacio",
        options: ["Andres Bonifacio","Emilio Aguinaldo","Apolinario Mabini","Jose Rizal"]
    },

    {
        numb: 26,
        question: "What does the “three stars” on the Philippine flag represent?",
        answer: "Luzon, Visayas, and Mindanao",
        options: ["Freedom, Peace, and Justice","Democracy, Independence, and Harmony","Equality, Unity, and Strength","Luzon, Visayas, and Mindanao"]
    },

    {
        numb: 27,
        question: "Which city is known as the “Summer Capital of the Philippines”?",
        answer: "Baguio",
        options: ["Tagaytay","Davao","Baguio","Cebu"]
    },

    {
        numb: 28,
        question: "What is  the national animal of the Philippines?",
        answer: "Carabao",
        options: ["Carabao","Philippine Eagle","Tamaraw","Philippine Tarsier"]
    },

    {
        numb: 29,
        question: "What is the traditional costume of the Philippines?",
        answer: "Baro't saya",
        options: ["Baro't saya","Barong Tagalog","Malong","Balintawak"]
    },

    {
        numb: 30,
        question: "What is the famous chocolate-shaped hill formation in Bohol called?",
        answer: "Chocolate Hills",
        options: ["Chocolate Hills","Chocolate Peaks","Chocolate Mounds","Chocolate Mountain"]
    },

]


//Randomizer
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

start_btn.onclick = () => {
    questions = shuffleQuestions(questions); 
    info_box.classList.add("activeInfo"); 
    Music.play();
}

