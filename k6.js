import http from 'k6/http';
import { check, fail } from 'k6';

export default function () {
    const url = 'https://postman-echo.com/post';

    const payload = JSON.stringify({
        username: 'someuser',
        password: 'somepassword'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = http.post(url,payload,params);

    const checkOutput = check(
        res,
        {
            'response code was 200': (r) => r.status === 200,
            'body size was less than 1234 bytes': (r) => r.body.length < 1234,
            'body has username': (r) => r.body.includes('username'),
            'headers has content json': (r) => r.headers['Content-Type'].includes('json'),
        },
        { myTag: "I'm a tag" }
    );

    if (!checkOutput) {
        fail('unexpected response');
    }
}
