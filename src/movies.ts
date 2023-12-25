const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  },
  {
    id: 2,
    title: "The Dark Knight Rises",
    year: 2012,
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
  },
  {
    id: 3,
    title: "Titanic",
    year: 1997,
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  },
  {
    id: 4,
    title: "The Avengers",
    year: 2012,
    description:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster.",
  },
  {
    id: 5,
    title: "Interstellar",
    year: 2014,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 6,
    title: "Jurassic World",
    year: 2015,
    description:
      "As Jurassic World welcomes its first visitors, a park visitor becomes dangerously close to the park's prohibited area.",
  },
  {
    id: 7,
    title: "Star Wars: The Force Awakens",
    year: 2015,
    description:
      "Thirty years after the defeat of the Galactic Empire, Han Solo and his allies face threats from the First Order.",
  },
  {
    id: 8,
    title: "Mad Max: Fury Road",
    year: 2015,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
  },
  {
    id: 9,
    title: "Fight Club",
    year: 1999,
    description:
      "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into much more.",
  },
  {
    id: 10,
    title: "Forrest Gump",
    year: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  },
  {
    id: 11,
    title: "Schindler's List",
    year: 1993,
    description:
      "During the Holocaust, a Polish businessman saves the lives of many Jews at great personal risk.",
  },
  {
    id: 12,
    title: "Raging Bull",
    year: 1980,
    description:
      "The story of boxer Jake LaMotta, whose career was marked by turbulence, both inside and outside the ring.",
  },
  {
    id: 13,
    title: "Casablanca",
    year: 1942,
    description:
      "An American expatriate struggles to decide whether or not to help his former lover and her fugitive husband escape French Morocco.",
  },
  {
    id: 14,
    title: "The Godfather",
    year: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 15,
    title: "Gone with the Wind",
    year: 1939,
    description:
      "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
  },
  {
    id: 16,
    title: "The Wizard of Oz",
    year: 1939,
    description:
      "A farm girl in Kansas dreams of going to Hollywood, where she meets a Scarecrow, a Tin Man, a Cowardly Lion, and a Wicked Witch, who are all working together to kill the Wicked Witch.",
  },
  {
    id: 17,
    title: "Citizen Kane",
    year: 1941,
    description:
      "Follows the life of Charles Foster Kane, a newspaper publisher with ambitions to succeed his father as the greatest publisher in America.",
  },
  {
    id: 18,
    title: "North by Northwest",
    year: 1959,
    description:
      "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
  },
  {
    id: 19,
    title: "Vertigo",
    year: 1958,
    description:
      "A San Francisco detective suffering from acrophobia investigates a mysterious case with help from a psychiatrist in training.",
  },
  {
    id: 20,
    title: "On the Waterfront",
    year: 1954,
    description:
      "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
  },
  {
    id: 21,
    title: "Pulp Fiction",
    year: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 25,
    title: "The Matrix",
    year: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 26,
    title: "Goodfellas",
    year: 1990,
    description:
      "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen Hill and his mob friends Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
  },
  {
    id: 27,
    title: "Seven Samurai",
    year: 1954,
    description:
      "A poor village under attack by bandits recruits seven unemployed samurai to help defend them.",
  },
  {
    id: 28,
    title: "City of God",
    year: 2002,
    description:
      "A gritty drama depicting the life of a young drug dealer growing up in one of the most violent neighborhoods in Rio de Janeiro.",
  },
  {
    id: 29,
    title: "Se7en",
    year: 1995,
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
  },
  {
    id: 30,
    title: "The Silence of the Lambs",
    year: 1991,
    description:
      "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
  },
  {
    id: 31,
    title: "The Shawshank Redemption",
    year: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 32,
    title: "The Godfather Part II",
    year: 1974,
    description:
      "The early life and criminal career of Vito Corleone in 1920s New York City are portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  },
  {
    id: 33,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    description:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
  },
  {
    id: 34,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
  {
    id: 35,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    description:
      "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
  },
  {
    id: 40,
    title: "The Dark Knight",
    year: 2008,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 42,
    title: "Toy Story",
    year: 1995,
    description:
      "A cowboy doll is profoundly threatened and jeopardized when a new spaceman figure supplants him as top toy in a small boy's room.",
  },
  {
    id: 44,
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    description:
      "A mental patient shares insights with his fellow patients as they plan their escape from the institution.",
  },
  {
    id: 45,
    title: "Shawshank Redemption",
    year: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
];
export default movies;
