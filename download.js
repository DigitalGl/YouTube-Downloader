const { exec } = require('child_process');
const fs = require('fs');

function downloadVideo(url) {
    return new Promise((resolve, reject) => {
        const command = `yt-dlp -f bestvideo+bestaudio "${url}"`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Ошибка при скачивании ${url}: ${error.message}`);
                reject(error);
                return;
            }
            console.log(`Видео ${url} успешно скачано!`);
            resolve();
        });
    });
}

async function downloadVideosSequentially() {
    try {
        const rawData = fs.readFileSync('youtube.json', 'utf-8');
        const links = JSON.parse(rawData);
        for (const link of links) {
            console.log(`Начинаю скачивание: ${link}`);
            await downloadVideo(link);
        }
        console.log('Все видео скачаны!');
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

downloadVideosSequentially();