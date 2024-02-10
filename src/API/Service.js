export default class Service {
    static async registration(login, password) {
        const res = await fetch(`https://front-test.hex.team/api/register?username=${login}&password=${password}`, {
            method: 'POST'
        });

        if (res.status === 200) {
            const response = await res.json();
            return response;
        } else return {error: 'error'};
    }

    static async login(login, password) {
        const res = await fetch(`https://front-test.hex.team/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: login, 
                password: password
            })
        });

        if (res.status === 200) {
            const response = await res.json();
            return response;
        } else return {error: 'error'};
    }

    static async getStatistic(limit, offset) {
        const token = localStorage.getItem('access_token');
        const tokenType = localStorage.getItem('token_type');

        const res = await fetch(`https://front-test.hex.team/api/statistics?offset=${offset}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            }
        });

        if (res.status === 200) {
            const response = await res.json();
            return response;
        } else return {error: 'error'};
    }

    static async addLink(link) {
        const token = localStorage.getItem('access_token');
        const tokenType = localStorage.getItem('token_type');

        const res = await fetch(`https://front-test.hex.team/api/squeeze?link=${link}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            }
        });

        if (res.status === 200) {
            const response = await res.json();
            return response;
        } else return {error: 'error'};
    }
}
