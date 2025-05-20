import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 500 }, // Aumenta até 500 usuários
        { duration: '4m', target: 500 },  // Mantém 500 usuários
        { duration: '30s', target: 0 },   // Diminui até 0
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% das requisições devem ser < 500ms
        http_req_failed: ['rate<0.01'],   // Taxa de falhas deve ser < 1%
    }
};

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/posts/1');

    check(res, {
        'status é 200': (r) => r.status === 200,
        'tempo de resposta < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1); // simula um usuário real com tempo de espera entre requisições
}
