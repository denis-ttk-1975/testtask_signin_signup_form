
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const userSignIn = async (userEmail: string) => {

const response = await fetch(API_URL);
if (!response.ok) throw response;

const users = await response.json();

const subscriber = users.find((item: {email: string} & Record<string, unknown>) => item.email === userEmail);

if (subscriber) {window.alert(`Приветствую Вас, ${subscriber.name}`)}
else {window.alert(`Пользователь с почтой ${userEmail} на сервере не найден`)}

return;}

export const userCreate = async (user: {name: string, email: string, password: string}) => {

const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)});
        if (!response.ok) throw response;

        window.alert(`данные для регистрации отправлены на сервер`)

        return;}