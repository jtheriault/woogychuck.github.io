var nickNames = [
      'The Atomic Flea',
      'The Refridgerator',
      'Ironhead',
      'Flash',
      'Sweet Feet',
      'Shoeless',
      'The Enigma',
      'Tiny',
      'The GOAT',
      'Bacon Master',
      'The Big Unit',
      'Hot Donut',
      'Niblets',
      'Buffet Destroyer',
      'The Sexy Panda',
      'Real Deal',
      'Thunder From Down Under',
      'Grim Reaper',
      'The Yello Mamba',
      'Swaggy P',
      'Hard Ball',
      'Stinky',
      'White Chocolate',
      'Greased Lightning',
      'Snake Shot',
      'Boomstick',
      'Godzilla',
      'The Flying Nun',
      'Sweet Pea',
      'The Big Hurt',
      'Sweetness',
      'Killer Bee',
      'No Spins',
      'Ghost Rider',
      'Goose',
      'The Hitman',
      'The Iceman',
      'The Mailman',
      'The Mountain',
      'Just A Really OK Dude',
      'Prime Time',
      'The Intimidator',
      'Crazy Legs',
      'Danger',
      'The Dream',
      'The Microwave',
      'Bob',
      'Golden Toes',
      'Bowling Ball'
    ];

var prefixes = [
      'Amazing ',
      'Automatic ',
      'Bombastic ',
      'Brawny ',
      'Curvy ',
      'Dominating ',
      'Eternal ',
      'Elite ',
      'Enthusiastic ',
      'Fumbling ',
      'Fightin\' ',
      'Formerly known as the ',
      'Galloping ',
      'Invincible ',
      'Just the ',
      'Killer ',
      'Manchester ',
      'Mammoth ',
      'Maurading ',
      'Mighty ',
      'Mauled by ',
      'Nefarious ',
      'Not Nice ',
      'Oh No It\'s the ',
      'Perilous ',
      'Prickly',
      'Robotic ',
      'Stinky ',
      'Slap-Happy ',
      'Stupendous ',
      'Sweet ',
      'Terrible ',
      'United by ',
      'Made of ',
      'Smells like ',
      'Smarter than your average ',
      'Well Done ',
      'A Nice Side of ',
      'Dances with ',
      'Monkey Fightin\' ',
      'Drunk ',
      'Strongly Typed ',
      'A Lightweight Framework for ',
      'Rougishly Handsome ',
      'Save the ',
      'Rock Me ',
      'Hay is for ',
      'Flock of ',
      'A Barrel of ',
      'Basic ',
      'East Idaho ',
      'Deep Indigo Blue ',
      'The Harlem '
    ];

var nouns = [
      'Advarks',
      'Actuaries',
      'Certified Public Accountants',
      'Bears',
      'Boars',
      'Bobs',
      'Blobfish',
      'Baboons',
      'Baby Boomers',
      'Browns',
      'Bush Pigs',
      'Chipmunks',
      'Car Salesmen',
      'Ducks',
      'Dogs',
      'Donkeys',
      'Emus',
      'Eagles',
      'Executive Assistants',
      'Flip Flops',
      'Guy Fieris',
      'Gorgons',
      'Grandmas',
      'Geese',
      'Ideas That Are Yours BUT GOD DAMN KAREN STOLE',
      'Jorns',
      'Kangaroos',
      'Kittens',
      'Koalas',
      'Llamas',
      'Laser Beams',
      'Lightning',
      'Ligonberries',
      'Meatballs',
      'Marketing Ideas',
      'Mastadons',
      'Mammoths',
      'Millenials',
      'Nerds',
      'Narwhals',
      'Ninjas',
      'Ostriches',
      'Pandas',
      'Polar Bears',
      'Pandolins',
      'Porcupines',
      'Potato Guns',
      'Pigeons',
      'Quails',
      'Racoons',
      'Rapping Grandmothers',
      'Sea Gulls',
      'Salespeople',
      'Silly Ninnies',
      'Tigers',
      'Toasters',
      'Terriers',
      'Tarantulas',
      'Thunder',
      'Trust Fund Kids',
      'Underdogs',
      'Uncles',
      'Uber Drivers',
      'Zebras'
    ];

  function getNickname(){
    const nickIndex = Math.floor(Math.random() * nickNames.length);
    return nickNames[nickIndex];
  }

  function getTeamName(){
    const preIndex = Math.floor(Math.random() * prefixes.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    return prefixes[preIndex] + nouns[nounIndex];
  }
