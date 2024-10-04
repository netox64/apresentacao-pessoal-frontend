import { useEffect } from "react";

export const Graph = (altura = 100, largura = 100) => {
    const token = 'YOUR_GITHUB_TOKEN';
    const owner = 'owner_name';
    const repo = 'repo_name';

    const handlerChart = () => {
        const languages = ['JavaScript', 'Python', 'HTML', 'CSS', 'Java', 'C++', 'Ruby', 'Go'];
        const percentages = [30, 20, 15, 10, 8, 7, 6, 4];

        fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                const sizes = Object.values(data);
                const total = sizes.reduce((acc, size) => acc + size, 0);
                //const languages = Object.keys(data);
                //const percentages = sizes.map(size => (size / total) * 100);

                const ctx = document.getElementById('languagesChart').getContext('2d');
                const languagesChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: languages,
                        datasets: [{
                            label: 'Distribuição de Linguagens (%)',
                            data: percentages,
                            backgroundColor: 'rgba(0, 123, 255, 0.2)',
                            borderColor: 'rgba(0, 123, 255, 1)',
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scale: {
                            ticks: { beginAtZero: true, max: 100 },
                        }
                    }
                });
            })
            .catch(error => console.error('Erro ao buscar as linguagens:', error));
    }

    useEffect(() => { handlerChart(); }, []);

    return (
        <div className="w-80 h-72">
            <canvas id="languagesChart" width="500" height="500"></canvas>
        </div>
    );
}