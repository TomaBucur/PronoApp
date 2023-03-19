// MockDataProvider.js

const getMockData = () => {
  const company = {
    name: "Awesome Company",
    address: "Ferentexas , Bucuresti",
    phoneNumber: "+1 (555) 123-4567",
    email: "info@awesomecompany.com",
    website: "www.awesomecompany.com",
  };
  const achievements = [
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
    {
      image: require("../../assets/epl.png"),
      isAquiered: true,
      dateAquiered: new Date("2023-08-01"),
      importance: 1,
    },
  ];
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
      userPosition: "15/30",
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
      userPosition: "30/30",
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
      userPosition: "10/30",
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
      userPosition: "2/30",
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
      userPosition: "-/30",
    },
    {
      id: 6,
      name: "Tournament 6",
      startingDate: new Date("2023-07-01"),
      endingDate: new Date("2023-07-15"),
      tournamentStatus: "Ended",
      championshipName: "Liga 1 Bergembier",
      signedPlayers: 35,
      championshipId: 2,
      userId: 1,
      userPosition: "2/30",
    },
    {
      id: 7,
      name: "Tournament 7",
      startingDate: new Date("2023-08-01"),
      endingDate: new Date("2023-08-15"),
      tournamentStatus: "Upcoming",
      championshipName: "BundesLiga",
      signedPlayers: 30,
      championshipId: 3,
      userId: 1,
      userPosition: "-/30",
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
  const matchData = {
    id: 1,
    championshipId: 1,
    championship: {
      name: 'Champions League',
    },
    hostTeam: 'Team A',
    guestTeam: 'Team B',
    hostTeamGoals: 2,
    guestTeamGoals: 2,
    winner: null,
    startingDate: '2023-03-19T15:30:00',
    matchStatus: 'InProgress',
    events: [
      {
        id: 1,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 1',
        team: 'Team A',
        minute: 15,
      },
      {
        id: 2,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 2',
        team: 'Team B',
        minute: 25,
      },
      {
        id: 3,
        matchId: 1,
        eventType: 'YellowCard',
        player: 'Player 3',
        team: 'Team A',
        minute: 40,
      },
      {
        id: 4,
        matchId: 1,
        eventType: 'YellowCard',
        player: 'Player 4',
        team: 'Team B',
        minute: 55,
      },
      {
        id: 5,
        matchId: 1,
        eventType: 'Substitution',
        player: 'Player 5',
        team: 'Team A',
        minute: 60,
      },
      {
        id: 6,
        matchId: 1,
        eventType: 'Substitution',
        player: 'Player 6',
        team: 'Team B',
        minute: 65,
      },
      {
        id: 7,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 7',
        team: 'Team A',
        minute: 70,
      },
      {
        id: 8,
        matchId: 1,
        eventType: 'YellowCard',
        player: 'Player 8',
        team: 'Team B',
        minute: 75,
      },
      {
        id: 9,
        matchId: 1,
        eventType: 'Substitution',
        player: 'Player 9',
        team: 'Team A',
        minute: 80,
      },
      {
        id: 10,
        matchId: 1,
        eventType: 'RedCard',
        player: 'Player 10',
        team: 'Team B',
        minute: 85,
      },
      {
        id: 11,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 11',
        team: 'Team A',
        minute: 88,
      },
      {
        id: 12,
        matchId: 1,
        eventType: 'YellowCard',
        player: 'Player 12',
        team: 'Team A',
        minute: 90,
      },
      {
        id: 13,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 13',
        team: 'Team B',
        minute: 92,
      },
      {
        id: 14,
        matchId: 1,
        eventType: 'Substitution',
        player: 'Player 14',
        team: 'Team A',
        minute: 94,
      },
      {
        id: 15,
        matchId: 1,
        eventType: 'YellowCard',
        player: 'Player 15',
        team: 'Team B',
        minute: 96,
      },
      {
        id: 16,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 16',
        team: 'Team B',
        minute: 100,
      },
      {
        id: 17,
        matchId: 1,
        eventType: 'Goal',
        player: 'Player 17',
        team: 'Team A',
        minute: 105,
      },
      {
        id: 18,
        matchId: 1,
        eventType: 'RedCard',
        player: 'Player 18',
        team: 'Team A',
        minute: 110,
      }
      
    ],
  };
  
  const pronosticData = {
    id: 1,
    matchId: 1,
    userId: 1,
    user: {
      name: 'User A',
    },
    hostTeamGoalsPronostic: 2,
    guestTeamGoalsPronostic: 1,
    goalsDifferencePronostic: 1,
  };
  
  return {
    users,
    tournaments,
    championships,
    matches,
    pronostics,
    achievements,
    company,
    pronosticData,
    matchData,
  };
};

export default getMockData;