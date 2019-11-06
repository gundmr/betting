import axios from "axios";
const keys = require('../config/keys');
const apiKey = keys.pandaKey;

export default {
  getCurrentLeagueTournament: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/tournaments/running?token="+apiKey);
  },
  
  getCurrentMatches: function(tournament) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co/tournaments/"+tournament+"/matches?token="+apiKey);
  },

  getCurrentGame: function(game) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co/matches/"+game+"?token="+apiKey);
  },

  getPlayersFromTeam: function(team) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co/teams/"+team+"?token="+apiKey);
  },

  // Get current user
  getUser: function() {
    return axios.get("/api/current_user/");
  },

  //save bet
  saveBet: function(betPoint) {
		return axios.post('/api/bet', betPoint);
  }


};
