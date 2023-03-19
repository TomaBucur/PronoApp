// MockDataProvider.js

const getMockData = () => {
  const achievements = [
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },{ 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
    { 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },{ 
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1
    },
  ]
  const users = [
    {
      id: 1,
      name: "Vlad the Impaler",
      email: "vlad@example.com",
      password: "password123",
      phone: "123-456-7890",
      goodPronostics: 10,
      badPronostics: 5,
      registrationDate: new Date("2023-01-01"),
      userRole: "USER",
      tournamentId: 1,
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      password: "password456",
      phone: "234-567-8901",
      goodPronostics: 15,
      badPronostics: 8,
      registrationDate: new Date("2023-02-01"),
      userRole: "USER",
      tournamentId: 2,
    },
  ];

  const tournaments = [
    {
      id: 1,
      name: "Tournament 1",
      startingDate: new Date("2023-04-01"),
      endingDate: new Date("2023-04-15"),
      tournamentStatus: "OnGoing",
      championshipName: "La Liga",
      signedPlayers: 24,
      championshipId: 1,
      userId: 1,
    },
    {
      id: 2,
      name: "Tournament 2",
      startingDate: new Date("2023-05-01"),
      endingDate: new Date("2023-05-15"),
      tournamentStatus: "Open To Registration",
      championshipName: "Primera Division",
      signedPlayers: 24,
      championshipId: 1,
      userId: 1,
    },
    {
      id: 3,
      name: "Tournament 3",
      startingDate: new Date("2023-06-01"),
      endingDate: new Date("2023-06-15"),
      tournamentStatus: "Close to Registration",
      championshipName: "Premier League",
      signedPlayers: 24,
      championshipId: 2,
      userId: 1,
    },
    {
      id: 4,
      name: "Tournament 4",
      startingDate: new Date("2023-07-01"),
      endingDate: new Date("2023-07-15"),
      tournamentStatus: "Ended",
      championshipName: "Liga 1 Bergembier",
      signedPlayers: 35,
      championshipId: 2,
      userId: 1,
    },
    {
      id: 5,
      name: "Tournament 5",
      startingDate: new Date("2023-08-01"),
      endingDate: new Date("2023-08-15"),
      tournamentStatus: "Upcoming",
      championshipName: "BundesLiga",
      signedPlayers: 30,
      championshipId: 3,
      userId: 1,
    },
  ];

  const championships = [
    {
      name: "English Premier League",
      id: 1,
      teams: 20,
      country: "England",
      image: require("../../assets/epl.png"),
      championshipType: "League",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "La Liga",
      id: 2,
      teams: 20,
      country: "Spain",
      image: require("../../assets/laLiga.png"),
      championshipType: "League",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "Bundesliga",
      id: 3,
      teams: 18,
      country: "Germany",
      image: require("../../assets/bundesliga.png"),
      championshipType: "League",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "Serie A",
      id: 4,
      teams: 20,
      country: "Italy",
      image: require("../../assets/seriaA.png"),
      championshipType: "League",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "Ligue 1",
      id: 5,
      teams: 20,
      country: "France",
      image: require("../../assets/ligue1.png"),
      championshipType: "League",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "UEFA Champions League",
      id: 6,
      teams: 32,
      country: "Europe",
      image: require("../../assets/championsLeague.png"),
      championshipType: "Cup",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "UEFA Europa League",
      id: 7,
      teams: 48,
      country: "Europe",
      image: require("../../assets/europaLeague.png"),
      championshipType: "Cup",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
    {
      name: "FIFA World Cup",
      id: 8,
      teams: 32,
      country: "International",
      image: require("../../assets/worldCup.png"),
      championshipType: "Cup",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-05-20"),
    },
  ];

  const matches = [
    {
      id: 1,
      championshipId: 1,
      homeTeam: "FC Barcelona",
      awayTeam: "Real Madrid",
      date: new Date("2023-04-01"),
      homeTeamLogoUrl: "https://example.com/fc_barcelona_logo.png",
      awayTeamLogoUrl: "https://example.com/real_madrid_logo.png",
      stadium: "Camp Nou",
      city: "Barcelona",
    },
    {
      id: 2,
      championshipId: 1,
      homeTeam: "Atletico Madrid",
      awayTeam: "Valencia",
      date: new Date("2023-04-02"),
      homeTeamLogoUrl: "https://example.com/atletico_madrid_logo.png",
      awayTeamLogoUrl: "https://example.com/valencia_logo.png",
      stadium: "Wanda Metropolitano",
      city: "Madrid",
    },
  ];

  const pronostics = [
    {
      id: 1,
      userId: 1,
      matchId: 1,
      homeTeamScore: 2,
      awayTeamScore: 1,
      createdAt: new Date("2023-03-30"),
      updatedAt: new Date("2023-03-30"),
    },
    {
      id: 2,
      userId: 2,
      matchId: 1,
      homeTeamScore: 1,
      awayTeamScore: 1,
      createdAt: new Date("2023-03-29"),
      updatedAt: new Date("2023-03-29"),
    },
  ];
  return {
    users,
    tournaments,
    championships,
    matches,
    pronostics,
    achievements
  };
};

export default getMockData;
