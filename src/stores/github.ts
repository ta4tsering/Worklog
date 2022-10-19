import { defineStore } from 'pinia';
import axios from 'axios';

export const useGithubStore = defineStore('github', {
  state: () => {
    return {
      username: '',
      repos: [],
      contribRepos: [],
      date: '',
    };
  },

  actions: {
    async fetchContribRepos(value: string) {
      console.log('fetchContribRepos', value);
      // fetch data
      const response = await axios.get(
        'https://raw.githubusercontent.com/10zinten/Worklog/main/data/contributors_repos.json'
      );
      this.repos = response.data[this.username];
      this.contribRepos = response.data[this.username];
    },
  },
});
