import React from 'react'


    const f1QuizQuestions = [
        {
            question: "Who is tied for having won the most Formula 1 World Championships?",
            options: ["Michael Schumacher", "Max Verstappen", "Ayrton Senna", "Sebastian Vettel"],
            answer: "Michael Schumacher"
        },
        {
            question: "Which driver has the most race wins in Formula 1?",
            options: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Alain Prost"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Who was the first Formula 1 World Champion?",
            options: ["Juan Manuel Fangio", "Alberto Ascari", "Giuseppe Farina", "Nino Farina"],
            answer: "Giuseppe Farina"
        },
        {
            question: "Which team has won the most Constructors' Championships?",
            options: ["McLaren", "Ferrari", "Mercedes", "Red Bull Racing"],
            answer: "Ferrari"
        },
        {
            question: "Who is the youngest driver to win a Formula 1 race?",
            options: ["Sebastian Vettel", "Lewis Hamilton", "Max Verstappen", "Fernando Alonso"],
            answer: "Max Verstappen"
        },
        {
            question: "Which driver won the 2021 Formula 1 World Championship?",
            options: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Valtteri Bottas"],
            answer: "Max Verstappen"
        },
        {
            question: "Who holds the record for the most pole positions in Formula 1?",
            options: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Alain Prost"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Which driver is known as 'The Professor'?",
            options: ["Alain Prost", "Niki Lauda", "Nelson Piquet", "Keke Rosberg"],
            answer: "Alain Prost"
        },
        {
            question: "Which team did Ayrton Senna drive for when he won his three World Championships?",
            options: ["Williams", "McLaren", "Lotus", "Ferrari"],
            answer: "McLaren"
        },
        {
            question: "Who was the first female driver to score points in Formula 1?",
            options: ["Maria Teresa de Filippis", "Lella Lombardi", "Divina Galica", "Desiré Wilson"],
            answer: "Lella Lombardi"
        },
        {
            question: "Which circuit hosts the British Grand Prix?",
            options: ["Silverstone", "Brands Hatch", "Donington Park", "Snetterton"],
            answer: "Silverstone"
        },
        {
            question: "Where is the Monaco Grand Prix held?",
            options: ["Monte Carlo", "Nice", "Cannes", "Marseille"],
            answer: "Monte Carlo"
        },
        {
            question: "Which circuit is known as 'The Temple of Speed'?",
            options: ["Spa-Francorchamps", "Nürburgring", "Monza", "Silverstone"],
            answer: "Monza"
        },
        {
            question: "What is the longest circuit on the current Formula 1 calendar?",
            options: ["Suzuka", "Monza", "Spa-Francorchamps", "Circuit de Monaco"],
            answer: "Spa-Francorchamps"
        },
        {
            question: "Which circuit has the most turns in a Formula 1 race?",
            options: ["Monaco", "Singapore", "Suzuka", "Baku"],
            answer: "Singapore"
        },
        {
            question: "Where was the first Formula 1 race held?",
            options: ["Monaco", "Monza", "Spa-Francorchamps", "Silverstone"],
            answer: "Silverstone"
        },
        {
            question: "Which Grand Prix is known as 'La Rascasse'?",
            options: ["Monaco Grand Prix", "French Grand Prix", "Italian Grand Prix", "Spanish Grand Prix"],
            answer: "Monaco Grand Prix"
        },
        {
            question: "What is the shortest circuit on the current Formula 1 calendar?",
            options: ["Hungaroring", "Monaco", "Interlagos", "Red Bull Ring"],
            answer: "Monaco"
        },
        {
            question: "Which circuit features the Eau Rouge and Raidillon corners?",
            options: ["Monza", "Silverstone", "Spa-Francorchamps", "Suzuka"],
            answer: "Spa-Francorchamps"
        },
        {
            question: "In which country is the Interlagos circuit located?",
            options: ["Argentina", "Brazil", "Mexico", "Portugal"],
            answer: "Brazil"
        },
        {
            question: "What does DRS stand for in Formula 1?",
            options: ["Dynamic Racing System", "Drag Reduction System", "Downforce Reduction System", "Drive Recovery System"],
            answer: "Drag Reduction System"
        },
        {
            question: "What is the maximum number of engines a driver can use per season without penalty?",
            options: ["Three", "Four", "Five", "Six"],
            answer: "Three"
        },
        {
            question: "What is a 'pit stop' in Formula 1?",
            options: ["A strategic tactic", "A stop for tire changes", "A stop for repairs", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is the purpose of the Halo device in Formula 1 cars?",
            options: ["To protect the driver's head", "To improve aerodynamics", "To cool the driver", "To reduce drag"],
            answer: "To protect the driver's head in case of an accident"
        },
        {
            question: "What is the minimum weight of a Formula 1 car for the 2024 season, including the driver?",
            options: ["752 kg", "750 kg", "760 kg", "770 kg"],
            answer: "752 kg"
        },
        {
            question: "What is the name of the tire supplier for Formula 1?",
            options: ["Michelin", "Goodyear", "Bridgestone", "Pirelli"],
            answer: "Pirelli"
        },
        {
            question: "What does ERS stand for in Formula 1?",
            options: ["Energy Recovery System", "Engine Recovery System", "Electric Racing System", "Endurance Racing System"],
            answer: "Energy Recovery System"
        },
        {
            question: "What is a 'formation lap' in Formula 1?",
            options: ["A lap to warm up the tires", "A lap before the start of the race to warm up the tires and the car", "A lap to get in formation", "A lap to refuel the car"],
            answer: "A lap before the start of the race to warm up the tires and the car"
        },
        {
            question: "What is the purpose of a Safety Car in Formula 1?",
            options: ["To slow down the race", "To lead the cars safely", "To manage hazardous conditions", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is the fuel limit for a Formula 1 race?",
            options: ["100 kg", "110 kg", "120 kg", "130 kg"],
            answer: "110 kg"
        },
        {
            question: "Who was the first British driver to win the Formula 1 World Championship?",
            options: ["Jim Clark", "Mike Hawthorn", "Stirling Moss", "Graham Hill"],
            answer: "Mike Hawthorn"
        },
        {
            question: "Which race is known as the most controversial in Formula 1 history?",
            options: ["1994 San Marino Grand Prix", "2005 United States Grand Prix", "2008 Singapore Grand Prix", "1997 European Grand Prix"],
            answer: "1994 San Marino Grand Prix"
        },
        {
            question: "Who won the first ever Formula 1 race?",
            options: ["Juan Manuel Fangio", "Alberto Ascari", "Giuseppe Farina", "Nino Farina"],
            answer: "Giuseppe Farina"
        },
        {
            question: "Which driver won a race without leading a single lap on track?",
            options: ["Bruce McLaren", "Denny Hulme", "Jack Brabham", "John Surtees"],
            answer: "Bruce McLaren"
        },
        {
            question: "Who was the first driver to win a World Championship with McLaren?",
            options: ["Niki Lauda", "Alain Prost", "Emerson Fittipaldi", "Ayrton Senna"],
            answer: "Emerson Fittipaldi"
        },
        {
            question: "Which team did Niki Lauda drive for when he won his third World Championship?",
            options: ["Ferrari", "McLaren", "Brabham", "Lotus"],
            answer: "McLaren"
        },
        {
            question: "Which driver has the most consecutive race wins in a single season?",
            options: ["Sebastian Vettel", "Lewis Hamilton", "Michael Schumacher", "Max Verstappen"],
            answer: "Max Verstappen"
        },
        {
            question: "Which driver holds the record for the most points in a single season?",
            options: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Michael Schumacher"],
            answer: "Max Verstappen"
        },
        {
            question: "What is the largest margin of victory in a Formula 1 race?",
            options: ["2 minutes and 11.38 seconds", "3 minutes and 56.83 seconds", "4 minutes and 46.22 seconds", "5 minutes and 12.75 seconds"],
            answer: "5 minutes and 12.75 seconds"
        },
        {
            question: "Who was the first American driver to win a Formula 1 World Championship?",
            options: ["Phil Hill", "Mario Andretti", "Dan Gurney", "Peter Revson"],
            answer: "Phil Hill"
        },
        {
            question: "What is an 'undercut' in Formula 1 strategy?",
            options: ["Pitting earlier to gain an advantage over rivals by using fresher tires", "Staying out longer by not pitting", "Gaining position on track by delaying your pitstop", "Blocking a rival by not pitting"],
            answer: "Pitting earlier to gain an advantage over rivals by using fresher tires"
        },
        {
            question: "What is an 'overcut' in Formula 1 strategy?",
            options: ["Pitting earlier to gain an advantage over rivals by using fresher tires", "Staying out longer", "Staying out longer on old tires to gain track position", "Blocking a rival"],
            answer: "Staying out longer on old tires to gain track position"
        },
        {
            question: "What is the fastest recorded pit stop in Formula 1?",
            options: ["1.82 seconds", "2.02 seconds", "2.20 seconds", "1.90 seconds"],
            answer: "1.82 seconds"
        },
        {
            question: "What is a 'two-stop strategy' in Formula 1?",
            options: ["A race strategy involving two pit stops", "A race strategy involving three pit stops", "A race strategy with no pit stops", "A race strategy with one pit stop"],
            answer: "A race strategy involving two pit stops"
        },
        {
            question: "What is the role of a race engineer in Formula 1?",
            options: ["Communicate with the driver", "Make strategic decisions", "Monitor car performance", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is a 'drive-through penalty' in Formula 1?",
            options: ["Driving through the pit lane without stopping", "Stopping in the pit box for a designated time", "A penalty where the driver must drive through the pit lane without stopping", "Slowing down on track"],
            answer: "A penalty where the driver must drive through the pit lane without stopping"
        },
        {
            question: "What is a 'stop-and-go penalty' in Formula 1?",
            options: ["Stopping in the pit box for a designated time", "Driving through the pit lane without stopping", "A penalty where the driver must stop in the pit box for a designated time before rejoining the race", "Slowing down on track"],
            answer: "A penalty where the driver must stop in the pit box for a designated time before rejoining the race"
        },
        {
            question: "What does 'tyre degradation' refer to in Formula 1?",
            options: ["Wearing out of tires", "Improving tire performance", "Changing tires", "Cooling tires"],
            answer: "Wearing out of tires"
        },
        {
            question: "What is 'fuel saving' in Formula 1?",
            options: ["Managing fuel consumption to ensure enough fuel lasts the entire race", "Refueling during a race", "Increasing fuel efficiency", "None of the above"],
            answer: "Managing fuel consumption to ensure enough fuel lasts the entire race"
        },
        {
            question: "What does 'lifting and coasting' mean in Formula 1?",
            options: ["Easing off the throttle before braking", "Accelerating quickly after braking", "Braking harder than usual", "Taking corners faster"],
            answer: "Easing off the throttle before braking"
        },
        {
            question: "What is the FIA?",
            options: ["Fédération Internationale de l'Automobile", "Formula One International Association", "Formula International Agency", "Fédération Internationale de l'Automobile et de Moto"],
            answer: "Fédération Internationale de l'Automobile"
        },
        {
            question: "What is the Constructors' Championship in Formula 1?",
            options: ["Championship for drivers", "Championship for teams", "Championship for manufacturers", "Championship for engineers"],
            answer: "Championship for teams"
        },
        {
            question: "Who is the CEO of Formula 1 as of 2024?",
            options: ["Chase Carey", "Jean Todt", "Stefano Domenicali", "Ross Brawn"],
            answer: "Stefano Domenicali"
        },
        {
            question: "What is the name of the trophy awarded to the Formula 1 World Champion?",
            options: ["FIA Formula One World Championship Trophy", "Formula One Drivers' Championship Trophy", "World Drivers' Trophy", "Formula 1 Championship Trophy"],
            answer: "FIA Formula One World Championship Trophy"
        },
        {
            question: "What is the traditional champagne brand used on the Formula 1 podium?",
            options: ["Moët & Chandon", "Ferrari Trento", "Veuve Clicquot", "Dom Pérignon"],
            answer: "Ferrari Trento"
        },
        {
            question: "What is a 'chicane' in a Formula 1 circuit?",
            options: ["A sequence of tight corners", "A long straight", "A hairpin turn", "A fast sweeping corner"],
            answer: "A sequence of tight corners"
        },
        {
            question: "What is the official name for the starting light sequence in Formula 1?",
            options: ["Starting lights", "Race lights", "Grid lights", "Signal lights"],
            answer: "Starting lights"
        },
        {
            question: "What is the primary color of the Red Bull Racing team?",
            options: ["Bright Red", "Dark Blue", "Yellow", "Black"],
            answer: "Dark Blue"
        },
        {
            question: "Which driver is known for their 'Shoey' celebration?",
            options: ["Daniel Ricciardo", "Lewis Hamilton", "Sebastian Vettel", "Max Verstappen"],
            answer: "Daniel Ricciardo"
        },
        {
            question: "What is the name of Mercedes-AMG Petronas Formula One Team's car for the 2024 season?",
            options: ["W14", "W15", "W13", "W12"],
            answer: "W15"
        },
        {
            question: "Which team did Fernando Alonso win his World Championships with?",
            options: ["Ferrari", "McLaren", "Renault", "Red Bull Racing"],
            answer: "Renault"
        },
        {
            question: "Who was Ayrton Senna's teammate at McLaren in 1988?",
            options: ["Gerhard Berger", "Mika Häkkinen", "Nigel Mansell", "Alain Prost"],
            answer: "Alain Prost"
        },
        {
            question: "Which driver won the first race for Red Bull Racing?",
            options: ["Mark Webber", "Sebastian Vettel", "David Coulthard", "Daniel Ricciardo"],
            answer: "Sebastian Vettel"
        },
        {
            question: "Who is the only driver to have won races in Formula 1, IndyCar, and the 24 Hours of Le Mans?",
            options: ["Mario Andretti", "Juan Pablo Montoya", "Graham Hill", "Fernando Alonso"],
            answer: "Mario Andretti"
        },
        {
            question: "Which team did Jenson Button win his World Championship with?",
            options: ["McLaren", "Brawn GP", "Williams", "Honda"],
            answer: "Brawn GP"
        },
        {
            question: "Who was the first Finnish driver to win a Formula 1 World Championship?",
            options: ["Mika Häkkinen", "Kimi Räikkönen", "Keke Rosberg", "Valtteri Bottas"],
            answer: "Keke Rosberg"
        },
        {
            question: "Which team did Niki Lauda drive for when he won his first World Championship?",
            options: ["Ferrari", "McLaren", "Brabham", "Lotus"],
            answer: "Ferrari"
        },
        {
            question: "Which driver holds the record for the most starts in Formula 1?",
            options: ["Lewis Hamilton", "Fernando Alonso", "Michael Schumacher", "Kimi Räikkönen"],
            answer: "Fernando Alonso"
        },
        {
            question: "Who won the first Formula 1 World Championship in 1950?",
            options: ["Juan Manuel Fangio", "Alberto Ascari", "Nino Farina", "Ayrton Senna"],
            answer: "Nino Farina"
        },
        {
            question: "Which driver has the most career pole positions?",
            options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"],
            answer: "Lewis Hamilton"
        },
        {
            question: "What is the name of the Monaco Grand Prix venue?",
            options: ["Circuit de Monaco", "Monaco International Circuit", "Monte Carlo Circuit", "Monte Carlo Grand Prix Circuit"],
            answer: "Circuit de Monaco"
        },
        {
            question: "Which driver is known for his famous 'Senna S' corner at the Brazilian Grand Prix?",
            options: ["Ayrton Senna", "Nelson Senna", "Felipe Senna", "Rubens Senna"],
            answer: "Ayrton Senna"
        },
        {
            question: "Which team won the Constructors' Championship in 2022?",
            options: ["Red Bull Racing", "Ferrari", "Mercedes", "McLaren"],
            answer: "Red Bull Racing"
        },
        {
            question: "Who won the Formula 1 World Championship in 1979?",
            options: ["Mario Andretti", "Jody Scheckter", "Nelson Piquet", "Alan Jones"],
            answer: "Jody Scheckter"
        },
        {
            question: "Which driver won the 2011 Formula 1 World Championship?",
            options: ["Sebastian Vettel", "Lewis Hamilton", "Fernando Alonso", "Mark Webber"],
            answer: "Sebastian Vettel"
        },
        {
            question: "Who is the only driver to win the Formula 1 World Championship with both Ferrari and McLaren?",
            options: ["Ayrton Senna", "Kimi Räikkönen", "Emerson Fittipaldi", "Niki Lauda"],
            answer: "Emerson Fittipaldi"
        },
        
        {
            question: "Which driver won the 1991 Formula 1 World Championship?",
            options: ["Nigel Mansell", "Ayrton Senna", "Michael Schumacher", "Alain Prost"],
            answer: "Ayrton Senna"
        },
        {
            question: "Who won the 2019 Formula 1 World Championship?",
            options: ["Lewis Hamilton", "Valtteri Bottas", "Max Verstappen", "Charles Leclerc"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Which driver was the first to win a Formula 1 race for Red Bull Racing?",
            options: ["David Coulthard", "Mark Webber", "Sebastian Vettel", "Daniel Ricciardo"],
            answer: "David Coulthard"
        },
        {
            question: "What is the maximum number of teams that can compete in a Formula 1 season?",
            options: ["10", "11", "12", "13"],
            answer: "10"
        },
        {
            question: "Which driver has the most wins at the Australian Grand Prix?",
            options: ["Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel", "Alain Prost"],
            answer: "Michael Schumacher"
        },
        {
            question: "Which team did Daniel Ricciardo drive for in his debut Formula 1 season?",
            options: ["Toro Rosso", "Red Bull Racing", "McLaren", "Renault"],
            answer: "Toro Rosso"
        },
        {
            question: "Who holds the record for the most fastest laps in Formula 1 history?",
            options: ["Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel", "Kimi Räikkönen"],
            answer: "Michael Schumacher"
        },
        {
            question: "Which driver won the Formula 1 World Championship in 1996?",
            options: ["Jacques Villeneuve", "Mika Häkkinen", "Damon Hill", "Michael Schumacher"],
            answer: "Damon Hill"
        },
        {
            question: "Who won the first Formula 1 race held in Japan?",
            options: ["Jackie Stewart", "James Hunt", "Mario Andretti", "Nelson Piquet"],
            answer: "Jackie Stewart"
        },
        {
            question: "Which driver won the 2017 Formula 1 World Championship?",
            options: ["Lewis Hamilton", "Sebastian Vettel", "Kimi Räikkönen", "Nico Rosberg"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Which Formula 1 race is known for its 'Ascari Chicane'?",
            options: ["Monaco Grand Prix", "Italian Grand Prix", "Spanish Grand Prix", "British Grand Prix"],
            answer: "Italian Grand Prix"
        },
        {
            question: "Which driver won the 2020 Formula 1 World Championship?",
            options: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Sergio Pérez"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Which team did Sebastian Vettel drive for when he won his first World Championship?",
            options: ["Red Bull Racing", "Ferrari", "Toro Rosso", "Mercedes"],
            answer: "Red Bull Racing"
        },
        {
            question: "Which driver is known for his famous overtake at the 2012 Brazilian Grand Prix?",
            options: ["Sebastian Vettel", "Mark Webber", "Fernando Alonso", "Lewis Hamilton"],
            answer: "Sebastian Vettel"
        },
        {
            question: "Which driver won the 1998 Formula 1 World Championship?",
            options: ["Mika Häkkinen", "Michael Schumacher", "David Coulthard", "Eddie Irvine"],
            answer: "Mika Häkkinen"
        },
        {
            question: "Which driver won the 2021 Formula 1 World Championship?",
            options: ["Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Valtteri Bottas"],
            answer: "Max Verstappen"
        },
        {
            question: "Which driver won the first Formula 1 race of the 21st century?",
            options: ["Michael Schumacher", "Mika Häkkinen", "Jacques Villeneuve", "Fernando Alonso"],
            answer: "Michael Schumacher"
        },
        {
            question: "Which Formula 1 race is known for its 'Eau Rouge' corner?",
            options: ["Belgian Grand Prix", "French Grand Prix", "Monaco Grand Prix", "Spanish Grand Prix"],
            answer: "Belgian Grand Prix"
        },
        {
            question: "Who is the youngest driver to win a Formula 1 race?",
            options: ["Sebastian Vettel", "Max Verstappen", "Lewis Hamilton", "Fernando Alonso"],
            answer: "Max Verstappen"
        },
        {
            question: "Which team did Fernando Alonso drive for when he won his two World Championships?",
            options: ["McLaren", "Ferrari", "Renault", "Alpine"],
            answer: "Renault"
        },
        {
            question: "Who won the 2002 Formula 1 World Championship?",
            options: ["Michael Schumacher", "Rubens Barrichello", "Kimi Räikkönen", "David Coulthard"],
            answer: "Michael Schumacher"
        },
        {
            question: "Which driver holds the record for the most consecutive race finishes?",
            options: ["Lewis Hamilton", "Kimi Räikkönen", "Michael Schumacher", "Sebastian Vettel"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Which driver won the 2018 Formula 1 World Championship?",
            options: ["Lewis Hamilton", "Sebastian Vettel", "Max Verstappen", "Valtteri Bottas"],
            answer: "Lewis Hamilton"
        },
        {
            question: "Which driver won the 1975 Formula 1 World Championship?",
            options: ["Niki Lauda", "Emerson Fittipaldi", "Jackie Stewart", "Carlos Reutemann"],
            answer: "Niki Lauda"
        },
        {
            question: "Who won the 1993 Formula 1 World Championship?",
            options: ["Alain Prost", "Ayrton Senna", "Damon Hill", "Michael Schumacher"],
            answer: "Alain Prost"
        }
    ];
    


export default f1QuizQuestions;
