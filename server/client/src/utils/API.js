import axios from "axios";

export default {
  getCurrentLeagueTournament: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/tournaments/running?token=X3drf1j8uCkYcZ1s1U0lpT_TXuzRqLqlCad7B08cGTsKSSm2moU");
  },
  
  getCurrentMatches: function() {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co/tournaments/league-of-legends-world-championship-2019-group-d/matches?token=X3drf1j8uCkYcZ1s1U0lpT_TXuzRqLqlCad7B08cGTsKSSm2moU");
  }
};
