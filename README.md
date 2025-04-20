# YouTube Video Downloader 

Скрипт на Node.js, который скачивает видео с YouTube из списка ссылок в `youtube.json`, используя [yt-dlp](https://github.com/yt-dlp/yt-dlp). Видео скачиваются последовательно, одно за другим.

## Как работает

1. Скрипт читает список ссылок из файла `youtube.json`.
2. Каждая ссылка скачивается с помощью `yt-dlp` в наилучшем качестве (видео + аудио).
3. Все действия происходят последовательно (одно видео за раз).

## Структура проекта

```bash
├── download.js       # Главный скрипт для скачивания видео
├── youtube.json      # Массив ссылок на YouTube-видео
```

## Требования

Перед запуском убедись, что установлены:

- **Node.js** (v14 или выше)
- **yt-dlp** — утилита для скачивания видео

### Установка yt-dlp:

#### Для Windows:

```bash
pip install -U yt-dlp
```

или скачай [исполняемый файл](https://github.com/yt-dlp/yt-dlp/releases/latest) и положи его в переменные среды (Path).

#### Для Linux/macOS:

```bash
brew install yt-dlp
# или
sudo curl -L https://yt-dlp.org/downloads/latest/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

## Как запустить

1. Установи зависимости (если появятся, но по факту `fs` и `child_process` — встроенные модули Node.js):

```bash
npm init -y # только если хочешь создать package.json
```

2. Добавь свои ссылки в `youtube.json`:

```json
[
    "https://www.youtube.com/watch?v=Y01xzaGJ_lc",
    "https://www.youtube.com/watch?v=3jPrXxkH6ZI"
]
```

3. Запусти скрипт:

```bash
node download.js
```

## Важно

- Видео скачиваются в том же каталоге, где запускается скрипт.
- Скрипт скачивает **лучшее видео и лучшее аудио**, комбинируя их.
- Убедись, что `yt-dlp` работает из командной строки (пропиши его в `PATH`, если не найден).