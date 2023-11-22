# goit-nodejs-hw-01-command-line-interface

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/KO314z3oDLQ4QFx5Hz0b6lQltWZJjd

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/6vZZMZGOxTtsVFJpgqCk47E6o2znkI
# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/1jCn7Tx7Gm5ts23MWu8wKXtIdK7H3v
# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH 
https://monosnap.com/file/lWxWm2uUFOh0EwZoHUc6f9XmAcwVeX
