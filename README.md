#Page for "TestTask - SignIn & SignUp forms + server exchange"

## Author - Denis Ulesov

##[!CAUTION] Attention - install via `npm i --legacy-peer-deps`
##[!ПРЕДУПРЕЖДЕНИЕ] устанавливайте командой `npm i --legacy-peer-deps`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Постановка задачи:

Требуется сверстать на React по дизайну десктоп/мобилкаhttps://www.figma.com/file/rk10MtFANuCg4DkF9duzdz/SignIn%2FSignUp?type=design&mode=design&t=fKtY8tRf6xSTEuQr-0
●	Без использования сторонних библиотек для форм
●	Можно использовать стейт менеджер типа Zustand / Effector
●	Иконки соцсетей просто ссылки на соцсети
●	При отправки формы должна произойти валидация полей.
●	Имя - минимум 3 символа
●	Почта - валидная почта
●	Пароль - 1 заглавная буква, 1 строчная буква, 1 цифра, Не менее 8 символов
Если форма валидная, требуется отправить запрос на https://jsonplaceholder.typicode.com/users
●	Тут есть 10 тестовых юзеров
●	Для логина успешным считается совпадение username и email из этих 10 тестовых юзеров
●	Для регистрации username, email, и для пароля поля city + zipcode
Предоставить ссылку на код и на реализацию. (изменено)
